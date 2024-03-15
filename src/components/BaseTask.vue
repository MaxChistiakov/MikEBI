<template>
  <BaseModal 
    v-if="isShow"
    @closeModal="toggleModal"
  />
  <div class="base-task d-flex flex-column">
    <div class="task-header d-flex align-center justify-space-between mb-4">
      <BaseButton
     > 
      <img src="../assets/close_btn.png" alt="">
    </BaseButton>
     <div 
          class="task-condition"
        >{{ taskCondition }}
        </div>
    <BaseButton
        @click="toggleModal"
     >
      <img src="../assets/bulb.png" alt="">
    </BaseButton>
    </div>
    <div class="task-description d-flex flex-column align-center justify-space-between">
      <div class="task-text">
        {{ taskStore.taskText }}
      </div>

      <div class="task-image">
        <img :src="taskImage"/> 
      </div>

      <div class="task-answers d-flex justify-center align-center ga-11">
        <BaseRadioButton
          v-for="button in answerOptions"
          v-model="checkedRadio"
          @checkRadioButton="getCheckValue"
          :label="button"
          :value="button"
          :name="button"
        />
        <BaseButton 
          name="Check"
          @click="checkAnswers"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore'
import { storeToRefs } from 'pinia'
import { 
  BaseButton,
  BaseRadioButton
 } from '@/ui-components';
 import { BaseModal } from '@/components';
 import { ref } from 'vue'

const taskStore = useTaskStore()
taskStore.getTask()

const {
   taskCondition,
   taskImage, 
   answerOptions ,
   correctAnswer
  } = storeToRefs(taskStore)

  const isShow = ref(false)

  const toggleModal = () => {
    isShow.value = !isShow.value
  }

  const checkedRadio = ref([])

  const checked = ref('')

  function getCheckValue(value: string) {
    checked.value = value
  }

  const checkAnswers = ()=> {
    if(checked.value === correctAnswer.value) {
      alert('Correct answer!')
    } else if( checkedRadio.value.length === 0) {
      alert('check answer')
    } else {
      alert('Wrong answer')
    }

    checkedRadio.value = []
  }

</script>

<style scoped>
.base-task {
  width: 1280px;

}

.task-description {
  height: calc(100vh - 60vh);
  font-size: 25px;
  font-weight: 300;
}
</style>
