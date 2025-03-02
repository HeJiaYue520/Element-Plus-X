<template>
  <div id="app">
    <UseBubble v-if="showFlog == 0" />
    <UseBubbleList v-if="showFlog == 1" />
    <UseSender v-if="showFlog == 2" />
  </div>
</template>

<script setup>
import UseBubble from "@/play/demo-useBubble.vue";
import UseBubbleList from "@/play/demo-useBubbleList.vue";
import UseSender from "@/play/demo-useSender.vue";
import { ref } from "vue";

const showFlog = ref(0);
</script>

<style scoped></style>
