# Typography 打字器组件

## 一、概述
`Typography` 是一个基于 Vue3 和 Element Plus 的打字器组件，支持 Markdown 渲染和动态打字效果。通过配置属性，您可以轻松实现文本内容的展示、Markdown 渲染以及模拟打字机的效果。

---

## 二、功能特性
1. **Markdown 支持**：支持渲染 Markdown 格式的文本，并应用 GitHub 风格的样式。
2. **动态打字效果**：可以模拟打字机的效果，逐步显示文本内容。
3. **代码高亮**：内置 Prism.js，支持代码块的语法高亮。
4. **XSS 安全**：使用 DOMPurify 对 HTML 内容进行过滤，防止 XSS 攻击。
5. **灵活配置**：支持自定义打字速度、光标字符、后缀等参数。

---

## 三、安装与使用

### 安装依赖

确保项目中已经安装了以下依赖：

```bash
npm install github-markdown-css markdown-it typed.js prismjs dompurify
```

### 引入组件

在你的 Vue 3 项目中引入 `Typography` 组件：

```vue
<template>
  <Typography :content="yourContent" :isMarkdown="true" :typing="true" />
</template>

<script setup>
import Typography from './path/to/Typography.vue';
import { ref } from 'vue';

const yourContent = ref('# Hello, World!\nThis is a **Markdown** example.');
</script>

```

## 四、组件属性

| 属性名       | 类型    | 默认值  | 描述                                           |
| ------------ | ------- | ------- | ---------------------------------------------- |
| `content`    | String  | `''`    | 要展示的文本内容，支持纯文本或 Markdown 格式。 |
| `isMarkdown` | Boolean | `false` | 是否启用 Markdown 渲染模式。                   |
| `typing`     | Boolean | `false` | 是否启用打字机效果。                           |
| `step`       | Number  | `2`     | 每次渲染的字符数（仅在打字机模式下生效）。     |
| `suffix`     | String  | `'|'`   | 光标字符（仅在非 Markdown 模式下生效）。       |

---

## 五、组件事件

| 事件名       | 参数         | 描述                                         |
| ------------ | ------------ | -------------------------------------------- |
| `onComplete` | `Typed` 实例 | 当打字机效果完成时触发，返回 Typed.js 实例。 |

---

```vue
<template>
  <Typography :content="yourContent" :isMarkdown="true" :typing="true" />
</template>

<script setup>
import Typography from './path/to/Typography.vue';
import { ref } from 'vue';

const yourContent = ref('# Hello, World!\nThis is a **Markdown** example.');
</script>

```

## 六、功能详细介绍

### 1. 普通文本打字效果

当 `isMarkdown` 为 `false` 时，组件将展示普通文本的打字效果。你可以通过设置 `typing` 为 `true` 来开启打字动画，同时可以调整 `step` 和 `suffix` 来控制打字速度和光标后缀。

```vue
<template>
  <Typography :content="plainText" :typing="true" />
</template>

<script setup>
import Typography from './path/to/Typography.vue';
import { ref } from 'vue';

const plainText = ref('This is a plain text example.');
</script>
```

### 2. Markdown 内容展示与打字效果

当 `isMarkdown` 为 `true` 时，组件会将 `content` 中的 Markdown 内容渲染为 HTML，并支持代码高亮。同样，你可以通过设置 `typing` 为 `true` 来开启打字动画。

```vue
<template>
  <Typography :content="markdownText" :isMarkdown="true" :typing="true" />
</template>

<script setup>
import Typography from './path/to/Typography.vue';
import { ref } from 'vue';

const markdownText = ref(`
# Markdown Example

This is a **Markdown** example with code highlight:

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`
`);
</script>
```

### 3. 打字完成回调

当打字动画完成时，组件会触发 `onComplete` 事件，你可以通过监听该事件来执行一些操作。

```vue
<template>
  <Typography :content="text" :typing="true" @onComplete="handleComplete" />
</template>

<script setup>
import Typography from './path/to/Typography.vue';
import { ref } from 'vue';

const text = ref('Typing is fun!');

const handleComplete = (self) => {
  console.log('Typing completed!', self);
};
</script>
```

## 七、样式说明

组件使用了 `github-markdown-css` 来为 Markdown 内容提供样式，同时在 `scoped` 样式中设置了 `markdown-body` 的背景颜色为 `--el-fill-color` 兼容 element-plus 组件库样式。你可以根据需要修改这些样式。

## 八、注意事项

- 由于 Markdown 渲染后的 HTML 结构可能包含行内块元素，在 Markdown 格式下，组件默认不展示光标。
- 在组件销毁前，会自动销毁 `typed.js` 实例，避免内存泄漏。