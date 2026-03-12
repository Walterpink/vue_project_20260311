<template>
    <div class="card">
        <h3>{{ user.name }} ({{ user.age }}岁)</h3>
        <input v-model="localName" type="text" placeholder="修改名字" />
        <button @click="save">保存</button>
        <button @click="remove">删除</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Props：接收用户数据
const props = defineProps<{
    user: { id: number; name: string; age: number }
}>()

// Emit：定义事件
const emit = defineEmits<{
    (e: 'save', payload: { id: number; name: string }): void
    (e: 'delete', id: number): void
}>()

// 本地编辑状态（避免直接改 props）
const localName = ref(props.user.name)

// 监听 props 变化同步到本地（可选）
watch(() => props.user.name, (newName) => {
    localName.value = newName
})

const save = () => {
    emit('save', { id: props.user.id, name: localName.value })
}

const remove = () => {
    emit('delete', props.user.id)
}
</script>