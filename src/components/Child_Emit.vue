<template>
    <div>
        <button @click="HandleClick">提交</button>
        <button @click="updateName">更新名字</button>
    </div>
</template>

<script setup lang="ts">
// defineEmits is used to define the events that can be emitted by the component.
// It returns an object with the event names as keys and empty arrays as values.
// The event names can be used to emit events from the component.
// The event names can be used to listen to events emitted by the component.
// The event names can be used to validate the events emitted by the component.
// Emit(子传父) 作用:子组件向父组件发送消息或数据
const emit = defineEmits<{
    (e: 'submit', data: { id: number, name: string }): void
    (e: 'update:name', newName: string): void
}>()

const HandleClick = () => {
    console.log('HandleClick')
    emit('submit', { id: 1, name: 'John' })
}
const updateName = () => {
    console.log('updateName')
    emit('update:name', 'Jane')
}
</script>