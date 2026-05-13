# Space Around Word

保持 CJK 字符与英文单词、数字之间的空格风格一致。

这条规则主要用于处理中英文混排时的词边界空格问题，避免出现 `在watch 模式下`、`从Vitest 4.1 起` 这类紧贴在一起的写法，也会顺手收敛多余空格。

## 规则详情

默认情况下，这条规则要求：

- CJK 字符与相邻的英文单词之间保留一个空格
- CJK 字符与相邻的数字之间保留一个空格
- 如果已有多个连续空格，会自动压缩为一个空格

这里的“英文单词、数字”指文本节点中的字母片段和数字片段。规则只处理普通文本内容，不检查 Markdown 行内元素本身的间距。

:::tip
1. 这条规则关注的是 CJK 与字母/数字的边界，不会强制拆开纯英文和纯数字的组合，例如 `Vitest4.1`。
2. 如果英文和数字之间本来就有一个空格，规则会保留；如果有多个空格，则会收敛成一个，例如 `Vitest   4.1` 会被修成 `Vitest 4.1`。
3. 不涉及 CJK 边界的普通英文段落不会被改动。
:::

该规则的**正确**示例：

```md
在 watch 模式下
目前 Vitest 还不支持范围：
我们感谢 Jest 团队和社区创建了一个令人愉悦的测试 API
自 Vitest 4.1 起
从 Vitest4.1 起
WebStorm、PhpStorm、IntelliJ IDEA Ultimate 和其他 JetBrains IDE 内置了对 Vitest 的支持。
A mock that always returns `undefined` isn't very useful on its own.
```

该规则的**错误**示例：

```md
在watch 模式下
在 watch模式下
在watch模式下
在  watch 模式下
在 watch  模式下
从Vitest 4.1 起
从Vitest4.1起
自 Vitest   4.1  起
```

该规则支持自动修复。

## 不适用场景

如果你的项目不希望统一中英文混排时的词边界空格，或者这类问题已经完全交给其他格式化工具处理，可以关闭这条规则。
