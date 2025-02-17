<script setup>
// import {counter} from  '@/stores/CounterStore.js';
import {useCounterStore} from '@/stores/CounterStore.js'
let counter = useCounterStore();
</script>

<template>
  <div>
    <p>Counter View</p>
    <h1>
    {{counter.count}}
    </h1>
    <button 
    @click="counter.increment()"
    :disabled="!counter.remaining"
    >
    increment ({{counter.remaining}} remaining)
    </button>
  </div>
</template>
