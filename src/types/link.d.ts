import type { LINK_SPACE_MESSAGE_IDS } from '../utils/rules/link'

export interface LinkSpaceContext {
  afterChar?: string
  afterIndex: number
  afterSpaceEnd: number
  afterSpaceStart: number
  beforeChar?: string
  beforeIndex: number
  beforeSpaceEnd: number
  beforeSpaceStart: number
  hasSpaceAfter: boolean
  hasSpaceBefore: boolean
}

export type LinkSpaceIssue = typeof LINK_SPACE_MESSAGE_IDS[keyof typeof LINK_SPACE_MESSAGE_IDS]
