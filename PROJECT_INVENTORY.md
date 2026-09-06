# 玄风门 — 项目清单 (PROJECT_INVENTORY)

> 生成时间：2026-08-06
> 项目版本：V1.2.0 (package.json 显示 V4.4.0)
> 打包基线：原始项目代码，未做任何修改

---

## 1. 当前项目目录树

```
xuanfengmen/
├── .acceptance/                    # 验收报告 JSON
├── .trae-html-share-packages/      # HTML 报告分享包
├── audit-reports/                  # 审计报告（覆盖率/热图/规则贡献）
├── audit-review/                   # 审计评审
├── benchmark-output/               # 性能基准数据
├── coverage-reports/               # 覆盖率报告
├── dist/                           # 构建产物（不打包）
├── docs/                           # 项目文档
│   ├── architecture/               # 架构文档
│   ├── API.md
│   ├── Architecture.md
│   ├── Database.md
│   ├── Deployment.md
│   ├── DeveloperGuide.md
│   ├── Environment.md
│   ├── fengshui-architecture.md
│   ├── qiengine-spec.md
│   └── ...
├── public/                         # 静态资源
│   ├── favicon.svg
│   ├── manifest.json
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── reports/                        # 生产报告 (HTML)
├── scripts/                        # 脚本（风水测试/基准/发布检查）
├── src/                            # 源代码
│   ├── components/                 # 组件
│   │   ├── business/               # 业务组件
│   │   ├── report/                 # 报告组件
│   │   ├── ui/                     # UI 基础组件
│   │   ├── Header.tsx / Footer.tsx / AuthGuard.tsx / ErrorBoundary.tsx
│   ├── config/                     # 发布配置
│   ├── constants/                  # 默认分析常量
│   ├── design/                     # 设计系统（colors/spacing/typography/theme...）
│   ├── golden/                     # 黄金测试用例
│   ├── hooks/                      # React Hooks（16 个）
│   ├── lib/                        # 核心库
│   │   ├── a11y/                   # 无障碍审计
│   │   ├── ai/                     # AI 基础设施（Router/Cache/Queue/CostManager...）
│   │   ├── analytics/              # 分析追踪
│   │   ├── bazi/                   # 八字命理内核（FROZEN，大量子模块）
│   │   ├── beta/                   # Beta 功能
│   │   ├── business/               # 业务逻辑（会员/增长/邀请/优惠券/积分/退款）
│   │   ├── cache/                  # 缓存层
│   │   ├── core/                   # 核心引擎（CoreEngine/adapters/constants/types/utils）
│   │   ├── dashboard/              # 仪表盘
│   │   ├── database/              # 数据库类型
│   │   ├── domain/                # 领域逻辑（权限/用量限制）
│   │   ├── fengshui/              # 风水堪测模块（pipeline/rules/knowledge/spatial...）
│   │   ├── interpretation/        # 八字解释器
│   │   ├── loadtest/              # 负载测试
│   │   ├── locations/             # 地理位置（中国/全球城市数据）
│   │   ├── logger/                # 日志
│   │   ├── monitoring/            # 监控（Sentry/GA4/WebVitals）
│   │   ├── observability/         # 可观测性
│   │   ├── payment/               # 支付 SDK（微信/支付宝/Stripe）
│   │   ├── profiler/              # 性能分析器
│   │   ├── security/              # 安全模块（CSP/RateLimit/XSS/Audit）
│   │   ├── seo/                   # SEO 生成器
│   │   ├── divination.ts          # 六爻占卜逻辑
│   │   ├── hexagram.ts            # 卦象类型与数据
│   │   ├── knowledgeData.ts       # 知识库数据
│   │   └── supabase.ts            # Supabase 客户端
│   ├── pages/                     # 页面（24 个）
│   ├── server/                    # Hono 后端
│   │   ├── lib/                   # 服务端工具（aiEnhance/generatePdf/notificationHelper）
│   │   ├── middleware/            # 中间件（auth/error/inputValidator/monitoring/permission/rateLimiter）
│   │   ├── routes/                # API 路由（19 个路由文件）
│   │   └── index.ts              # 服务入口
│   ├── services/                  # AI 服务
│   │   └── ai/                    # AI 服务层
│   │       ├── prompts/           # Prompt 模板（bazi/daily/divination/fengshui）
│   │       ├── providers/         # AI Provider（gemini/openai/supabase-edge）
│   │       ├── AIService.ts       # AI 服务主类
│   │       └── types.ts           # AI 类型定义
│   ├── shared/                    # 共享领域
│   ├── types/                     # 类型定义
│   ├── utils/                     # 工具
│   ├── App.tsx                    # 应用入口（路由定义）
│   ├── App.css
│   ├── index.css
│   ├── main.tsx                   # React 挂载入口
│   └── vite-env.d.ts
├── supabase/                      # Supabase 配置
│   ├── functions/                 # Edge Functions
│   │   └── analyze-room/         # 风水房间分析 Edge Function
│   └── migrations/               # 数据库迁移（16 个 SQL 文件）
├── .env.example                   # 环境变量模板
├── .gitignore
├── index.html                     # HTML 入口
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── VERSION                        # 1.2.0
├── CHANGELOG.md
├── README.md
├── KNOWN_ISSUES.md
├── ROADMAP_V2.md
├── RELEASE_FREEZE.md
├── RELEASE_NOTE.md
├── RELEASE_CHECKLIST.md
├── TECH_DEBT.md
├── LICENSE
├── PRODUCT_CONSTITUTION.md
├── PRODUCT_VISION.md
├── 玄风门-*.md                    # 中文文档（PRD/架构/数据字典/规则/工程手册/项目状态/API规范）
└── *.mjs / *.cjs / *.js           # 测试脚本
```

---

## 2. 技术栈

| 类别       | 技术                                         |
|------------|----------------------------------------------|
| 前端框架   | React 19 + TypeScript 6 + Vite 8            |
| 路由       | react-router-dom v7                         |
| 样式       | Pure CSS Design System (src/design/)        |
| 后端       | Hono 4 (Node.js, Edge 兼容)                 |
| 数据库     | Supabase (PostgreSQL + PostgREST + Auth)    |
| AI 推演    | OpenAI GPT-4o / Gemini / Supabase Edge      |
| 支付       | 微信支付 / 支付宝 / Stripe                   |
| 监控       | Sentry + GA4 + Microsoft Clarity            |
| 测试       | Vitest + React Testing Library (228 tests)  |
| 图表       | Recharts 3                                  |
| 动画       | Framer Motion 12                            |
| PDF        | pdfkit                                      |
| 图像       | html2canvas                                 |
| 日期       | date-chinese (农历计算)                     |
| 奇门       | qimendunjia-standalone (独立库)             |

---

## 3. package.json 依赖

### Dependencies (运行时)

| 依赖                       | 版本     | 用途              |
|---------------------------|----------|-------------------|
| @hono/node-server         | ^2.0.8   | Hono Node 服务    |
| @supabase/supabase-js     | ^2.108.2 | Supabase 客户端   |
| date-chinese              | ^2.1.4   | 中国农历计算      |
| framer-motion             | ^12.43.0 | 动画              |
| hono                      | ^4.12.27 | 后端框架          |
| html2canvas               | ^1.4.1   | 截图导出          |
| lucide-react              | ^1.27.0  | 图标              |
| pdfkit                    | ^0.19.1  | PDF 生成          |
| qimendunjia-standalone    | ^0.1.0   | 奇门遁甲独立库    |
| react                     | ^19.2.7  | React             |
| react-dom                 | ^19.2.7  | React DOM         |
| react-router-dom          | ^7.17.0  | 路由              |
| recharts                  | ^3.10.1  | 图表              |

### DevDependencies (开发时)

| 依赖                       | 版本     | 用途              |
|---------------------------|----------|-------------------|
| @types/node               | ^26.1.0  | Node 类型         |
| @types/pdfkit             | ^0.17.6  | PDFKit 类型       |
| @types/react             | ^19.2.17 | React 类型        |
| @types/react-dom         | ^19.2.3  | React DOM 类型    |
| @vitejs/plugin-react      | ^6.0.3   | Vite React 插件   |
| tsx                       | ^4.22.4  | TS 执行器         |
| typescript                | ^6.0.3   | TypeScript        |
| vite                      | ^8.1.4   | 构建工具          |
| vitest                    | ^4.1.10  | 测试框架          |

---

## 4. 页面列表

| 路由            | 页面文件                | 功能               | 状态     |
|----------------|------------------------|--------------------|---------|
| `/`            | [Home.tsx](file:///workspace/src/pages/Home.tsx) | 首页 | ✅ 已上线 |
| `/fengshui`    | [FengShui.tsx](file:///workspace/src/pages/FengShui.tsx) | 风水分析 | ✅ 已上线 |
| `/analysis`    | [Analysis.tsx](file:///workspace/src/pages/Analysis.tsx) | 分析结果 | ✅ 已上线 |
| `/premium-report` | [PremiumReport.tsx](file:///workspace/src/pages/PremiumReport.tsx) | 高级报告 | ✅ 已上线 |
| `/daily`       | [Daily.tsx](file:///workspace/src/pages/Daily.tsx) | 今日卦运 | ✅ 已上线 |
| `/bazi`        | [BaziInput.tsx](file:///workspace/src/pages/BaziInput.tsx) | 八字输入 | ✅ 已上线 |
| `/bazi/chart`  | [BaziChart.tsx](file:///workspace/src/pages/BaziChart.tsx) | 八字命盘 | ✅ 已上线 |
| `/bazi/history`| [BaziHistory.tsx](file:///workspace/src/pages/BaziHistory.tsx) | 八字历史 | ✅ 已上线 |
| `/liuyao`      | [Divination.tsx](file:///workspace/src/pages/Divination.tsx) | 六爻解卦 | ✅ 已上线 |
| `/records`     | [History.tsx](file:///workspace/src/pages/History.tsx) | 历史记录 | ✅ 已上线 |
| `/membership`  | [Membership.tsx](file:///workspace/src/pages/Membership.tsx) | 会员 | ✅ 已上线 |
| `/login`       | [Login.tsx](file:///workspace/src/pages/Login.tsx) | 登录 | ✅ 已上线 |
| `/user-center` | [UserCenter.tsx](file:///workspace/src/pages/UserCenter.tsx) | 用户中心 | ✅ 已上线 (AuthGuard) |
| `/admin`       | [Dashboard.tsx](file:///workspace/src/pages/Dashboard.tsx) | 管理后台 | ✅ 已上线 (Admin) |
| `/admin/ai-cost` | [AICostDashboard.tsx](file:///workspace/src/pages/AICostDashboard.tsx) | AI 成本看板 | ✅ 已上线 (Admin) |
| `/feedback`    | [Feedback.tsx](file:///workspace/src/pages/Feedback.tsx) | 用户反馈 | ✅ 已上线 |
| `/legal`       | [Legal.tsx](file:///workspace/src/pages/Legal.tsx) | 法律页面 | ✅ 已上线 |
| `/pro-report`  | [ProReportPage.tsx](file:///workspace/src/pages/ProReportPage.tsx) | 专业报告 | ✅ 已上线 |
| `/knowledge`   | [KnowledgeCenter.tsx](file:///workspace/src/pages/KnowledgeCenter.tsx) | 知识中心 | ✅ 已上线 |
| `/growth`      | [GrowthCenter.tsx](file:///workspace/src/pages/GrowthCenter.tsx) | 增长中心 | ✅ 已上线 (AuthGuard) |
| `/notifications` | [NotificationCenterPage.tsx](file:///workspace/src/pages/NotificationCenterPage.tsx) | 通知中心 | ✅ 已上线 (AuthGuard) |
| —              | [ErrorPages.tsx](file:///workspace/src/pages/ErrorPages.tsx) | 错误页 | ✅ 已上线 |

---

## 5. 组件列表

### UI 基础组件 (src/components/ui/)

| 组件         | 路径                                                         |
|-------------|--------------------------------------------------------------|
| Badge       | [Badge.tsx](file:///workspace/src/components/ui/Badge/Badge.tsx) |
| Button      | [Button.tsx](file:///workspace/src/components/ui/Button/Button.tsx) |
| Card        | [Card.tsx](file:///workspace/src/components/ui/Card/Card.tsx) |
| Divider     | [Divider.tsx](file:///workspace/src/components/ui/Divider/Divider.tsx) |
| Loading     | [Loading.tsx](file:///workspace/src/components/ui/Loading/Loading.tsx) |
| Modal       | [Modal.tsx](file:///workspace/src/components/ui/Modal/Modal.tsx) |
| PageTitle   | [PageTitle.tsx](file:///workspace/src/components/ui/PageTitle/PageTitle.tsx) |
| Section     | [Section.tsx](file:///workspace/src/components/ui/Section/Section.tsx) |
| Skeleton    | [Skeleton.tsx](file:///workspace/src/components/ui/Skeleton/Skeleton.tsx) |
| Tag         | [Tag.tsx](file:///workspace/src/components/ui/Tag/Tag.tsx) |

### 业务组件 (src/components/business/)

| 组件                    | 功能                             |
|------------------------|----------------------------------|
| Bagua                  | 八卦图                           |
| Compass                | 罗盘                             |
| Taiji                  | 太极图                           |
| ScoreRing / ScoreBar   | 评分环/评分条                    |
| ConfidenceReport       | 置信度报告                       |
| AnnotationViewer       | 标注查看器                       |
| FeatureCard            | 特性卡片                         |
| ReportExperience       | 报告体验                         |
| BaziPoster             | 八字海报                         |
| BaziVisualization      | 八字可视化                       |
| CheckInWidget          | 签到组件                         |
| DailyFortuneCard       | 今日运势卡片                     |
| ShareCard / SharePanel | 分享组件                         |
| NotificationCenter     | 通知中心                         |
| FAQSection / ValueProps / TrialEntry / BadgeShowcase / UsageCounter / MembershipBenefits | 营销/会员组件 |

### 报告组件 (src/components/report/)

| 组件                | 功能            |
|--------------------|----------------|
| ConfidenceBadge    | 置信度徽章      |
| FiveElementCard    | 五行卡片        |
| FortuneTimeline    | 运势时间轴      |
| PatternCard        | 格局卡片        |
| ReportFeedbackForm | 报告反馈表单    |
| ReportSummary      | 报告摘要        |
| RiskAdviceCard     | 风险建议卡片    |
| TenGodCard         | 十神卡片        |
| XiYongCard         | 喜用神卡片      |

### 全局组件

| 组件              | 路径                                                         |
|------------------|--------------------------------------------------------------|
| Header           | [Header.tsx](file:///workspace/src/components/Header.tsx)   |
| Footer           | [Footer.tsx](file:///workspace/src/components/Footer.tsx)   |
| AuthGuard        | [AuthGuard.tsx](file:///workspace/src/components/AuthGuard.tsx) |
| ErrorBoundary    | [ErrorBoundary.tsx](file:///workspace/src/components/ErrorBoundary.tsx) |
| GlobalErrorHandler | [GlobalErrorHandler.ts](file:///workspace/src/components/GlobalErrorHandler.ts) |

---

## 6. 核心业务模块

### 6.1 八字命理 (src/lib/bazi/)

- **状态：已上线（用户可使用），代码已冻结 (FROZEN)**
- 版本：V4.4 (package.json) / V3.1 算法冻结
- 回归测试：228 条 PASS
- 冻结基线：Git commit `3cf5362`

**核心文件：**

| 文件                              | 功能                                         |
|----------------------------------|----------------------------------------------|
| [calculator.ts](file:///workspace/src/lib/bazi/calculator.ts) | 四柱排盘核心 |
| [fullReport.ts](file:///workspace/src/lib/bazi/fullReport.ts) | 完整报告生成 |
| [proPaipan.ts](file:///workspace/src/lib/bazi/proPaipan.ts) | 专业排盘 |
| [solarTerms.ts](file:///workspace/src/lib/bazi/solarTerms.ts) | 节气计算 |
| [solarTime.ts](file:///workspace/src/lib/bazi/solarTime.ts) | 真太阳时 |
| [shishen.ts](file:///workspace/src/lib/bazi/shishen.ts) | 十神计算 |
| [wuxing.ts](file:///workspace/src/lib/bazi/wuxing.ts) | 五行统计 |
| [nayin.ts](file:///workspace/src/lib/bazi/nayin.ts) | 纳音 |
| [changsheng.ts](file:///workspace/src/lib/bazi/changsheng.ts) | 十二长生 |
| [shensha.ts](file:///workspace/src/lib/bazi/shensha.ts) | 神煞 |
| [geju.ts](file:///workspace/src/lib/bazi/geju.ts) | 格局判断 |
| [gejuUpgrade.ts](file:///workspace/src/lib/bazi/gejuUpgrade.ts) | 格局升级 |
| [xiyongshen.ts](file:///workspace/src/lib/bazi/xiyongshen.ts) | 喜用神 |
| [dayunAnalysis.ts](file:///workspace/src/lib/bazi/dayunAnalysis.ts) | 大运分析 |
| [liunianAnalysis.ts](file:///workspace/src/lib/bazi/liunianAnalysis.ts) | 流年分析 |
| [liuyueAnalysis.ts](file:///workspace/src/lib/bazi/liuyueAnalysis.ts) | 流月分析 |
| [preciseCalendar.ts](file:///workspace/src/lib/bazi/preciseCalendar.ts) | 精确日历 |
| [tiaohou.ts](file:///workspace/src/lib/bazi/tiaohou.ts) | 调候 |
| [combinationEngine.ts](file:///workspace/src/lib/bazi/combinationEngine.ts) | 合化引擎 |
| [marriageAnalysis.ts](file:///workspace/src/lib/bazi/marriageAnalysis.ts) | 婚姻分析 |
| [careerAnalysis.ts](file:///workspace/src/lib/bazi/careerAnalysis.ts) | 事业分析 |
| [wealthAnalysis.ts](file:///workspace/src/lib/bazi/wealthAnalysis.ts) | 财运分析 |
| [healthAnalysis.ts](file:///workspace/src/lib/bazi/healthAnalysis.ts) | 健康分析 |
| [dateSelection.ts](file:///workspace/src/lib/bazi/dateSelection.ts) | 择日 |
| [compatibilityAnalysis.ts](file:///workspace/src/lib/bazi/compatibilityAnalysis.ts) | 合婚分析 |
| [reportExport.ts](file:///workspace/src/lib/bazi/reportExport.ts) | 报告导出 |
| [index.ts](file:///workspace/src/lib/bazi/index.ts) | 模块入口 |

**子模块：**
- `rules/` — 规则引擎 (格局/十神/五行/喜用/调候/大运/长生)
- `shensha/` — 神煞系统 (天乙/文昌/桃花/华盖/羊刃/驿马/空亡/红鸾/劫煞/华盖/孤辰)
- `qi/` — Qi 推理引擎 (aggregator/builder/engine/executor/scheduler)
- `governance/` — 治理框架 (freeze/snapshot/qualityGate/benchmark)
- `foundation/` — 基础架构 (core/container/di/eventbus/lifecycle/plugin)
- `classics/` — 古籍中心 (corpusManager/seedData)
- `knowledgeGraph/` — 知识图谱
- `pipeline/` — 统一流水线 (cache/hooks/immutable/registry/score/steps)
- `pro/` — 专业版引擎 (100+ 文件，含案例库/置信度/冲突分析/专家评审/发布审计)
- `report/` — 专业报告
- `calendar/` — 日历计算
- `performance/` — 性能优化
- `caseLibrary/` — 案例库
- `nameData/` — 姓名数据库

### 6.2 风水堪测 (src/lib/fengshui/)

- **状态：已上线（用户可使用）**
- 101 条规则 (10 个房间类型)
- 76 条知识库

**核心结构：**

| 子目录           | 功能                                         |
|-----------------|----------------------------------------------|
| pipeline/       | 10 步分析流水线 (runFullPipeline)             |
| rules/          | 101 条规则 (按房间类型分组)                  |
| knowledge/      | 76 条知识库 (8 个分类)                       |
| spatial/        | 空间关系引擎                                 |
| room-engine/    | 房间评估引擎                                 |
| score-engine/   | 统一评分引擎                                 |
| evidenceChain/  | 证据链                                       |
| v31/            | V3.1 旧版 (annotation/credibility/pdf/report/scoring/schools/share) |
| aiImageAnalyzer.ts | AI 图像分析                               |
| imageAnalyzer.ts   | 图像分析                                  |

**文件入口：** [index.ts](file:///workspace/src/lib/fengshui/index.ts)

### 6.3 六爻占卜

- **状态：已上线（用户可使用）**
- 路由：`/liuyao`
- 页面：[Divination.tsx](file:///workspace/src/pages/Divination.tsx)
- 逻辑：[divination.ts](file:///workspace/src/lib/divination.ts)
- 卦象数据：[hexagram.ts](file:///workspace/src/lib/hexagram.ts)
- 功能：铜钱摇卦/时间起卦，智能解读
- Hook：[useDailyHexagram.ts](file:///workspace/src/hooks/useDailyHexagram.ts)

### 6.4 今日卦运

- **状态：已上线（用户可使用）**
- 路由：`/daily`
- 页面：[Daily.tsx](file:///workspace/src/pages/Daily.tsx)
- 功能：基于每日天干地支推算今日卦象，运势/吉凶/宜忌
- 数据：Supabase `daily_hexagrams` 表

---

## 7. API / Edge Functions

### 后端 API 路由 (Hono, src/server/routes/)

| 路由前缀                      | 文件                    | 功能                         |
|------------------------------|------------------------|------------------------------|
| `/api/bazi`                  | [bazi.ts](file:///workspace/src/server/routes/bazi.ts) | 八字排盘 |
| `/api/analyze`              | [analyze.ts](file:///workspace/src/server/routes/analyze.ts) | 分析 (basic/full/ai) |
| `/api/compatibility`         | [compatibility.ts](file:///workspace/src/server/routes/compatibility.ts) | 合婚分析 |
| `/api/history`               | [history.ts](file:///workspace/src/server/routes/history.ts) | 历史记录 |
| `/api/user`                  | [user.ts](file:///workspace/src/server/routes/user.ts) + [user-extended.ts](file:///workspace/src/server/routes/user-extended.ts) | 用户信息 |
| `/api/payment`               | [payment.ts](file:///workspace/src/server/routes/payment.ts) | 支付 |
| `/api/auth`                  | [auth.ts](file:///workspace/src/server/routes/auth.ts) | 认证 |
| `/api/pro`                   | [pro.ts](file:///workspace/src/server/routes/pro.ts) | 专业版 |
| `/api/pro-reports`           | [pro-history.ts](file:///workspace/src/server/routes/pro-history.ts) | 专业报告历史 |
| `/api/pro-feedback`          | [pro-feedback.ts](file:///workspace/src/server/routes/pro-feedback.ts) | 专业反馈 |
| `/api/feedback`              | [feedback.ts](file:///workspace/src/server/routes/feedback.ts) | 用户反馈 |
| `/api/monitoring`            | [monitoring.ts](file:///workspace/src/server/routes/monitoring.ts) | 监控 |
| `/api/reports`               | [reports.ts](file:///workspace/src/server/routes/reports.ts) | 报告 |
| `/sitemap.xml`               | [sitemap.ts](file:///workspace/src/server/routes/sitemap.ts) | 站点地图 |
| `/api/admin/analytics`       | [admin-analytics.ts](file:///workspace/src/server/routes/admin-analytics.ts) | 管理分析 |
| `/api/growth`                | [growth.ts](file:///workspace/src/server/routes/growth.ts) | 增长 |
| `/api/notifications`         | [notifications.ts](file:///workspace/src/server/routes/notifications.ts) | 通知 |
| `/api/admin`                 | [admin-ops.ts](file:///workspace/src/server/routes/admin-ops.ts) | 管理运营 |
| `/api`                       | [public-ops.ts](file:///workspace/src/server/routes/public-ops.ts) | 公共接口 |

### Supabase Edge Function

| 名称           | 路径                                                         | 功能               |
|---------------|--------------------------------------------------------------|--------------------|
| analyze-room  | [index.ts](file:///workspace/supabase/functions/analyze-room/index.ts) | 风水房间图片 AI 分析 |

### 中间件 (src/server/middleware/)

| 中间件           | 功能               |
|-----------------|--------------------|
| auth            | JWT 认证           |
| error           | 错误处理           |
| inputValidator  | 输入验证           |
| monitoring      | 请求监控           |
| permission      | 权限控制           |
| rateLimiter     | 限流 (100 req/min) |

---

## 8. Supabase 数据库结构

### 迁移文件列表 (supabase/migrations/)

| 文件                                              | 内容                          |
|--------------------------------------------------|-------------------------------|
| 0001_init.sql                                    | 核心表 (users/charts/analysis_history/feedback/usage_logs/payments) |
| 0002_pro_reports.sql                              | 专业报告表                     |
| 0003_feedback_enhancement.sql                     | 反馈增强                       |
| 0004_critical_fix_domain_unify.sql                | 关键修复：域名统一             |
| 20260619112842_create_hexagrams_table.sql        | 卦象表                         |
| 20260619112905_create_daily_hexagrams_table.sql  | 每日卦象表                     |
| 20260619164507_create_divinations_table.sql      | 占卜记录表                     |
| 20260621044157_create_fengshui_reports_table.sql  | 风水报告表                     |
| 20260712000001_v11_orders_payments.sql            | V1.1 订单支付                 |
| 20260718000001_webhook_events.sql                 | Webhook 事件                  |
| 20260718000002_monitoring_logs.sql                | 监控日志                      |
| 20260718000003_growth_system.sql                  | 增长系统                      |
| 20260718000004_notifications.sql                  | 通知系统                      |
| 20260718000005_ops_tools.sql                      | 运营工具                      |
| 20260718000006_system_table_rls.sql               | 系统表 RLS                    |
| 20260719000001_reality_fix_r1_r4.sql              | 现实修复 R1-R4               |

---

## 9. 数据表及主要字段

### 核心表

| 表名              | 主要字段                                                                 | 说明                |
|------------------|------------------------------------------------------------|--------------------|
| `users`          | id, username, avatar_url, membership_tier, membership_expires_at, total_charts, total_analyses | 用户（扩展 auth.users） |
| `charts`         | id, user_id, name, birth_date, birth_time, gender, birthplace, timezone, latitude, longitude, zishi_strategy, use_solar_time, chart_data (JSONB), chart_meta (JSONB), is_public | 命盘 |
| `analysis_history` | id, user_id, chart_id, analysis_type, result (JSONB), ai_model, ai_tokens_used, duration_ms, status | 分析历史 |
| `feedback`       | id, user_id, chart_id, type, severity, title, content, contact, status, resolution | 用户反馈 |
| `usage_logs`     | id, user_id, action, resource_type, resource_id, ip_address, user_agent, metadata (JSONB), tokens_used, cost_cents | 使用日志 |
| `payments`       | id, user_id, order_no, product_type, product_id, amount_cents, currency, payment_method, payment_provider_order_id, payment_provider_transaction_id, paid_at, status, metadata (JSONB) | 支付记录 |

### 业务表

| 表名              | 说明                |
|------------------|--------------------|
| `hexagrams`      | 64 卦象数据         |
| `daily_hexagrams` | 每日卦运            |
| `divinations`     | 六爻占卜记录        |
| `fengshui_reports` | 风水分析报告       |
| `pro_reports`     | 专业报告            |
| `webhook_events`  | Webhook 事件       |
| `monitoring_logs` | 监控日志            |
| `growth_*`        | 增长系统（邀请/优惠券/积分） |
| `notifications`   | 通知               |
| `ops_tools`       | 运营工具            |

**RLS 策略：** 所有核心表均启用 Row Level Security，用户只能访问自己的数据，admin (service_role) 可访问全部。

---

## 10. 当前已经实现的功能

### 已上线功能（用户可使用）

- [x] **八字命盘** — 四柱排盘、大运流年、十神、格局、喜用神、神煞、纳音、十二长生
- [x] **八字分析** — 基础分析/完整分析/AI 分析（事业/财运/婚姻/健康/六亲）
- [x] **八字历史** — 保存/查看历史命盘
- [x] **风水堪测** — 房间图片上传 + AI 分析 + 101 条规则 + 12 节报告
- [x] **六爻占卜** — 铜钱摇卦/时间起卦 + 智能解读
- [x] **今日卦运** — 每日卦象 + 运势评分 + 宜忌
- [x] **专业报告** — 高级付费报告
- [x] **合婚分析** — 两人八字兼容性
- [x] **会员体系** — Free/Pro/Master 三级
- [x] **支付系统** — 微信/支付宝/Stripe（框架完成，生产密钥待配置）
- [x] **用户认证** — Email/OTP + 微信 OAuth（框架完成，待配置 AppID）
- [x] **管理后台** — 仪表盘 + AI 成本看板
- [x] **知识中心** — 命理知识库
- [x] **增长中心** — 邀请/优惠券/积分/签到
- [x] **通知中心** — 站内通知
- [x] **用户反馈** — Bug/功能/准确性反馈
- [x] **SEO** — Schema.org + OG + Sitemap + Robots
- [x] **安全** — CSP + HSTS + Rate Limit + Input Validation + XSS 防护
- [x] **监控** — Sentry + GA4 + Clarity + Performance
- [x] **PWA** — manifest.json 就绪

### 已存在但未正式接入/未上线的八字代码

- `src/lib/bazi/qi/plugin/` — P3~P5 阶段历史实验 Plugin 引擎（14 个文件，36 个 TypeScript Error），**从未集成到生产 Pipeline**
- `src/lib/bazi/foundation/` — 基础架构层（core/container/di/eventbus/lifecycle/plugin），**实验性质，未完全集成**
- `src/lib/bazi/pro/` — 专业版引擎（100+ 文件），**部分集成到专业报告流程**
- `src/lib/bazi/knowledgeGraph/` — 知识图谱引擎，**实验性质**
- `src/lib/bazi/governance/` — 治理框架，**用于内部质量保证，非用户可见**

**明确区分：**
- **已存在的八字底层代码**：calculator.ts, fullReport.ts, shishen.ts, geju.ts, xiyongshen.ts, shensha/ 等 — 这些是生产代码，228 条回归测试通过
- **已存在但未接入的八字代码**：qi/plugin/, foundation/, knowledgeGraph/, 部分 pro/ 引擎 — 实验性代码，未集成到生产
- **用户实际可以使用的八字功能**：通过 `/bazi` → `/bazi/chart` 路由，四柱排盘 + 完整分析报告 + AI 解读 + 历史保存

---

## 11. 当前未实现的功能

- [ ] 紫微斗数（预留）
- [ ] 奇门遁甲（有独立库 `qimendunjia-standalone` 但无用户界面）
- [ ] 梅花易数（预留）
- [ ] 面相分析（预留）
- [ ] 手相分析（预留）
- [ ] 姓名学（有 `nameData/charDatabase.ts` 但无用户界面）
- [ ] 统一 AI Engine（当前各模块独立调用 AI）
- [ ] 择日功能（有 `dateSelection.ts` 但无独立页面）
- [ ] 微信 OAuth 登录（框架完成，待配置 AppID）
- [ ] 微信支付（框架完成，待配置商户证书）
- [ ] 支付宝支付（框架完成，待配置 RSA2 公钥）
- [ ] Stripe Webhook（框架完成，待配置 Webhook Secret）
- [ ] SaaS 运营后台（规划中）
- [ ] 企业堪舆（规划中）

---

## 12. AI 接口及调用位置

### AI 服务架构

| 文件                              | 功能                                         |
|----------------------------------|----------------------------------------------|
| [AIService.ts](file:///workspace/src/services/ai/AIService.ts) | AI 服务主类（多 Provider + Fallback） |
| [types.ts](file:///workspace/src/services/ai/types.ts) | AI 类型定义 |
| [AIRouter.ts](file:///workspace/src/lib/ai/AIRouter.ts) | AI 路由 |
| [AIManager.ts](file:///workspace/src/lib/ai/AIManager.ts) | AI 管理器 |
| [AICostManager.ts](file:///workspace/src/lib/ai/AICostManager.ts) | AI 成本管理 |
| [AIBatchRequest.ts](file:///workspace/src/lib/ai/AIBatchRequest.ts) | AI 批量请求 |
| [AIResponseCache.ts](file:///workspace/src/lib/ai/AIResponseCache.ts) | AI 响应缓存 |
| [PromptBuilder.ts](file:///workspace/src/lib/ai/PromptBuilder.ts) | Prompt 构建器 |
| [PromptTemplate.ts](file:///workspace/src/lib/ai/PromptTemplate.ts) | Prompt 模板 |
| [PromptRegistry.ts](file:///workspace/src/lib/ai/PromptRegistry.ts) | Prompt 注册 |

### AI Provider

| Provider          | 文件                                                         | 说明                |
|------------------|--------------------------------------------------------------|--------------------|
| Supabase Edge    | [supabase-edge.ts](file:///workspace/src/services/ai/providers/supabase-edge.ts) | 默认 Provider |
| Gemini           | [gemini.ts](file:///workspace/src/services/ai/providers/gemini.ts) | Google Gemini |
| OpenAI           | [openai.ts](file:///workspace/src/services/ai/providers/openai.ts) | OpenAI GPT-4o |

### AI 调用位置（关键）

- **前端调用**：[useAIAnalysis.ts](file:///workspace/src/hooks/useAIAnalysis.ts) — React Hook 封装
- **服务端调用**：[aiEnhance.ts](file:///workspace/src/server/lib/aiEnhance.ts) — 服务端 AI 增强
- **八字 AI**：[ai/index.ts](file:///workspace/src/lib/bazi/ai/index.ts) — 八字 AI 报告生成
- **风水 AI**：Edge Function [analyze-room/index.ts](file:///workspace/supabase/functions/analyze-room/index.ts) — 风水图片分析
- **八字解释**：[baziInterpreter.ts](file:///workspace/src/lib/interpretation/baziInterpreter.ts) — 八字解释器

---

## 13. Prompt 文件位置

| 文件                             | 功能               |
|---------------------------------|--------------------|
| [bazi.ts](file:///workspace/src/services/ai/prompts/bazi.ts) | 八字分析 Prompt |
| [daily.ts](file:///workspace/src/services/ai/prompts/daily.ts) | 今日卦运 Prompt |
| [divination.ts](file:///workspace/src/services/ai/prompts/divination.ts) | 六爻占卜 Prompt |
| [fengshui.ts](file:///workspace/src/services/ai/prompts/fengshui.ts) | 风水分析 Prompt |
| [index.ts](file:///workspace/src/services/ai/prompts/index.ts) | Prompt 统一入口 |

Prompt 使用 `{{#if variable}}...{{/if}}` 和 `{{variable}}` 模板语法，支持条件渲染和变量插值。

---

## 14. 风水相关代码位置

| 位置                              | 说明                                   |
|----------------------------------|----------------------------------------|
| [src/lib/fengshui/](file:///workspace/src/lib/fengshui/index.ts) | 风水核心库（pipeline/rules/knowledge/spatial/score-engine） |
| [src/pages/FengShui.tsx](file:///workspace/src/pages/FengShui.tsx) | 风水页面 |
| [src/pages/Analysis.tsx](file:///workspace/src/pages/Analysis.tsx) | 分析结果页 |
| [supabase/functions/analyze-room/](file:///workspace/supabase/functions/analyze-room/index.ts) | 风水 Edge Function |
| [src/server/routes/reports.ts](file:///workspace/src/server/routes/reports.ts) | 风水报告 API |
| [docs/fengshui-architecture.md](file:///workspace/docs/fengshui-architecture.md) | 风水架构文档 |

---

## 15. 八字相关代码位置

| 位置                              | 说明                                   | 状态     |
|----------------------------------|----------------------------------------|---------|
| [src/lib/bazi/](file:///workspace/src/lib/bazi/index.ts) | 八字核心库 (FROZEN)                   | 生产代码 |
| [src/lib/bazi/calculator.ts](file:///workspace/src/lib/bazi/calculator.ts) | 四柱排盘                             | 生产代码 |
| [src/lib/bazi/fullReport.ts](file:///workspace/src/lib/bazi/fullReport.ts) | 完整报告                             | 生产代码 |
| [src/lib/bazi/proPaipan.ts](file:///workspace/src/lib/bazi/proPaipan.ts) | 专业排盘                             | 生产代码 |
| [src/pages/BaziInput.tsx](file:///workspace/src/pages/BaziInput.tsx) | 八字输入页                           | 已上线   |
| [src/pages/BaziChart.tsx](file:///workspace/src/pages/BaziChart.tsx) | 八字命盘页                           | 已上线   |
| [src/pages/BaziHistory.tsx](file:///workspace/src/pages/BaziHistory.tsx) | 八字历史页                           | 已上线   |
| [src/server/routes/bazi.ts](file:///workspace/src/server/routes/bazi.ts) | 八字 API 路由                        | 已上线   |
| [src/hooks/useBazi.ts](file:///workspace/src/hooks/useBazi.ts) | 八字 Hook                            | 已上线   |
| [src/hooks/useBaziHumanize.ts](file:///workspace/src/hooks/useBaziHumanize.ts) | 八字白话化 Hook                     | 已上线   |
| [src/lib/bazi/qi/plugin/](file:///workspace/src/lib/bazi/qi) | Qi Plugin 引擎 (14 文件)             | **未接入** |
| [src/lib/bazi/foundation/](file:///workspace/src/lib/bazi/foundation/index.ts) | 基础架构 (实验性)                    | **未接入** |
| [src/lib/bazi/pro/](file:///workspace/src/lib/bazi/pro/index.ts) | 专业版引擎 (100+ 文件)               | 部分接入 |
| [src/lib/bazi/knowledgeGraph/](file:///workspace/src/lib/bazi/knowledgeGraph/index.ts) | 知识图谱 (实验性)                    | **未接入** |

---

## 16. 六爻相关代码位置

| 位置                              | 说明                                   |
|----------------------------------|----------------------------------------|
| [src/lib/divination.ts](file:///workspace/src/lib/divination.ts) | 六爻占卜核心逻辑                       |
| [src/lib/hexagram.ts](file:///workspace/src/lib/hexagram.ts) | 卦象类型定义                           |
| [src/pages/Divination.tsx](file:///workspace/src/pages/Divination.tsx) | 六爻占卜页面                           |
| [src/hooks/useDailyHexagram.ts](file:///workspace/src/hooks/useDailyHexagram.ts) | 每日卦象 Hook                          |
| [src/server/routes/analyze.ts](file:///workspace/src/server/routes/analyze.ts) | 分析 API（含六爻）                    |

---

## 17. 今日卦运相关代码位置

| 位置                              | 说明                                   |
|----------------------------------|----------------------------------------|
| [src/pages/Daily.tsx](file:///workspace/src/pages/Daily.tsx) | 今日卦运页面                           |
| [src/hooks/useDailyHexagram.ts](file:///workspace/src/hooks/useDailyHexagram.ts) | 每日卦象 Hook                          |
| [src/lib/hexagram.ts](file:///workspace/src/lib/hexagram.ts) | 卦象数据（Hexagram / DailyHexagram 类型） |
| [src/components/business/DailyFortuneCard.tsx](file:///workspace/src/components/business/DailyFortuneCard.tsx) | 今日运势卡片组件                       |
| Supabase 表 `daily_hexagrams`      | 每日卦运数据存储                       |

---

## 18. 用户系统

- **认证方式**：Supabase Auth (Email/OTP + 微信 OAuth 框架)
- **用户表**：`public.users` (扩展 `auth.users`)
- **会员层级**：Free / Basic / Premium / VIP (DB) → Free / Pro / Master (UI)
- **权限控制**：
  - 前端：`AuthGuard` 组件（requireAdmin 选项）
  - 后端：`permission.ts` 中间件
  - 数据库：RLS 策略（用户只能访问自己的数据）
- **领域逻辑**：[permission.ts](file:///workspace/src/lib/domain/permission.ts) + [usageLimit.ts](file:///workspace/src/lib/domain/usageLimit.ts)

---

## 19. 登录/注册

- **登录页**：[Login.tsx](file:///workspace/src/pages/Login.tsx) — 路由 `/login`
- **认证 API**：[auth.ts](file:///workspace/src/server/routes/auth.ts) — 路由 `/api/auth`
- **Auth Hook**：[useAuth.ts](file:///workspace/src/hooks/useAuth.ts)
- **AuthGuard**：[AuthGuard.tsx](file:///workspace/src/components/AuthGuard.tsx)
- **支持方式**：
  - Email/OTP 登录（Supabase Auth）
  - 微信 OAuth（框架完成，待配置 AppID/AppSecret）
- **JWT**：服务端签发，`JWT_SECRET` 环境变量

---

## 20. 数据保存方式

| 数据类型       | 存储方式                          | 位置                     |
|--------------|-----------------------------------|--------------------------|
| 用户账户      | Supabase Auth (auth.users)        | Supabase                 |
| 用户资料      | PostgreSQL (public.users)         | Supabase                  |
| 八字命盘      | PostgreSQL (public.charts)        | chart_data JSONB         |
| 分析历史      | PostgreSQL (analysis_history)     | result JSONB             |
| 风水报告      | PostgreSQL (fengshui_reports)     | Supabase                  |
| 六爻记录      | PostgreSQL (divinations)          | Supabase                  |
| 每日卦运      | PostgreSQL (daily_hexagrams)      | Supabase                  |
| 支付记录      | PostgreSQL (payments)             | Supabase                  |
| 使用日志      | PostgreSQL (usage_logs)           | Supabase                  |
| 用户反馈      | PostgreSQL (feedback)             | Supabase                  |
| 前端缓存      | 内存缓存 (AnalysisCache 等)       | src/lib/cache/           |
| AI 响应缓存    | AIResponseCache                   | src/lib/ai/              |
| 规则缓存      | RuleCache                         | src/lib/cache/           |
| 会话缓存      | SessionCache                      | src/lib/cache/           |

---

## 21. 环境变量说明

| 变量名                        | 用途                   | 必填 | 在 .env.example 中 |
|------------------------------|------------------------|------|-------------------|
| `VITE_SUPABASE_URL`          | Supabase 项目 URL      | 是   | 是                |
| `VITE_SUPABASE_ANON_KEY`     | Supabase 匿名密钥      | 是   | 是                |
| `SUPABASE_SERVICE_ROLE_KEY`  | Supabase 服务端密钥    | 是   | 是                |
| `VITE_OPENAI_API_KEY`        | OpenAI API Key         | 是   | 是                |
| `VITE_GEMINI_API_KEY`        | Gemini API Key         | 可选  | 是                |
| `SERVER_PORT`                | 服务端口 (默认 3000)   | 否   | 是                |
| `NODE_ENV`                   | 环境标识               | 否   | 是                |
| `ADMIN_SECRET`               | 管理密钥               | 是   | 是                |
| `JWT_SECRET`                 | JWT 签名密钥           | 是   | 是                |
| `ALLOWED_ORIGINS`            | CORS 允许域名           | 生产 | 否 (服务端)       |
| `PUBLIC_URL`                 | 公开 URL               | 否   | 否 (服务端)       |
| `PORT`                       | API 服务端口 (默认 3001) | 否  | 否 (服务端)       |

详见：[.env.example](file:///workspace/.env.example) 和 [docs/Environment.md](file:///workspace/docs/Environment.md)

---

## 22. 当前已知问题

详见 [KNOWN_ISSUES.md](file:///workspace/KNOWN_ISSUES.md)：

1. **bazi plugin TypeScript 类型错误** — 36 个 TS Error，位于 `src/lib/bazi/qi/plugin/`（14 文件），属 P3~P5 历史实验代码，未集成到生产。运行时无影响。
2. **微信 OAuth** — 框架完成，需配置微信开放平台 AppID/AppSecret。
3. **微信支付** — SDK 封装完成，需配置微信支付商户 APIv3 证书和密钥。
4. **支付宝** — SDK 封装完成，需配置 RSA2 公钥。
5. **Stripe Webhook** — SDK 封装完成，需配置 Webhook Signing Secret。
6. **支付功能** — 在生产配置完成前以 Mock 模式运行。

---

## 23. 当前项目启动方式

### 前端 (Vite 开发服务器)

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:3000)
```

### 后端 (Hono API 服务)

```bash
npm run server:dev   # 开发模式 (tsx watch, http://localhost:3001)
npm run server:start # 生产模式 (node --import tsx)
```

### 构建

```bash
npm run build        # tsc + vite build → dist/
npm run preview      # 预览构建结果
```

### 测试

```bash
npm test             # Vitest 运行 (228 tests)
npm run test:watch   # Vitest watch 模式
```

### 环境变量

```bash
cp .env.example .env.local   # 复制模板，填写真实配置
```

---

## 24. 当前项目部署方式

### Vercel (推荐)

1. 连接 GitHub 仓库到 Vercel
2. 设置环境变量（见第 21 节）
3. 构建命令：`npm run build`
4. 输出目录：`dist`

### Supabase

1. 创建 Supabase 项目
2. 执行 `supabase/migrations/` 下的迁移文件
3. 配置 Auth Providers (Email/OTP/OAuth)
4. 部署 Edge Function (`analyze-room`)

### 后端 API

- **Hono** 框架，Edge 兼容
- 可部署到 Cloudflare Workers / Deno / Vercel Edge
- Node 环境通过 `@hono/node-server` 启动

### Docker (可选)

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## 25. 后续重构时最需要注意的兼容性问题

### 25.1 八字内核冻结声明

`src/lib/bazi/` 目录下的所有算法文件已**冻结**，不允许修改。
- 冻结基线：Git commit `3cf5362`
- 回归测试：228/228 PASS
- 治理框架：`src/lib/bazi/governance/` (freeze/snapshot/qualityGate)
- 详见：[RELEASE_FREEZE.md](file:///workspace/RELEASE_FREEZE.md)

**重构时绝对不要修改 `src/lib/bazi/` 下的生产代码**，否则会导致回归测试失败。

### 25.2 TypeScript 编译排除

`tsconfig.json` 中排除了以下目录（不参与类型检查，但 Vite esbuild 仍会转译）：
- `src/lib/bazi/**`
- `src/lib/fengshui/**`
- 多个页面文件
- `src/scripts/**`

这意味着这些文件有类型错误也不会阻塞构建，但重构时需要注意类型安全。

### 25.3 Plugin 实验代码

`src/lib/bazi/qi/plugin/` 有 36 个已知 TypeScript Error，属历史实验代码。重构时应决定是归档废弃还是修复类型。**不要将其误认为生产代码。**

### 25.4 路由依赖

App.tsx 使用 React.lazy + Suspense 实现路由懒加载。新增页面需要：
1. 在 `src/pages/` 创建组件
2. 在 [App.tsx](file:///workspace/src/App.tsx) 添加 lazy import 和 Route

### 25.5 API 路由注册

Hono 后端路由在 [server/index.ts](file:///workspace/src/server/index.ts) 中通过 `app.route()` 挂载。新增 API 需在此文件注册。

### 25.6 Supabase RLS

所有数据库表启用 RLS，新表必须配置 RLS 策略，否则前端无法访问。

### 25.7 设计系统

项目使用纯 CSS 设计系统（非 Tailwind / styled-components）。所有设计 Token 在 [src/design/](file:///workspace/src/design/theme.ts) 中定义。新组件应遵循现有 CSS 规范。

### 25.8 AI Provider 切换

AI 服务支持多 Provider（Supabase Edge / Gemini / OpenAI）+ Fallback 链。重构时应保持统一接口，避免每个模块单独写 Prompt 调用逻辑。

### 25.9 缓存层

多个缓存模块（AnalysisCache / HexagramCache / RuleCache / KnowledgeCache / SessionCache / AIResponseCache）。重构时应避免重复造轮子。

### 25.10 安全中间件

所有 API 请求经过 `monitoringMiddleware` + `rateLimiter`。新增路由自动继承这些中间件。重构时不要绕过安全中间件。

### 25.11 前端 Vite 别名

`vite.config.ts` 配置了 `@` → `./src` 别名。`tsconfig.json` 同步配置 `paths`。两者必须保持一致。

### 25.12 manualChunks 分包

`vite.config.ts` 配置了 `manualChunks` 函数，将命理数据/规则引擎/风水模块/支付/仪表盘/认证/监控分到独立 chunk。重构时如果移动文件路径，需要同步更新 `manualChunksFn` 配置。

---

## 附录：文件统计

| 统计项         | 数量          |
|--------------|--------------|
| 源文件总数     | ~1483        |
| 页面数量       | 24           |
| UI 组件        | 10           |
| 业务组件       | ~25          |
| 报告组件       | 9            |
| React Hooks   | 16           |
| API 路由文件   | 19           |
| 中间件         | 6            |
| Supabase 迁移 | 16           |
| Edge Function | 1            |
| 八字核心文件   | 60+ (含子模块 200+) |
| 风水核心文件   | 40+          |
| 回归测试       | 228          |

---

*本清单基于原始项目代码生成，未做任何修改。*
