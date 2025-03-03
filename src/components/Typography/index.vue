<template>
  <div v-if="isMarkdown && content">
    <span v-if="typing" class="markdown-body" ref="typingContent" v-html="showContent"></span>
    <span v-else class="markdown-body" v-html="showContent"></span>
  </div>
  <div v-else-if="content">
    <span v-if="typing" class="typing-content" ref="typingContent"></span>
    <span v-else>{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
// md 其他元素使用 github 的样式
import "github-markdown-css";
import MarkdownIt from "markdown-it";
import Typed from "typed.js";
// 代码高亮
import Prism from "prismjs";
// 防止 xss 过滤
import DOMPurify from "dompurify";
import { ref, onMounted, onBeforeUnmount } from "vue";

const emits = defineEmits(["onComplete"]);
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  isMarkdown: {
    type: Boolean,
    default: false,
  },
  typing: {
    type: Boolean,
    default: false,
  },
  step: {
    type: Number,
    default: 2, // 每次渲染的字符数
  },
  suffix: {
    type: String,
    default: "|", // 后缀内容
  },
});

const typingContent = ref(null);
let typedInstance: Typed | null = null;

// Markdown 渲染
const md = new MarkdownIt({
  highlight: (code, language) =>
    Prism.highlight(code, Prism.languages[language], language),
});

const showContent = ref("");

// 打字机效果
const initTyped = () => {
  if (typedInstance) {
    typedInstance.destroy();
  }
  typedInstance = new Typed(typingContent.value, {
    strings: [showContent.value],
    typeSpeed: props.step ? props.step : 2, // 打字机速度
    backSpeed: 50, //后退速度
    backDelay: 500, //后退延迟
    loop: false, // 循环
    showCursor: !props.isMarkdown, // 显示光标 (md 格式 光标不展示，会有行内块元素问题)
    smartBackspace: false, //智能后间距,
    fadeOut: true, //淡出效果
    fadeOutClass: "typed-fade-out", //fadeOutClass 用于淡入淡出动画的css类
    fadeOutDelay: 500, //以毫秒为单位淡出延迟
    cursorChar: props.suffix ? props.suffix : "|", // 设置光标字符 (如果是 md 格式会因为展示的为 行内块元素导致一直处于换行展示)
    onComplete: (self) => {
      if (!props.isMarkdown) {
        // 打字结束后隐藏光标
        self.cursor.style.display = "none";
        // 结束后去掉打字中类名
        (self as unknown as { el: HTMLElement }).el.parentElement?.classList.remove("el-is-typing");
      }
      console.log(self)
      onCompleteFunc(self);
    },
    preStringTyped: (_arrayPos, self) => {
      // console.log('即将开始打字', arrayPos, self)
      // 给列表组件添加一个打字中的类名，结束后去掉
      (self as unknown as { el: HTMLElement }).el.parentElement?.classList.add("el-is-typing");
    },
  });
};

// 打字完成的回调
const onCompleteFunc = (self: Typed) => {
  emits("onComplete", self);
};

onMounted(() => {
  if (props.isMarkdown) {
    // md 格式
    // 防止 xss 过滤
    showContent.value = DOMPurify.sanitize(md.render(props.content));
  } else {
    showContent.value = props.content;
  }

  if (props.typing) {
    initTyped();
  }
});

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>

<style scoped>
.markdown-body {
  background-color: var(--el-fill-color);
}
</style>
