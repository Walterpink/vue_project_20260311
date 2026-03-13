<template>
    <div>
        <button @click="publish">Publish</button>
    </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter';

function publish() {
    console.log('Message published!', 'start===');
    emitter.emit('message', 'Hello, world!');
    console.log('Message published!', 'end===');

}
</script>