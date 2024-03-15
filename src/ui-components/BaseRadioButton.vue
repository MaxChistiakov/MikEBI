<template>
  <div class="checkbox-wrapper">
    <label>
      {{ props.label }}
      <input 
        @click="checkRadioButton"
        v-model="model"
        type="radio" 
        class="modern-radio" 
        :value="props.value" 
        :name="props.name"
        />
      <span></span>
    </label>
  </div>
</template>

<script setup lang="ts">

interface InputInterface {
  label: string,
  value: string,
  name: string
}

const props = defineProps<InputInterface>()

const emit = defineEmits(
  ['checkRadioButton']
)

const model = defineModel()

const checkRadioButton = ()=> {
  emit('checkRadioButton', props.value)
}

</script>

<style scoped>
.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-wrapper label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 17px;
  user-select: none;
}

.checkbox-wrapper span {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #c9c9c9;
  border-radius: 50%;
}


.checkbox-wrapper label input:checked ~ span {
  background-color: #fec901;
}


.checkbox-wrapper span:after {
  content: "";
  position: absolute;
  display: none;
}


.checkbox-wrapper label input:checked ~ span:after {
  display: block;
}


.checkbox-wrapper label span:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
