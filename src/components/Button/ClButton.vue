<template>
  <div>
    <button type="button">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  label: String,
});
</script>

<style scoped lang="scss"></style>
