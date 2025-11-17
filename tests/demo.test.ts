import type { InvalidTestCase, ValidTestCase } from 'eslint-vitest-rule-tester'
import markdown from '@eslint/markdown'
import { run } from 'eslint-vitest-rule-tester'
import rule, { RULE_NAME } from '../src/rules/valid-heading-anchor'

const valid: ValidTestCase[] = [
  '# some title {#anchor}',
  '# some tile {anchor}',
]

const invalid: InvalidTestCase[] = [{
  code: '# some title',
  errors: [{
    messageId: 'nameAndCallback',
    data: {},
  }],
}]

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
  configs: {
    plugins: { markdown },
    processor: 'markdown/markdown',
    language: 'markdown/commonmark',
  },
})
