<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { useFlash } from '@/composables/useFlash'
import { useStorage } from '@/composables/useStorage'
let { flash } = useFlash()
import {ref} from 'vue'

let comment = ref('initial textarea value');
let food = useStorage('food', 'tacos')
let age = useStorage('age', 29)

let obj = useStorage('obj', { one: 'one' })

// setTimeout(()=>{
//   obj.value = {'changed': 'entirely'}
// },3000)
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
    <p>what is your favorite food? <input type="text" v-model="food" /></p>

    <p>how old are you? <input type="text" v-model="age" /></p>

    <button @click="flash('yay!', 'home', 'info')">click me</button>
  </main>
</template>
