import { reactive } from "vue";

export let counter = reactive({
  // state
  count: 0,
  
  // actions
  increment() {
    return this.count++
  }
});

