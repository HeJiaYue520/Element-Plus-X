<script lang="ts" setup>
import type { PromptsItemsProps } from '@components/Prompts/types';
import { Prompts } from '../../components';

function handleItemClick(item: PromptsItemsProps) {
  ElMessage.success(`点击了 ${item.key}`);
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Prompts
      title="🐛 提示集组件标题"
      v-bind="$attrs"
      @item-click="handleItemClick"
    />
  </div>
</template>
