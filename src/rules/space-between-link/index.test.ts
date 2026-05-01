import type { InvalidTestCase, ValidTestCase } from 'eslint-vitest-rule-tester'
import markdown from '@eslint/markdown'
import { run } from 'eslint-vitest-rule-tester'
import { LINK_SPACE_MESSAGE_IDS } from '../../utils/rules/link'
import rule, { RULE_NAME } from './index'

const MESSAGE_IDS = LINK_SPACE_MESSAGE_IDS

const valid: ValidTestCase[] = [
  '在 [入门指南](/guide/) 中，',
  '在。[入门指南](/guide/) 中，',
  '在 [入门指南](/guide/)。',
  '在。[入门指南](/guide/)。',
  '[入门指南](/guide/) 中，',
  '请参考 [入门指南](/guide/)',
  'In the [Getting Started](/guide/) guide,',
  'In the, [Getting Started](/guide/) guide,',
  'In the [Getting Started](/guide/), ',
  '## Prev paragraph\n\n[`link`](/link) paragraph content',
  '[`link`](/link) paragraph content\n\n ## Next paragraph',
]

const invalid: InvalidTestCase[] = [
  // before miss
  {
    code: '在[入门指南](/guide/) 中，',
    output: '在 [入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.missingSpaceBeforeLink }],
  },
  {
    code: 'In the[Getting Started](/guide/) guide,',
    output: 'In the [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.missingSpaceBeforeLink }],
  },
  // before multi
  {
    code: '在   [入门指南](/guide/) 中，',
    output: '在 [入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesBeforeLink }],
  },
  {
    code: 'In the   [Getting Started](/guide/) guide,',
    output: 'In the [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesBeforeLink }],
  },
  {
    code: 'In the,  [Getting Started](/guide/) guide,',
    output: 'In the, [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesAfterPunctuation }],
  },

  {
    code: 'In the.   [Getting Started](/guide/) guide,',
    output: 'In the. [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesAfterPunctuation }],
  },
  // before unexpect
  {
    code: '在。 [入门指南](/guide/) 中，',
    output: '在。[入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.unexpectedSpaceBeforeLink }],
  },
  {
    code: '在。   [入门指南](/guide/) 中，',
    output: '在。[入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.unexpectedSpaceBeforeLink }],
  },
  // after
  {
    code: '在 [入门指南](/guide/)中，',
    output: '在 [入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.missingSpaceAfterLink }],
  },
  {
    code: 'In the [Getting Started](/guide/)guide,',
    output: 'In the [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.missingSpaceAfterLink }],
  },
  // before multi
  {
    code: '在 [入门指南](/guide/)   中，',
    output: '在 [入门指南](/guide/) 中，',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesAfterLink }],
  },
  {
    code: 'In the [Getting Started](/guide/)   guide,',
    output: 'In the [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesAfterLink }],
  },
  {
    code: 'In the [Getting Started](/guide/)   guide,',
    output: 'In the [Getting Started](/guide/) guide,',
    errors: [{ messageId: MESSAGE_IDS.multipleSpacesAfterLink }],
  },
  // after unexpect
  {
    code: '在 [入门指南](/guide/) ，中',
    output: '在 [入门指南](/guide/)，中',
    errors: [{ messageId: MESSAGE_IDS.unexpectedSpaceAfterLink }],
  },
  {
    code: '在 [入门指南](/guide/)   ，中',
    output: '在 [入门指南](/guide/)，中',
    errors: [{ messageId: MESSAGE_IDS.unexpectedSpaceAfterLink }],
  },
  {
    code: 'In the [Getting Started](/guide/)   , guide',
    output: 'In the [Getting Started](/guide/), guide',
    errors: [{ messageId: MESSAGE_IDS.unexpectedSpaceAfterLink }],
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
