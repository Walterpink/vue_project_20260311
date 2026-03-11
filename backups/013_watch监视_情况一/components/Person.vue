<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';
let sum = ref(0);

function changeSum() {
    sum.value = sum.value + 1;
}

//监视，情况一：监视ref定义的基本类型数据
const stopWatch = watch(sum, (newValue, oldValue) => {

    console.log('sum值改变了', newValue, oldValue);
    if (newValue > 10) {
        stopWatch();
        console.log('停止监视');
    }
});
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    font-size: 20px;
}
</style>