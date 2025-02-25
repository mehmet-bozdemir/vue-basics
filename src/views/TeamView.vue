<script setup>
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
// import team from '@/team.json'
import { useTeamStore } from '@/stores/TeamStore.js'
// import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()
team.fill()

let showModal = ref(false)

// setTimeout(() => {
//   // team.spots =10;
//   team.grow(25)
// }, 2000)
</script>
<template>
  <!-- <TeamHeader @add="showModal = true" /> -->
  <TeamHeader @add="showModal = true" />
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <TeamFooter />

  <!-- <Teleport to="body">
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

    <template #footer> override the footer </template>
  </Modal>
  </Teleport> -->
</template>
