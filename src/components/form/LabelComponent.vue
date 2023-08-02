<script lang="ts" setup>
const props = defineProps({
  for: String
})
</script>

<template>
  <label :for="props.for">
    <slot></slot>
  </label>
</template>

<style scoped></style>
