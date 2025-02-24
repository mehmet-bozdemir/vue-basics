<script setup>
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
// import team from '@/team.json'
import {useTeamStore} from '@/stores/TeamStore.js'

let team = useTeamStore();
team.fill();

// setTimeout(() => {
// team.spots =10;
// }, 2000);
</script>
<template>
  <TeamHeader/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <TeamFooter />
</template>
