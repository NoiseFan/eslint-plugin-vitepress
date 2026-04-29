import type { ESLint, Linter } from 'eslint'
import markdown, { MarkdownLanguage } from '@eslint/markdown'
import { rules } from './rules'

export const plugin: ESLint.Plugin = {
  rules,
  processors: markdown.processors,
  languages: {
    commonmark: new MarkdownLanguage({ mode: 'commonmark' }),
    gfm: new MarkdownLanguage({ mode: 'gfm' }),
  },
}

const allRuleEntries = Object.keys(rules).map(ruleName => [`docs-style/${ruleName}`, 'error'] as const)

const recommendedRules = Object.fromEntries(allRuleEntries)
const allRules = Object.fromEntries(allRuleEntries)

interface PluginConfigMap {
  recommended: Linter.Config
  all: Linter.Config
}

export const configs: PluginConfigMap = {
  recommended: {
    name: 'docs-style/recommended',
    files: ['**/*.md'],
    plugins: {
      'docs-style': plugin,
    },
    language: 'docs-style/commonmark',
    rules: recommendedRules,
  },
  all: {
    name: 'docs-style/all',
    files: ['**/*.md'],
    plugins: {
      'docs-style': plugin,
    },
    language: 'docs-style/commonmark',
    rules: allRules,
  },
}

export type DocsStylePlugin = ESLint.Plugin & {
  configs: PluginConfigMap
}

const docsStylePlugin: DocsStylePlugin = Object.assign(plugin, { configs })

export default docsStylePlugin
