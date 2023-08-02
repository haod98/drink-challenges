<script lang="ts" setup>
const props = defineProps({
  id: String
})
</script>

<template>
  <input :id="props.id" class="border-accent border-solid border-2 rounded-md p-2.5" type="text" />
</template>

<style scoped></style>
