<!-- home 首页 - 使用 BubbleList 组件 -->
<template>
  <div class="component-container">
    <div class="top-wrap">
      <div class="btn-list">
        <el-button type="primary" plain @click="addMessage">添加对话</el-button>
        <el-button type="primary" plain @click="scrollToTop"
          >滚动到顶部</el-button
        >
        <el-input-number
          v-model="num"
          :min="0"
          :max="10"
          controls-position="right"
        />
        <el-button type="primary" plain @click="scrollToBubble"
          >滚动第{{ num }}个气泡框</el-button
        >
      </div>
    </div>

    <div class="component-1">
      <BubbleList
        ref="bubbleListRef"
        :list="bubbleItems"
        @onComplete="onCompleteFunc"
      >
        <template #avatar="{ item }">
          <el-avatar :size="32" :src="item.avatar" />
        </template>

        <template #header="{ item }">
          <div class="header-container">
            {{
              item.role == "ai" ? "机器人头部自定义内容" : "用户头部自定义内容"
            }}
          </div>
        </template>

        <!-- 自定义 content -->
        <!-- <template #content="{ item }">
          <div class="content-container">
            {{ item.content }}
          </div>
        </template> -->

        <template #footer="{ item }">
          <div class="footer-container">
            {{
              item.role == "ai" ? "机器人底部自定义内容" : "用户底部自定义内容"
            }}
          </div>
        </template>

        <template #loading="{ item }">
          <div class="loading-container">
            {{
              item.role == "ai" ? "机器人自定义加载动画" : "用户自定义加载动画"
            }}
          </div>
        </template>
      </BubbleList>
    </div>
  </div>
</template>

<script setup>
import { messageArr } from "./mock";
import BubbleList from "@/components/BubbleList/index.vue";
import { onMounted, ref } from "vue";

const bubbleItems = ref(messageArr);

const bubbleListRef = ref();
const num = ref(0);

function addMessage() {
  let i = bubbleItems.value.length;
  const isUser = !!(i % 2);
  const content = isUser
    ? "Mock user content."
    : "Mock AI content. ".repeat(100);
  let placement = isUser ? "end" : "start";
  let typing = isUser ? false : { step: 2, suffix: "..." };
  let obj = {
    key: i,
    role: isUser ? "user" : "ai",
    content,
    placement,
    typing,
  };
  bubbleItems.value.push(obj);
}

function onCompleteFunc(self) {
  // console.log('列表打字结束', self)
}

function scrollToTop() {
  bubbleListRef.value.scrollToTop();
}

function scrollToBubble() {
  bubbleListRef.value.scrollToBubble(num.value);
}

onMounted(() => {
  setTimeout(() => {
    bubbleItems.value.map((item) => {
      item.loading = false;
    });
  }, 3000);
});
</script>

<style scoped lang="scss">
.component-container {
  width: 1200px;
  height: calc(100vh - 64px);
  padding: 12px;

  .btn-list {
    display: flex;
    gap: 12px;
  }

  .top-wrap {
    margin: 12px 0;
  }
}
</style>
