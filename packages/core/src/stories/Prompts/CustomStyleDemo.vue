<script lang="ts" setup>
import type { PromptsItemsProps } from '@components/Prompts/types';
import { Prompts } from '../../components';

function handleItemClick(item: PromptsItemsProps) {
  ElMessage.success(`点击了 ${item.key}`);
}
</script>

<template>
  <Prompts v-bind="$attrs" @item-click="handleItemClick" />
</template>
