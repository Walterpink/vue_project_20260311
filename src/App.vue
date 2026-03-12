<template>
  <div>
    <FancyButton @click="handleClick">Click me</FancyButton>
  </div>
</template>

<script setup lang="ts">
import FancyButton from './components/FancyButton.vue';

function handleClick() {
  console.log('Button clicked!');
}
</script>