import type { Gender, CalendarType, ZiShiStrategy } from './base'

export interface BirthData {
  birthday: string
  birthTime: string
  gender: Gender
  longitude?: number
  latitude?: number
  timezone?: string
  calendarType?: CalendarType
  useTrueSolarTime?: boolean
  trueSolarTime?: Date
  childHourStrategy?: ZiShiStrategy
  location?: string
  birthTimeUnknown?: boolean
  hash?: string
  /**
   * 是否校正 1986–1991 年中国大陆历史夏令时（V2.0 审计新增，默认 false）。
   * 见 src/lib/bazi/solarTime.ts 中 correctChinaDST 的说明。
   */
  correctHistoricalDST?: boolean
}