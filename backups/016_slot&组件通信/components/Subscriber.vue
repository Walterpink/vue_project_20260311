<template>
    <div>
        Receive message: {{ message }}
    </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter';
import { ref, onMounted, onUnmounted } from 'vue';
let message = ref('--');

// 绑定事件
emitter.on('message', (value) => {
    console.log('Received message:', "start===");
    message.value = value as string;
    console.log('Received message:', value);
});
onUnmounted(() => {
    // 解绑事件
    emitter.off('message');
    console.log('Event unbound');
});
</script>