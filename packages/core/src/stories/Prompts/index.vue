<script lang="ts" setup>
import type { PromptsItemsProps } from '@components/Prompts/types';
import { Prompts } from '../../components';

function handleItemClick(item: PromptsItemsProps) {
  ElMessage.success(`点击了 ${item.key}`);
}
</script>

<template>
  <div style="width: 450px; height: fit-content; padding: 15px">
    <Prompts v-bind="$attrs" @item-click="handleItemClick" />
  </div>
</template>
