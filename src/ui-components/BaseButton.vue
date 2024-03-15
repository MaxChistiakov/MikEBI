<template>
    <button
      :class="`base-button ${isNamed ? 'isSlot' : ''}`"
      :name="props.name"
    >
      <slot>
        {{ name }}
      </slot>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface BaseButtonInterface {
  name?: string,
}

const props = defineProps<BaseButtonInterface>()

const isNamed = ref(!props.name)

</script>

<style scoped>
.base-button {
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5em;
  cursor: pointer;
}

.base-button:hover {
  background-color: #aee8f7 ;
}

.base-button:active {
  background-color: #69d9f5;
}

.isSlot {
  line-height: 0;
}
</style>
