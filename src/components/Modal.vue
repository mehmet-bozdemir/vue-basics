
<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
<Transition 
  enter-from-class=" opacity-0 scale-150"
  enter-to-class="  opacity-100 scale-100"
  enter-active-class="transition duration-300"
  leave-active-class="transition duration-200"
  leave-from-class="opacity-100 scale-100"
  leave-to-class="opacity-0 scale-150"
>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <header>
        <slot name="header">default header</slot>
      </header>
      <div>
        <slot>default body</slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('close')">default close</button>
        </slot>
      </footer>
    </div>
  </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 8px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background: #ddd;
  padding: .25rem .75rem;
  border-radius: 10px;
}

.modal-footer button:hover {
  background: #ddd123;
 
}
</style>
