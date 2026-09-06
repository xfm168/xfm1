/**
 * 八字 AI 报告生成
 * 
 * 复用 V4.4 AI Provider 统一架构
 * - 统一 timeout
 * - 统一 retry
 * - 统一 error mapping
 * - 统一 logger
 */

import { logger } from '../../../utils/logger'
import { getAIService } from '../../../services/ai'
import type { AIMessage, AIResponse, AIModel } from '../../../services/ai/types'
import type { BaZiPipelineResult, BaZiAIReport } from '../pipeline/types'

const aiLogger = logger.child('BaziAI')

const BAZI_REPORT_SECTIONS = [
  '性格分析',
  '事业运势',
  '财富运势',
  '感情婚姻',
  '健康运势',
  '家庭六亲',
  '大运流年',
  '改运建议',
]

export interface BaZiAIReportOptions {
  model?: AIModel
  language?: 'zh' | 'en'
  detailLevel?: 'basic' | 'standard' | 'detailed'
}

/**
 * 生成八字 AI 报告
 * 
 * 复用统一 AI Provider
 */
export async function generateBaZiAIReport(
  pipelineResult: BaZiPipelineResult,
  options: BaZiAIReportOptions = {}
): Promise<BaZiAIReport> {
  aiLogger.info('开始生成八字 AI 报告')

  // V2.0 审计修复：此前 prompt 只使用 chart/geJu/xiYongShen/score 四项基础数据，
  // 完全没有把 pipeline 早已计算好的大运（daYun）、神煞详解（shenShaDetail）、
  // 事业/财富/婚姻/健康专项分析（career/wealth/marriage/health）传给 AI——
  // 导致 AI 在"大运流年""事业运势"等版块只能凭空编写，而不是基于真实计算结果做解读。
  // 这违反了项目自身的核心原则："确定性计算由程序完成，AI 只负责解释"。
  // 修复：把 pipeline 已算出的结构化结果一并传入 prompt，AI 的工作变成
  // "把已有的真实计算结果转述成人话"，而不是"自己编一套听起来合理的内容"。
  const prompt = buildBaZiPrompt(pipelineResult, options)

  try {
    const messages: AIMessage[] = [
      {
        role: 'system',
        content: `你是一位专业的八字命理师，精通传统命理学和现代心理学。
请用专业、客观、积极的语言为用户分析八字。
输出格式为 JSON，包含以下字段：
personality, career, wealth, relationship, health, family, luck, suggestions(字符串数组)

【重要】下方提供的"大运流年""神煞""事业/财富/婚姻/健康专项分析"均为程序已经过
确定性算法计算得出的真实结果，不是猜测。你的任务是把这些已计算好的结果转述、
整合成通顺易懂的人话解读，禁止脱离这些数据凭空编造具体的大运干支、神煞名称、
流年吉凶或数字化断言。若信息不足以支撑某个具体论断，用"传统观点认为……"这类
表述保持谨慎，不要编造没有依据的具体细节。

注意事项：
1. 语言专业但通俗易懂
2. 多讲积极面，少讲消极面
3. 建议要具体可行，且要能对应到上面提供的具体数据（如喜用神、当前大运）
4. 不要说"命由天定"之类的话
5. 强调"命由己造，运靠人为"`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ]

    const response: AIResponse = await getAIService().chat(messages, {
      model: options.model,
      metadata: { type: 'bazi_report' },
    })

    const report = parseAIResponse(response.content, pipelineResult)

    aiLogger.info('八字 AI 报告生成完成')

    return report
  } catch (err) {
    aiLogger.error('AI 报告生成失败', err)
    return getFallbackReport(pipelineResult)
  }
}

function buildBaZiPrompt(
  pipelineResult: BaZiPipelineResult,
  options: BaZiAIReportOptions
): string {
  const { chart, geJu, xiYongShen, score, daYun, career, marriage, wealth, health, shenShaDetail } = pipelineResult
  const { sixLines, dayMaster } = chart

  const shenShaText = shenShaDetail?.items?.length
    ? shenShaDetail.items
        .map((s) => `${s.name}（${s.position}，${s.isAuspicious ? '吉神' : '凶煞'}）`)
        .join('、')
    : '无特殊神煞或未计算'

  const currentDaYunText = (() => {
    if (!daYun || daYun.steps.length === 0) return '未计算'
    const step = daYun.steps[Math.max(0, daYun.currentStepIndex)]
    if (!step) return '未计算'
    return `${step.ganZhi.gan}${step.ganZhi.zhi}（${step.startAge}~${step.endAge}岁，${step.startYear}~${step.endYear}年，${step.isXi ? '喜用运' : step.isJi ? '忌神运' : '中性运'}）`
  })()

  const careerText = career
    ? `倾向：${career.bestPath || '未知'}；财运方向：${career.wealthDirection || '未知'}；概要：${career.summary || ''}`
    : '未计算'
  const marriageText = marriage?.summary || '未计算'
  const wealthText = wealth?.summary || '未计算'
  const healthText = health?.summary || '未计算'

  return `请分析以下八字命盘：

【基本信息】
日主：${dayMaster.dayGan}${dayMaster.dayGanElement}
性别：${chart.birthInfo?.gender || '未知'}
出生：${chart.birthInfo?.birthDate || '未知'} ${chart.birthInfo?.birthTime || '未知'}

【四柱】
年柱：${sixLines.year.gan}${sixLines.year.zhi}（${sixLines.year.naYin}）
月柱：${sixLines.month.gan}${sixLines.month.zhi}（${sixLines.month.naYin}）
日柱：${sixLines.day.gan}${sixLines.day.zhi}（${sixLines.day.naYin}）
时柱：${sixLines.hour.gan}${sixLines.hour.zhi}（${sixLines.hour.naYin}）

【十神】
年干：${sixLines.year.shenShi || '未知'}
月干：${sixLines.month.shenShi || '未知'}
日干：${sixLines.day.shenShi || '未知'}
时干：${sixLines.hour.shenShi || '未知'}

【旺衰】
旺衰状态：${dayMaster.wangShuai || '未知'}
力量评分：${dayMaster.strengthScore || 0}/100

【格局】
格局名称：${geJu.name || '正格'}
格局描述：${geJu.description || ''}

【喜用神】
喜神：${xiYongShen.firstHappy || ''} ${xiYongShen.secondHappy || ''} ${xiYongShen.thirdHappy || ''}
用神：${xiYongShen.firstUsage || ''} ${xiYongShen.secondUsage || ''}
忌神：${xiYongShen.avoidedElements?.join('、') || ''}

【五行分布】
木：${chart.fiveElementCount?.['木']?.toFixed(1) || 0}
火：${chart.fiveElementCount?.['火']?.toFixed(1) || 0}
土：${chart.fiveElementCount?.['土']?.toFixed(1) || 0}
金：${chart.fiveElementCount?.['金']?.toFixed(1) || 0}
水：${chart.fiveElementCount?.['水']?.toFixed(1) || 0}

【神煞】（程序真实计算结果，不要虚构其他神煞名称）
${shenShaText}

【当前大运】（程序真实计算结果，请以此为准展开"大运流年"分析，不要编造其他干支）
${currentDaYunText}

【事业专项分析】（程序已计算，直接转述整合）
${careerText}

【财富专项分析】（程序已计算，直接转述整合）
${wealthText}

【婚姻感情专项分析】（程序已计算，直接转述整合）
${marriageText}

【健康专项分析】（程序已计算，直接转述整合）
${healthText}

【综合评分】
总评：${score.overall || 0}/100

请从以下8个方面详细分析：
1. 性格分析（基于日主五行、格局、旺衰特点）
2. 事业运势（结合上方"事业专项分析"展开，不要脱离给出的数据另起炉灶）
3. 财富运势（结合上方"财富专项分析"和喜用神展开）
4. 感情婚姻（结合上方"婚姻感情专项分析"展开）
5. 健康运势（结合上方"健康专项分析"展开）
6. 家庭六亲
7. 大运流年（必须基于上方【当前大运】给出的真实干支和起止年龄展开，不得编造其他大运信息）
8. 改运建议（至少5条具体建议，尽量对应喜用神的五行方位/颜色/行业）

请用专业但通俗的语言，输出JSON格式。`
}

function parseAIResponse(content: string, pipelineResult: BaZiPipelineResult): BaZiAIReport {
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return {
        personality: parsed.personality || '',
        career: parsed.career || '',
        wealth: parsed.wealth || '',
        relationship: parsed.relationship || '',
        health: parsed.health || '',
        family: parsed.family || '',
        luck: parsed.luck || '',
        suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
      }
    }
  } catch {
    // 解析失败，返回 fallback
  }

  return getFallbackReport(pipelineResult)
}

/**
 * AI 调用失败时的降级报告。
 *
 * V2.0 审计修复：此前完全是与命盘无关的通用套话（任何人拿到的文字都一模一样）。
 * 现在改为直接复用 pipeline 已经计算好的确定性结果（career/wealth/marriage/health
 * 各专项分析的 summary、当前大运干支），即使 AI 调用失败，用户看到的内容依然是
 * 基于自己真实命盘的结论，而不是放之四海皆准的空话——这也更符合"确定性计算优先，
 * AI 只是锦上添花的转述层"的项目原则：AI 挂掉时，确定性计算的结果依然可用。
 */
function getFallbackReport(pipelineResult: BaZiPipelineResult): BaZiAIReport {
  const { geJu, xiYongShen, career, wealth, marriage, health, daYun } = pipelineResult

  const currentDaYun = daYun && daYun.steps.length > 0
    ? daYun.steps[Math.max(0, daYun.currentStepIndex)]
    : undefined

  const xiShenText = [xiYongShen.firstHappy, xiYongShen.secondHappy].filter(Boolean).join('、')

  return {
    personality: `您的日主格局为「${geJu.name || '正格'}」，${geJu.description || '性格特质需结合命盘细节综合判断。'}`,
    career: career?.summary || '事业运势平稳，建议稳步发展，不宜冒进。',
    wealth: wealth?.summary || `财运方面，喜用神为${xiShenText || '五行调和'}，宜在相关方位、行业寻求发展。`,
    relationship: marriage?.summary || '感情运势平顺，需多沟通理解。',
    health: health?.summary || '身体总体健康，注意作息规律。',
    family: '家庭关系和睦，需多陪伴家人。',
    luck: currentDaYun
      ? `当前大运为${currentDaYun.ganZhi.gan}${currentDaYun.ganZhi.zhi}（${currentDaYun.startAge}~${currentDaYun.endAge}岁），${currentDaYun.isXi ? '整体偏喜用，运势较为顺遂' : currentDaYun.isJi ? '整体偏忌神，宜谨慎稳健行事' : '吉凶参半，需具体分析'}。`
      : '运势稳中上升，把握机遇可有所成。',
    suggestions: [
      xiShenText ? `五行喜用神为${xiShenText}，日常可多接触相关颜色、方位、行业` : '保持积极乐观的心态',
      '注重身体健康，规律作息',
      '多学习提升自我',
      '与人为善，广结善缘',
      '脚踏实地，稳步前行',
    ],
  }
}

export { BAZI_REPORT_SECTIONS }
export default generateBaZiAIReport
