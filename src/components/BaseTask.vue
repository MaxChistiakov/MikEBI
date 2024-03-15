<template>
  <BaseModal 
    v-if="isShow"
    @closeModal="toggleModal"
  />
  <v-container>
    <div class="base-task d-flex flex-column">
      <v-row class="task-header d-flex align-center justify-space-between mb-4">
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
      </v-row>
      <v-row>
        <v-col class="task-description d-flex flex-column align-center justify-space-between ga-16">
          <div class="task-text">
            {{ taskStore.taskText }}
          </div>
          <div class="task-image">
            <img :src="taskImage"/> 
          </div>
          <v-row class="task-answers d-flex justify-center align-center ga-11 xs-3">
            <v-col cols="12" md="8" xs="12" class="d-flex row justify-center ga-10">
              <BaseRadioButton
                v-for="button in answerOptions"
                v-model="checkedRadio"
                @checkRadioButton="getCheckValue"
                :label="button"
                :value="button"
                :name="button"
              />
            </v-col>
            <BaseButton 
              name="Check"
              @click="checkAnswers"
            />
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
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

.task-text {
  font-size: 25px;
  font-weight: 300;
}
</style>
