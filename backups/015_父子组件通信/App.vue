<template>
  <div>
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user="user"
      @save="handleSave"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserCard from './components/UserCard.vue'

const users = ref([
  { id: 1, name: '张三', age: 28 },
  { id: 2, name: '李四', age: 32 }
])

const handleSave = ({ id, name }: { id: number; name: string }) => {
  const user = users.value.find(u => u.id === id)
  if (user) user.name = name
}

const handleDelete = (id: number) => {
  users.value = users.value.filter(u => u.id !== id)
}
</script>