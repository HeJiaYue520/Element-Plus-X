# Bubble 对话气泡组件介绍

## 一、概述

`Bubble` 是一个基于 Vue 3 和 ElementPlus 开发的对话气泡组件，它可以用于展示对话内容，支持自定义头像、头部、内容、底部，并且具备打字效果和加载状态展示。该组件依赖于之前封装的 `Typography` 打字器组件，能够实现文本的打字动画效果。

## 二、功能特性

1. **布局方向** - 支持左对齐(`start`)和右对齐(`end`)
2. **内容类型** - 支持纯文本、Markdown、自定义插槽内容
3. **加载状态** - 内置加载动画，支持自定义加载内容
4. **视觉效果** - 提供多种形状和变体（圆角/直角、填充/描边/阴影等）
5. **打字动画** - 支持渐进式文字输出效果
6. **灵活插槽** - 提供头像、头部、内容、底部、加载状态等插槽

---

## 三、安装与使用

### 安装依赖

确保项目中已经安装了 `@/components/Typography/index.vue` 组件所依赖的库，如 `github-markdown-css`、`markdown-it`、`typed.js`、`prismjs`、`dompurify` 等。

### 引入组件

在你的 Vue 3 项目中引入 `Bubble` 组件：

```vue
<template>
  <Bubble :content="yourContent" :typing="true" />
</template>

<script setup>
import Bubble from './path/to/Bubble.vue';
import { ref } from 'vue';

const yourContent = ref('This is a bubble content.');
</script>
```

## 四、组件属性

| 属性名       | 类型              | 默认值   | 说明                                                         |
| ------------ | ----------------- | -------- | ------------------------------------------------------------ |
| `content`    | String            | ''       | 气泡内要展示的文本内容，可与 `slot` 配合使用。               |
| `placement`  | String            | 'start'  | 气泡的位置，可选值为 `'start'` 或 `'end'`，分别表示左侧和右侧。 |
| `loading`    | Boolean           | false    | 是否显示加载状态。为 `true` 时，气泡内会显示加载动画。       |
| `shape`      | String            | null     | 气泡的形状，可选值为 `'round'`（圆角）或 `'corner'`（有角）。 |
| `variant`    | String            | 'filled' | 气泡的样式变体，可选值为 `'filled'`（填充）、`'borderless'`（无边框）、`'outlined'`（轮廓）、`'shadow'`（阴影）。 |
| `isMarkdown` | Boolean           | false    | 是否将 `content` 内容作为 Markdown 格式处理。                |
| `typing`     | Boolean \| Object | false    | 是否开启打字效果。若为对象，可设置 `step`（每次渲染的字符数）和 `suffix`（打字光标后缀内容）。 |
| `maxWidth`   | String            | '500px'  | 气泡内容的最大宽度。                                         |

## 五、组件事件

| 事件名       | 说明                   | 回调参数                      |
| ------------ | ---------------------- | ----------------------------- |
| `onComplete` | 打字完成时触发的事件。 | `self`：`typed.js` 实例对象。 |

## 六、插槽

### 1. `avatar`

用于自定义气泡左侧或右侧的头像部分。

```vue
<template>
  <Bubble>
    <template #avatar>
      <img src="your-avatar-url" alt="Avatar" />
    </template>
  </Bubble>
</template>
```

### 2. `header`

用于自定义气泡的头部内容。

```vue
<template>
  <Bubble>
    <template #header>
      <h3>Header Title</h3>
    </template>
  </Bubble>
</template>
```

### 3. `content`

用于自定义气泡的主体内容，会覆盖 `content` 属性。

```vue
<template>
  <Bubble>
    <template #content>
      <p>Custom content goes here.</p>
    </template>
  </Bubble>
</template>
```

### 4. `loading`

用于自定义加载状态下的内容。

```vue
<template>
  <Bubble :loading="true">
    <template #loading>
      <div>Custom loading indicator...</div>
    </template>
  </Bubble>
</template>
```

### 5. `footer`

用于自定义气泡的底部内容。

```vue
<template>
  <Bubble>
    <template #footer>
      <p>Footer information</p>
    </template>
  </Bubble>
</template>
```

## 七、功能详细介绍

### 1. 位置布局

通过 `placement` 属性可以控制气泡的位置，`'start'` 使气泡显示在左侧，`'end'` 使气泡显示在右侧。

```vue
<template>
  <Bubble placement="start" :content="'Left bubble content'" />
  <Bubble placement="end" :content="'Right bubble content'" />
</template>
```

### 2. 形状与样式

可以使用 `shape` 和 `variant` 属性来改变气泡的形状和样式。

```vue
<template>
  <Bubble shape="round" variant="shadow" :content="'Rounded shadow bubble'" />
  <Bubble shape="corner" variant="outlined" :content="'Cornered outlined bubble'" />
</template>
```

### 3. 打字效果

通过 `typing` 属性可以开启打字效果，还可以通过对象形式设置打字速度和光标后缀。

```vue
<template>
  <Bubble :typing="{ step: 3, suffix: '>' }" :content="'Typing with custom settings'" />
</template>
```

### 4. 加载状态

设置 `loading` 为 `true` 可以显示加载状态，默认显示三个点的动画，也可以通过 `loading` 插槽自定义加载内容。

```vue
<template>
  <Bubble :loading="true" :content="'Loading...'" />
  <Bubble :loading="true">
    <template #loading>
      <div>Custom loading spinner...</div>
    </template>
  </Bubble>
</template>
```

## 八、样式说明

组件使用了 ElementPlus 的 CSS 变量，如 `--el-padding-sm`、`--el-border-radius-base` 等，确保在使用时 ElementPlus 的样式正常引入。同时，组件内部定义了一些动画和样式类，如 `.dot` 的波浪动画，可根据需要进行调整。

```vue
/* 基础布局 */
.el-bubble {
  display: flex;
  gap: 12px; // 头像与内容间距
}

/* 布局方向 */
.el-bubble-start { /* 左对齐 */ }
.el-bubble-end {   /* 右对齐 */ }

/* 内容区域 */
.el-bubble-content {
  max-width: var(--bubble-content-max-width); // 最大宽度控制
  border-radius: calc(var(--el-border-radius-base) + 4px);
  background-color: var(--el-fill-color);
}

/* 形状变体 */
.el-bubble-content-round { border-radius: var(--el-border-radius-round); }
.el-bubble-content-corner { /* 直角样式 */ }

/* 视觉变体 */
.el-bubble-content-filled { /* 填充背景 */ }
.el-bubble-content-outlined { /* 线框样式 */ }
.el-bubble-content-shadow { /* 投影效果 */ }
```



## 九、注意事项

- 当同时使用`content`属性与`#content`插槽时，插槽内容优先
- 当同时使用`loading`属性与`#loading`插槽时，插槽内容优先
- 打字效果依赖于 `Typography` 组件，确保该组件正常引入和使用。
- 组件的样式基于 ElementPlus 的 CSS 变量，若修改了 ElementPlus 的样式，可能会影响该组件的显示效果。
- 加载状态下会自动隐藏内容区域
- 使用`variant="shadow"`时建议设置浅色背景
- 打字动画性能受`step`值影响，建议保持50ms以上间隔

该组件通过灵活的配置项和样式系统，可快速适配不同业务场景的对话展示需求。