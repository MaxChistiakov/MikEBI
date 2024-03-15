import { defineStore } from 'pinia'
import { ref } from 'vue'
import  axios  from 'axios'

export const useTaskStore = defineStore('task', () => {

  let taskData = ref({})

  let answerOptions = ref([])
  let correctAnswer = ref('')
  let taskCondition = ref('')
  let taskText = ref('')
  let taskImage = ref('')

  async function getTask() {
      await axios.get('mock-data.json')
      .then((resp) => {
        taskData.value = resp.data
        fillData()
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  function fillData() {
    answerOptions.value = taskData.value["answer options"]
    correctAnswer.value = taskData.value["correct_answer"]
    taskCondition.value = taskData.value["task conditions"]
    taskText.value = taskData.value["task text"]
    taskImage.value = taskData.value["task image"]
  }

  return { 
    taskData,
    getTask,
    taskCondition,
    correctAnswer,
    answerOptions,
    taskText,
    taskImage
   }
})
