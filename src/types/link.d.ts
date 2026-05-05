import type { LINK_SPACE_MESSAGE_IDS } from '../utils/rules/link'

/**
 * The allowed issue ids for link spacing rules.
 */
export type LinkSpaceIssue = typeof LINK_SPACE_MESSAGE_IDS[keyof typeof LINK_SPACE_MESSAGE_IDS]

/**
 * The relative position to check for spacing.
 */
export type PositionOptions = 'head' | 'tail'

/**
 * The text context adjacent to a link.
 */
export interface AdjacentTextContext {
  /**
   * The neighboring text value, if any.
   */
  value: string | undefined
  /**
   * The neighboring whitespace node.
   */
  whiteSpace: whiteSpaceReturn
  /**
   * Whether the adjacent text contains punctuation.
   */
  hasPunctuation: boolean
  /**
   * The punctuation classification.
   */
  punctuationType: 'full' | 'half'
}

/**
 * The spacing context around a link.
 */
export interface SpaceContext {
  /**
   * The previous adjacent text context.
   */
  prev?: AdjacentTextContext
  /**
   * The next adjacent text context.
   */
  next?: AdjacentTextContext
}
