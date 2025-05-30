<script lang="ts" setup>
import type { TriggerEvent } from '@components/EditorSender/types';
import { Sender } from '../../components';

function handleSubmit(value: string) {
  ElMessage.success(`点击了Submit ${value}`);
}
function handleCancel() {
  ElMessage.success(`点击了Cancel`);
}

function handleTrigger(value: TriggerEvent) {
  ElMessage.success(
    `Trigger ${value.oldValue}, ${value.newValue}, ${value.isOpen}`
  );
}
function handleRecordingChange() {
  ElMessage.success(`RecordingChange`);
}
</script>

<template>
  <div class="sender-wrapper">
    <Sender
      v-bind="$attrs"
      @submit="handleSubmit"
      @cancel="handleCancel"
      @trigger="handleTrigger"
      @recording-change="handleRecordingChange"
    />
  </div>
</template>

<style scoped>
.sender-wrapper {
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
