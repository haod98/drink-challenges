<script lang="ts" setup>
import LabelComponent from '@/components/form/LabelComponent.vue'
import InputComponent from '@/components/form/InputComponent.vue'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col my-3">
      <label-component for="name">Name:</label-component>
      <InputComponent id="name" />
    </div>
    <div class="flex justify-center gap-5">
      <SecondaryButton>Add player</SecondaryButton>
      <PrimaryButton>Start game</PrimaryButton>
    </div>
  </div>
</template>

<style scoped></style>
