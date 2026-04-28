import type { InvalidTestCase, ValidTestCase } from 'eslint-vitest-rule-tester'
import markdown from '@eslint/markdown'
import { run } from 'eslint-vitest-rule-tester'
import rule, { RULE_NAME } from './index'

const valid: ValidTestCase[] = [
  '# 中文标题 {#chinese-title}',
  '# Introduction {#intro-2}',
]

const invalid: InvalidTestCase[] = [
  {
    code: '# 中文标题 {#Chinese-Title}',
    output: '# 中文标题 {#chinese-title}',
    errors: [{ messageId: 'invalidHeadingAnchor' }],
  },
  {
    code: '# 中文标题 {#Foo_Bar`123}',
    output: '# 中文标题 {#foo_bar123}',
    errors: [{ messageId: 'invalidHeadingAnchor' }],
  },
  {
    code: '# Introduction {#API-Reference_v2}',
    output: '# Introduction {#api-reference_v2}',
    errors: [{ messageId: 'invalidHeadingAnchor' }],
  },
]

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
  configs: {
    plugins: { markdown },
    language: 'markdown/commonmark',
  },
})
