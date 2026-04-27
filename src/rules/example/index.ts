import { createRule } from '../../utils'

export const RULE_NAME = 'example-rules-name'
type MESSAGE_IDS = 'exampleMessageId'
type Options = []

export default createRule<Options, MESSAGE_IDS>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: '',
    },
    messages: {
      exampleMessageId: '',
    },
    fixable: 'whitespace',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
    }
  },
})
