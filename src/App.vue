<script setup>
import MyComponent from './components/MyComponent.vue';
</script>

<template>
  <MyComponent v-slot="slotProps">
    {{ slotProps.text }} {{slotProps.count}}
  </MyComponent>
</template>
