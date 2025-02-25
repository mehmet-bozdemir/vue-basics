<script setup>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

import {useTeamStore} from '@/stores/TeamStore.js'

let team = useTeamStore();

let showModal = ref(false)
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} spots left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header> </template>

      <template #default>
        <p>Need to add a new team member to your team?</p>

        <form class="pt-6">
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Email adress...."
              class="flex-1 border rounded-md border-gray-300 p-1"
            />
            <button>Add</button>
          </div>
        </form>
      </template>

      <!-- <template #footer> override the footer </template> -->
    </Modal>
  </Teleport>
</template>
