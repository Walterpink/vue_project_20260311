<script setup lang="ts">

// import child from './components/child.vue';
import Child_Emit from './components/Child_Emit.vue';

const HandleSubmit = (data: { id: number, name: string }) => {
  console.log('收到提交', data)
}

const handleNameUpdate = (name: string) => {
  console.log('姓名更新', name)
}
</script>

<template>
  <!-- <child title="用户信息" v-bind:age=25 :isActive="true" /> -->
  <Child_Emit @submit="HandleSubmit" @update:name="handleNameUpdate" />
</template>

<style scoped></style>
