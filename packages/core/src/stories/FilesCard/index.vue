<script lang="ts" setup>
import { FilesCard } from '../../components';
</script>

<template>
  <FilesCard v-bind="$attrs" />
  <br />
  <FilesCard
    v-bind="$attrs"
    name="FilesCardDemo.png"
    file-type="image"
    thumb-url="https://camo.githubusercontent.com/4ea7fdaabf101c16965c0bd3ead816c9d7726a59b06f0800eb7c9a30212d5a6a/68747470733a2f2f63646e2e656c656d656e742d706c75732d782e636f6d2f656c656d656e742d706c75732d782e706e67"
  />
</template>
