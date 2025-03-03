<!-- SendButton 发送按钮 -->
<template>
  <div class="el-send-button">
    <el-button circle @click="emits('submit')">
      <el-icon><Top /></el-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Top } from "@element-plus/icons-vue";
const emits = defineEmits(["submit"]);
</script>

<style scoped lang="scss"></style>
