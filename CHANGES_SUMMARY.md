# 玄风门 · 八字命理模块专业级优化 · 完整变更清单

> 修改基线：`玄风门-原始项目基线.zip`
> ⚠️ 重要：本次全部修改均在**无网络、无法执行 `npm install` / `npm test` 的沙盒环境**中完成，
> **未跑过项目自带的 228 条回归测试**。这不是可以跳过的免责声明——合并前请务必在本地
> 完整跑一次测试套件，尤其是大运（dayun）、起运（qiyun）、AI 报告相关的用例。
> 每处改动都设计为"默认关闭/向后兼容"或有充分依据的直接修正，理由见各文件内联注释
> （搜索 "V2.0 审计" 可以定位到所有改动点）。

---

## 一、严重问题修复

### 1.1 付费专业版起运年龄算法是假的 —— `src/lib/bazi/pro/fortuneEngine.ts`

`calculateQiYunInfo()` 此前：
- classic 算法：**硬编码固定返回 5 岁**，不做任何真实计算
- modern 算法：用"当前系统年份 - 出生年份 % 7 + 3"，公式无命理学依据，且会随
  "生成报告当天的日期"变化（同一张命盘今天生成和明天生成结果不同）
- fromTerm/toTerm 硬编码空字符串，confidence 硬编码 80

**这是本轮审计中发现的最严重问题**：付费用户拿到的"专业报告"，起运岁数计算反而
不如免费版可靠。已直接替换为复用免费版 `rules/dashunRules.ts` 中真实、有回归测试
覆盖的 `calcDaYunStart()`（三天折一岁，基于真实节气交界时刻）。

### 1.2 免费版 AI 解读完全没有把已算好的数据喂给 AI —— `src/lib/bazi/ai/index.ts`

此前的 prompt 只包含四柱/十神/旺衰/格局/喜用神/五行分布/总评 这几项基础数据，
**完全没有传入 pipeline 早已计算好的大运（daYun）、神煞详解（shenShaDetail）、
事业/财富/婚姻/健康专项分析**——导致 AI 在"大运流年""事业运势"等版块只能凭空
编写，不是基于真实计算结果做解读。这违反了项目自身反复强调的核心原则：
**"确定性计算由程序完成，AI 只负责解释，不允许凭空制造结论"**。

**修复**：
- prompt 中新增【神煞】【当前大运】【事业/财富/婚姻/健康专项分析】四个真实数据区块，
  并在 system prompt 中明确要求 AI"禁止脱离这些数据凭空编造具体的大运干支、神煞
  名称、流年吉凶"
- 顺带清除了该文件里的 `any` 类型（原来 4 个函数参数全是 `any`，与项目其他地方
  "严格模式：禁止 any" 的标准不一致）
- AI 调用失败时的兜底报告（fallback）此前是完全通用的套话，任何人拿到的文字都
  一模一样；现在改为直接复用已计算的 career/wealth/marriage/health summary 和
  当前大运干支，即使 AI 挂了，用户看到的内容依然基于自己真实的命盘

---

## 二、中等问题修复

### 2.1 免费版大运计算年干口径不一致 —— `rules/dashunRules.ts` + `dayunAnalysis.ts`

大运月干起点计算内部重新按"公历年份取模"算年干，未做立春分界判断，与主排盘
`calculator.ts` 的 `getYearGanZhi()`（已做立春分界）不一致。生日恰好落在
"公历新年之后、立春之前"这个窗口时，两处年干可能不同，导致大运月干起点错误。

**修复**：`generateDaYun()` 新增可选参数 `yearGanOverride`，调用方显式传入已经过
立春校正的正确年干（`sixLines.year.gan`）。未传入时回退旧逻辑，向后兼容。

### 2.2 历史夏令时（1986–1991）完全未处理 —— `solarTime.ts` + `calculator.ts` + `pro/fourPillarsEngine.ts`

新增 `isChinaDST()` / `correctChinaDST()`，基于国务院历年夏令时公告的真实起止
时刻表（1986–1991 共 6 年）。已接入：
- `calculator.ts` 的 `calculateBaZi()` 和 `calculateBaZiFromBirthData()` 两个入口，
  作为**默认关闭**的可选项 `correctHistoricalDST`（原因：未跑通回归测试前，
  不默认改变任何已验证通过的历史命盘结果）
- `pro/fourPillarsEngine.ts` 中原本"检查 timezone 字符串是否包含 DST 单词"的假警告
  （这个字符串匹配在实际数据里永远不会命中，等于从未真正触发过），改为调用
  `isChinaDST()` 对真实出生日期做判断，并在检测到未开启校正时新增 `DST_NOT_CORRECTED` 警告

**建议**：确认不影响回归测试后，将 `correctHistoricalDST` 默认值改为 `true`。

---

## 三、低风险清理

### 3.1 命名歧义 —— `pro/fortuneEngine.ts`

`generateDaYunGanZhi()` 第一个参数命名为 `dayGan`，但实际必须传入、调用方也确实
传入的是月干（`monthGan`），运行结果本身正确，只是命名容易误导成"用日干起排
大运"。已重命名为 `monthGan`，纯改名，不改变任何运行行为。

---

## 四、架构决策文档（未改代码，仅标注状态）

项目中存在三处大规模、彼此独立、未接入生产的"实验性架构"：

| 目录 | 文件数 | 状态 | 新增文件 |
|---|---|---|---|
| `src/lib/bazi/xiyongshen/` | 105 | 完整的多引擎喜用神系统，只被测试引用，从未接入生产 | README.md |
| `src/lib/bazi/qi/` | 140 | QiEngine V4，合化推演引擎，未接入生产 | README.md |
| `src/lib/bazi/foundation/` | 100 | "XuanFeng Core OS" 六层统一架构尝试，依赖上述两者，未接入生产 | README.md |

已确认这三个目录与任何生产代码路径**零依赖关系**（改不改都不影响现有功能）。
是否要激活、完成或归档这套架构，是需要你决策的产品问题，本轮未擅自处理，
只在各目录下新增了 README.md 说明现状，避免以后有人误删或误用。

---

## 五、已核实"没有问题"的部分（供你参考，节省你重复排查的时间）

- 八字排盘主链路（年/月/日/时柱、真太阳时、节气、子时换日三种策略、大运/流年/
  流月、格局、神煞 14 项）：算法正确，逻辑自洽，均有据可查
- `pro/` 中的十神引擎（tenGodsEngine.ts）、格局引擎（patternEngine.ts）、
  神煞引擎（shenshaEngine.ts）、四柱引擎（fourPillarsEngine.ts，正确复用
  `calculateBaZiFromBirthData` 而非另起炉灶）：均正确从同一份可信源派生数据，
  未发现类似起运算法那样的"假实现"
- `pro/masterReportEngine.ts` 的 AI 解释生成：采用知识库关键词匹配（而非直接
  调用 LLM 生成），本身就是确定性的，不存在"AI 凭空编造"的风险，设计上比免费版
  更严谨（不过知识库目前只有 14 条，覆盖面对于"专业级"来说仍偏薄，建议后续
  持续扩充，扩充时务必只使用真实古籍出处，不可编造引用）
- `fullReport.ts` 等报告聚合层：纯数据聚合，无重复实现风险

## 六、本轮未覆盖 / 建议后续关注

- `pro/` 目录中大量与命理计算无关的运营/工具类文件（付费/授权/多语言/管理后台/
  质量门禁等约 50+ 个文件）本轮未审查——这些不是"八字命理"准确性问题，是产品
  工程问题，建议单独立项处理，不建议和命理算法质量混在一起做
- `MASTER_EXPLAIN_KB` 知识库仅 14 条，覆盖面有限，多数命局会落到"命局总评"
  通用条目，建议后续针对常见格局/十神组合/神煞组合持续扩充
- `calculator.ts` 中 `calculateBaZi()` 与 `calculateBaZiFromBirthData()` 两个函数
  高度重复，因涉及付费报告依赖的入口，在无法本地跑测试的前提下未做结构合并，
  建议本地验证测试通过后再考虑

## 七、修改/新增文件清单

- `src/lib/bazi/pro/fortuneEngine.ts`（起运算法修复 + 命名清理）
- `src/lib/bazi/pro/fourPillarsEngine.ts`（DST 假警告修复）
- `src/lib/bazi/rules/dashunRules.ts`（年干口径修复）
- `src/lib/bazi/dayunAnalysis.ts`（调用方适配）
- `src/lib/bazi/solarTime.ts`（新增 DST 校正工具函数）
- `src/lib/bazi/calculator.ts`（接入 DST 校正开关，两个入口）
- `src/lib/bazi/ai/index.ts`（prompt 数据补全 + 去 any + fallback 个性化）
- `src/lib/core/types/birth.ts`（BirthData 新增 correctHistoricalDST 字段）
- `src/lib/bazi/xiyongshen/README.md`（新增，状态说明）
- `src/lib/bazi/qi/README.md`（新增，状态说明）
- `src/lib/bazi/foundation/README.md`（新增，状态说明）
