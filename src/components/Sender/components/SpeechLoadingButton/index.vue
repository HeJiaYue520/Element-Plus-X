<!-- SpeechLoadingButton 语音loading 按钮 -->
<template>
  <div class="el-send-button">
    <el-button circle>
      <loading class="loading-svg" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import loading from "./loading.vue";
</script>

<style scoped lang="scss">
.el-send-button {
  :deep() {
    .el-button {
      padding: 0;
    }
  }
  .loading-svg {
    color: var(--el-color-primary);
    width: 16px;
  }
}
</style>
