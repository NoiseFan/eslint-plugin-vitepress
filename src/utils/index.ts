import { RuleCreator } from '@typescript-eslint/utils/eslint-utils'

export interface PluginDocs {
  recommended?: boolean
  requiresTypeChecking?: boolean
}
export const createEslintRule = RuleCreator<PluginDocs>(
  name =>
    `https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/${name}.md`,
)
