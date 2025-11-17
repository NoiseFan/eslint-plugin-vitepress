import antfu from '@antfu/eslint-config'
import markdown, { MarkdownLanguage } from '@eslint/markdown'
import plugin from './src/index'

export default antfu(
  {
    type: 'lib',
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
      vitepress: plugin,
    },
    rules: {
      'vitepress/valid-heading-anchor': 'error',
    },
  },
)
