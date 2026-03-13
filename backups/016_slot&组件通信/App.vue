<script setup>
import MyComponent from './components/MyComponent.vue';
import Publisher from './components/Publisher.vue';
import Subscriber from './components/Subscriber.vue';
</script>

<template>
  <MyComponent v-slot="{ text, count }">
    {{ text }} {{ count }}
  </MyComponent>
  <br />
  <Publisher />
  <br />
  <Subscriber />

  <!-- 
Message published! start===
Subscriber.vue:14 Received message: start===
Subscriber.vue:16 Received message: Hello, world!
Publisher.vue:13 Message published! end=== 
-->
</template>
