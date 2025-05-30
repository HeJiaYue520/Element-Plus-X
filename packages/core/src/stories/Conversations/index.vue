<script lang="ts" setup>
import type {
  ConversationItem,
  ConversationMenuCommand
} from '@components/Conversations/types';

function handleMenuCommand(
  command: ConversationMenuCommand,
  item: ConversationItem
) {
  ElMessage.success(`点击了菜单项：${command} ${item.label}`);
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; height: 320px">
    <Conversations v-bind="$attrs" @menu-command="handleMenuCommand" />
  </div>
</template>
