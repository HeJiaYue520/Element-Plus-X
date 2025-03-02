<!-- Bubble 对话气泡 -->
<template>
  <div
    class="el-bubble"
    :class="{
      'el-bubble-start': placement === 'start',
      'el-bubble-end': placement === 'end',
    }"
    :style="{
      '--el-padding-sm': '12px',
      '--el-padding-xxs': '4px',
      '--el-box-shadow-tertiary': `0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)`,
      '--bubble-content-max-width': `${maxWidth}`,
    }"
  >
    <!-- 头像 -->
    <div class="el-bubble-avatar" v-if="$slots['avatar']">
      <slot name="avatar"> </slot>
    </div>

    <!-- 内容 -->
    <div class="el-bubble-content-wrapper">
      <!-- 头部内容 -->
      <div class="el-bubble-header" v-if="$slots['header']">
        <slot name="header"> </slot>
      </div>

      <div
        class="el-bubble-content"
        :class="{
          'el-bubble-content-loading': loading,
          'el-bubble-content-round': shape === 'round',
          'el-bubble-content-corner': shape === 'corner',
          'el-bubble-content-filled': variant === 'filled',
          'el-bubble-content-borderless': variant === 'borderless',
          'el-bubble-content-outlined': variant === 'outlined',
          'el-bubble-content-shadow': variant === 'shadow',
        }"
      >
        <div
          class="el-typography"
          :class="{
            'no-content': !content,
          }"
          v-if="!loading"
        >
          <Typography
            :typing="_typing"
            :content="content"
            :isMarkdown="isMarkdown"
            :suffix="_suffix"
            :step="_step"
            v-if="!$slots['content'] && content"
            @onComplete="onCompleteFunc"
          />
        </div>

        <!-- 内容-自定义 -->
        <slot name="content" v-if="$slots['content'] && !loading"> </slot>

        <!-- 加载中-默认 -->
        <div
          class="el-bubble-loading-wrap"
          v-if="loading && !$slots['loading']"
        >
          <div
            v-for="(dot, index) in dots"
            :key="index"
            class="dot"
            :style="{ animationDelay: `${index * 0.2}s` }"
          ></div>
        </div>

        <!-- 加载中-自定义 -->
        <div class="el-bubble-loading-wrap" v-if="loading && $slots['loading']">
          <slot name="loading"></slot>
        </div>
      </div>

      <div class="el-bubble-footer" v-if="$slots['footer']">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Typography from "@/components/Typography/index.vue";
import { computed } from "vue";

const emits = defineEmits(["onComplete"]);
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "start",
    validator: (value) => {
      return ["start", "end"].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: null,
    validator: (value) => {
      return ["round", "corner"].includes(value);
    },
  },
  variant: {
    type: String,
    default: "filled",
    validator: (value) => {
      return ["filled", "borderless", "outlined", "shadow"].includes(value);
    },
  },
  isMarkdown: {
    type: Boolean,
    default: false,
  },
  typing: {
    type: [Boolean, Object],
    default: false,
    validator(value) {
      if (typeof value === "boolean") {
        return true;
      } else if (typeof value === "object") {
        return value.step || value.suffix;
      }
      return false;
    },
  },
  maxWidth: {
    type: String,
    default: "500px",
  },
});

const _step = computed(() => {
  if (typeof props.typing === "object" && props.typing.step) {
    return props.typing.step;
  } else {
    return 2;
  }
});

const _suffix = computed(() => {
  if (typeof props.typing === "object" && props.typing.suffix) {
    return props.typing.suffix;
  } else {
    return "|";
  }
});

const _typing = computed(() => {
  if (typeof props.typing === "boolean") {
    return props.typing;
  } else {
    return true;
  }
});

const onCompleteFunc = (self) => {
  emits("onComplete", self);
};

// 定义三个点-加载中样式
const dots = [1, 2, 3];
</script>

<style scoped lang="scss">
.el-bubble {
  display: flex;
  gap: 12px;
}

.el-bubble-start {
  .el-bubble-content-wrapper {
    .el-bubble-content-corner {
      border-start-start-radius: calc(var(--el-border-radius-base) - 2px);
    }
  }
}

.el-bubble-end {
  justify-content: end;
  flex-direction: row-reverse;
  .el-bubble-content-wrapper {
    align-items: flex-end;
    .el-bubble-content-corner {
      border-start-end-radius: calc(var(--el-border-radius-base) - 2px);
    }
  }
}

.el-bubble-content-wrapper {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  max-width: 100%;

  .el-bubble-header,
  .el-bubble-content,
  .el-bubble-footer {
    font-size: var(--el-font-size-base);
    color: var(--el-text-color-primary);
    line-height: var(--el-font-line-height-primary);
  }

  .el-bubble-header {
    margin-bottom: var();
  }

  .el-bubble-content {
    background-color: var(--el-fill-color);
    padding: var(--el-padding-sm) calc(var(--el-padding-sm) + 4px);
    border-radius: calc(var(--el-border-radius-base) + 4px);

    position: relative;
    box-sizing: border-box;
    min-width: 0;
    max-width: var(--bubble-content-max-width);
    color: var(--el-text-color-primary);
    font-size: var(--el-font-size-base);
    line-height: var(--el-font-line-height-primary);
    min-height: calc(
      var(--el-padding-sm) * 2 + var(--el-font-line-height-primary) *
        var(--el-font-size-base)
    );
    word-break: break-word;

    // 打字器没有内容时候展示高度
    .no-content {
      height: 16px;
    }
  }
  // 气泡圆角
  .el-bubble-content-round {
    border-radius: var(--el-border-radius-round);
  }
  // 气泡样式
  .el-bubble-content-filled {
    background-color: var(--el-fill-color);
  }
  .el-bubble-content-borderless {
    background-color: var(--el-fill-color);
    border: var(--el-border-width) solid var(--el-border-color);
  }
  .el-bubble-content-outlined {
    background: none;
    border: var(--el-border-width) solid var(--el-border-color);
  }
  .el-bubble-content-shadow {
    background: none;
    // box-shadow: var(--el-box-shadow-tertiary);
    box-shadow: var(--el-box-shadow);
  }

  .el-bubble-content-loading {
    .el-bubble-loading-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16px; /* 盒子高度 */
      gap: 5px;
    }

    .dot {
      width: 5px;
      height: 5px;
      background-color: var(--el-color-primary); /* 点的颜色 */
      border-radius: 50%; /* 圆形 */
      animation: wave 1s infinite ease-in-out; /* 动画 */
    }

    /* 波浪动画 */
    @keyframes wave {
      0%,
      100% {
        transform: translateY(-2px);
      }
      50% {
        transform: translateY(2px); /* 上下波动 */
      }
    }
  }

  .el-bubble-footer {
    margin-top: var(--el-padding-sm);
  }
}
</style>
