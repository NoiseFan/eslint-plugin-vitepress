import type { Parents, PhrasingContent, RootContent } from 'mdast'

export type SiblingNode<Current extends RootContent = RootContent> = Current extends PhrasingContent
  ? PhrasingContent
  : RootContent

/**
 * The current node together with its parent and adjacent siblings.
 */
export interface NodeContextReturnType<
  Current extends RootContent = RootContent,
  Sibling extends RootContent = SiblingNode<Current>,
> {
  parent?: Parents
  /**
   * The previous sibling node.
   */
  prev?: Sibling
  /**
   * The next sibling node.
   */
  next?: Sibling
  /**
   * The current node.
   */
  current: Current
}

export interface SourceCodeWithAncestors {
  getAncestors: (node: RootContent) => unknown[]
}

export interface RuleContextWithAncestors {
  sourceCode: SourceCodeWithAncestors
}
