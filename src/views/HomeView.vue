<script setup>
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'

let message = ref('hello world');

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    
    {{message}}
  </main>
</template>
