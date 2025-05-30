<script setup lang="ts">
function handleOnExpand() {
  ElMessage.success('展开');
}
</script>

<template>
  <ThoughtChain v-bind="$attrs" @handle-expand="handleOnExpand" />
</template>

<style lang="scss" scoped></style>
