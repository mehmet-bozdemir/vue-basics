import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state (){
    return{
      name: '',
      spots: 0,
      members: []
    }
  },
  
  actions:{
    // fill(){
      // import('@/team.json').then(r => {
        // console.log(r.default);
        
        // let data = r.default;
        
        // this.name = data.name;
        // this.spots = data.spots;
        // this.members = data.members;
        
        // this.$patch({
        //   name: data.name,
        //   spots: data.spots,
        //   members: data.members
        // })
        
        // this.$state = r.default;
                
      // })
      
      async fill() {
      let r = await import('@/team.json');
      this.$state = r.default;
      }
    }
})