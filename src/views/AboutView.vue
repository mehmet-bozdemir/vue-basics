<script setup>
import {useFlash} from "@/composables/useFlash";
// import {counter} from "@/stores/CounterStore.js";
import {useCounterStore} from '@/stores/CounterStore.js'
let counter = useCounterStore();
let {flash} = useFlash();

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Current count number is {{counter.count}}</h1>
    
    <button @click="flash('yay!','it works!', 'success')">click me</button>
  </div>
</template>

