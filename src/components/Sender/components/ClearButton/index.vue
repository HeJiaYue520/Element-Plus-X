<!-- ClearButton 清理按钮 -->
<template>
  <div class="el-send-button">
    <el-button circle @click="emit('clear')">
      <el-icon><Brush /></el-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { Brush } from "@element-plus/icons-vue";
const emit = defineEmits(["clear"]);
</script>

<style scoped lang="scss">
.el-send-button {
  :deep() {
    .el-button {
      .el-icon {
        // 旋转180
        transform: rotate(180deg);
      }
    }
  }
}
</style>
