<script setup>
// defineProps({
//   team:Object
// })

import AddMemberModal from '@/components/Teams/AddMemberModal.vue'

import {useTeamStore} from '@/stores/TeamStore.js'

let team = useTeamStore();
</script>


<template>

<header class="flex justify-between">
  <div>
    <!-- <button 
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
    :disabled="!team.spotsRemaining"
    @click="$emit('add')"
    >
    Add Member ({{team.spotsRemaining}} spots left)
    </button> -->
    
    <AddMemberModal/>
  </div>
  <div>
    <div class="inline-flex items-center text-3xl relative">
      <img src="@/assets/logo.svg" alt="" class="mr-2">
      <h3>{{team.name}}</h3>
      <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">{{team.spots}}</div>
    </div>
  </div>
</header>

</template>
