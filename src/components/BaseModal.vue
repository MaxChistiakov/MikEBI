<template>
  <div class="modal-wrapper d-flex align-center justify-center">
    <div class="base-modal d-flex justify-center align-center">
      <BaseButton
        @click="closeModal"
        :name="name"
    />
    </div> 
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/ui-components/index';

const name = 'Close window'

const emit = defineEmits(
  ['closeModal']
)

const closeModal = ()=> {
  emit('closeModal')
}

</script>

<style scoped>
.modal-wrapper {
  display: none;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.base-modal {
  width: 25vw;
  height: 20vh;
  border: 1px #65c7ff solid;
  background-color: #FFF;
  border-radius: 8px;
}

</style>
