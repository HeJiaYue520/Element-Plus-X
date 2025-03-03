<template>
  <div
    class="el-bubble-list scroll-container"
    :style="{
      '--el-bubble-list-max-height': `${maxHeight}`,
    }"
    ref="scrollContainer"
    @scroll="handleScroll"
  >
    <Bubble
      ref="bubbleRef"
      v-for="(item, index) in list"
      :key="index"
      :content="item.content"
      :placement="item.placement"
      :loading="item.loading"
      :shape="item.shape"
      :variant="item.variant"
      :is-markdown="item.isMarkdown"
      :typing="item.typing"
      @onComplete="onCompleteFunc"
    >
      <template #avatar v-if="$slots['avatar']">
        <slot name="avatar" :item="item"></slot>
      </template>
      <template #header v-if="$slots['header']">
        <slot name="header" :item="item"></slot>
      </template>
      <template #content v-if="$slots['content']">
        <slot name="content" :item="item"></slot>
      </template>
      <template #footer v-if="$slots['footer']">
        <slot name="footer" :item="item"></slot>
      </template>
      <template #loading v-if="$slots['loading']">
        <slot name="loading" :item="item"></slot>
      </template>
    </Bubble>
  </div>
</template>

<script setup lang="ts">
import Bubble from "@/components/Bubble/index.vue";
import { nextTick, ref, watch } from "vue";
import type { BubbleProps } from "../Bubble/type";
import type Typed from "typed.js";

interface Props {
  list: BubbleProps[];
  maxHeight: string;
}

const emits = defineEmits(["onComplete"]);

const props = withDefaults(defineProps<Props>(), {
  maxHeight: "500px",
})

/* 在底部时候自动滚动 开始 */
// 滚动容器的引用
const scrollContainer = ref<HTMLDivElement | null>(null);
// 回复是否结束，只有回复结束，才会停止向底部滚动
let wasOver = ref(false);
// 上次滚动位置
const lastScrollTop = ref(0);
// 累积向上滚动距离
const accumulatedScrollUpDistance = ref(0);
// 阈值（像素）
const threshold = 15;

// 监听数组长度变化，如果改变，则判断是否在最底部，如果在，就自动滚动到底部
watch(
  () => props.list,
  () => {
    if (props.list && props.list.length > 0) {
      let node = props.list[props.list.length - 1];
      if (node.typing) {
        scrollToBottomByTyping();
      } else {
        scrollToBottom();
      }
    }
  },
  { deep: true, immediate: true }
);

// 父组件的触发方法，直接让滚动容器滚动到顶部
function scrollToTop() {
  nextTick(() => {
    // 自动滚动到最顶部
    scrollContainer.value!.scrollTop = 0;
  });
}
// 父组件的触发方法，不跟随打字器滚动，滚动底部
function scrollToBottom() {
  nextTick(() => {
    scrollContainer.value!.scrollTop = scrollContainer.value!.scrollHeight;
  });
}
// 父组件触发滚动到指定气泡框
function scrollToBubble(index: number) {
  let doms = document.querySelectorAll(".el-bubble");
  if (doms && doms.length > 0 && scrollContainer.value && index < doms.length) {
    let secondItem = doms[index];
    // 处理在滚动时候，无法回到顶部的问题
    wasOver.value = true;
    // 使用 scrollIntoView 方法滚动到目标元素
    secondItem.scrollIntoView({
      behavior: "smooth", // 平滑滚动
      block: "start",
    });
  }
}
// 父组件的触发方法，跟随打字器滚动，滚动底部
function scrollToBottomByTyping() {
  wasOver.value = false;
  let scrollTimer = setInterval(() => {
    // 如果最后气泡不开启打字机效果，直接关闭定时器
    let item = props.list[props.list.length - 1];
    if (!item.typing) {
      clearInterval(scrollTimer);
      wasOver.value = true;
      nextTick(() => {
        scrollContainer.value!.scrollTop = scrollContainer.value!.scrollHeight;
      });
      return false;
    }

    // 获取最后一个开启打字机效果的气泡的 dom
    let doms = document.querySelectorAll(".el-typography > div");

    if (doms && doms.length > 0) {
      let endDom = doms[doms.length - 1];
      // 如果最后一个气泡包含 el-is-typing 类名，就说明还在打字中，如果不包括，则打字结束
      if (!endDom.classList.contains("el-is-typing")) {
        clearInterval(scrollTimer);
        wasOver.value = true;
        return false;
      }
    } else {
      // 没有打字机节点，但是还是传入了打字机属性
      clearInterval(scrollTimer);
      wasOver.value = true;
      nextTick(() => {
        scrollContainer.value!.scrollTop = scrollContainer.value!.scrollHeight;
      });
      return false;
    }

    if (wasOver.value) {
      clearInterval(scrollTimer);
      return false;
    }
    nextTick(() => {
      scrollContainer.value!.scrollTop = scrollContainer.value!.scrollHeight;
    });
  }, 30);
}
// 打字机播放完成回调（终止自动向下滚动）
function onCompleteFunc(self: Typed) {
  emits("onComplete", self);
  wasOver.value = true;
}

// 监听用户滚动事件
function handleScroll() {
  if (scrollContainer.value) {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
    // 判断是否距离底部小于阈值 (这里吸附值大一些会体验更好)
    const isCloseToBottom = scrollTop + clientHeight >= scrollHeight - 30;
    // 判断用户是否向上滚动
    const isScrollingUp = lastScrollTop.value > scrollTop;
    // 判断用户是否向下滚动
    const isScrollingDown = lastScrollTop.value < scrollTop;
    // 计算当前滚动距离的变化
    const scrollDelta = lastScrollTop.value - scrollTop;
    // 更新上次滚动位置
    lastScrollTop.value = scrollTop;
    // 处理向上滚动逻辑
    if (isScrollingUp) {
      // 累积向上滚动距离
      accumulatedScrollUpDistance.value += scrollDelta;
      // 如果累积距离超过阈值，触发逻辑并重置累积距离
      if (accumulatedScrollUpDistance.value >= threshold) {
        // console.log(`用户向上滚动超过 ${threshold} 像素（累积）`)
        // 在这里执行你的操作
        // 如果打字器状态为 true，则停止滚动条的滚动，由用户控制
        if (!wasOver.value) {
          wasOver.value = true;
        }
        // 重置累积距离
        accumulatedScrollUpDistance.value = 0;
      }
    } else {
      // 如果用户停止向上滚动或开始向下滚动，重置累积距离
      accumulatedScrollUpDistance.value = 0;
    }
    // 处理向下滚动且接近底部的逻辑
    if (isScrollingDown && isCloseToBottom) {
      // console.log(`用户向下滚动且距离底部小于 ${threshold} 像素`)
      // 在这里执行你的操作
      if (wasOver.value) {
        // 如果已经终止自动滚动，并且打字机是否正在打字中，如果是则开启自动滚动
        scrollToBottomByTyping();
      }
    }
  }
}
/* 在底部时候自动滚动 结束 */

defineExpose({
  scrollToTop,
  scrollToBottom,
  scrollToBubble,
  scrollToBottomByTyping,
});
</script>

<style scoped>
.el-bubble-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgb(255, 185, 159);
  min-height: 0;
  max-height: var(--el-bubble-list-max-height);
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
