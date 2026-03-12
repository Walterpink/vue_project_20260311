<template>
    <div>
        <h2>{{ title }}</h2>
        <p>Age: {{ age }}</p>
        <p v-if="isActive">Active: {{ isActive }}</p>
    </div>
</template>

<script setup lang="ts">

//生命props类型(编译宏，无需import)
const props = defineProps<{
    title: string,
    age?: number,
    isActive: boolean
}>()

//使用props
const title = props.title
const age = props.age
const isActive = props.isActive
console.log(title, age, isActive)
</script>
