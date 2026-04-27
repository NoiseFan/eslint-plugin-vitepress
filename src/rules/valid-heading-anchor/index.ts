import type { Heading } from 'mdast'
import { createRule } from '../../utils'
import { getLikeAnchor, hasChinese, normalizeAnchor } from '../../utils/rules/anchor'

export const RULE_NAME = 'valid-heading-anchor'
const MESSAGE_IDS = 'validHeadingAnchor'
type Options = []

export default createRule<Options, typeof MESSAGE_IDS>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce lowercase heading anchors and remove unsupported characters.',
    },
    messages: {
      validHeadingAnchor: 'Heading anchors must use lowercase letters, digits, and hyphens only.',
    },
    fixable: 'whitespace',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      heading(node: Heading) {
        const content = context.sourceCode.getText()
        if (!hasChinese(content))
          return
        const rawLikeAnchor = getLikeAnchor(content)
        if (!rawLikeAnchor)
          return

        const anchor = normalizeAnchor(rawLikeAnchor).replace(/_/g, '')
        if (rawLikeAnchor === anchor)
          return

        context.report({
          node: node as any,
          messageId: MESSAGE_IDS,
          fix(fixer) {
            const start = node.position!.start.offset!
            const end = node.position!.end.offset!

            return fixer.replaceTextRange([start, end], content.replace(/\{#[^}]+\}$/, `{#${anchor}}`))
          },
        })
      },
    }
  },
})
