import { createEslintRule } from '../utils'

export const RULE_NAME = 'valid-heading-anchor'

type MESSAGE_IDS = 'nameAndCallback'

type Options = []

export default createEslintRule<Options, MESSAGE_IDS>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce valid title anchors in headings.',
    },
    messages: {
      nameAndCallback: 'Invalid heading anchor.',
    },
    fixable: 'whitespace',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    // todo: get the markdown ast
    return {

    }
  },
})
