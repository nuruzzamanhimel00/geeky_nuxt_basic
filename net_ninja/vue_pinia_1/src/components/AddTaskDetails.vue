<template>
  <div>
    <form @submit.prevent="taskSubmit">
      <div class="form-group">
        <label for="add_task">Add Task</label>
        <input
          type="text"
          v-model="task_title"
          class="form-control"
          id="add_task"
        />
      </div>
      <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "../../store/TaskStore";
export default {
  name: "AddTaskDetails",
  setup() {
    let task_title = ref("");
    const taskStore = useTaskStore();

    function taskSubmit() {
      let data = {
        id: uuidv4(),
        title: task_title.value,
        isFav: false,
      };
      taskStore.add_task(data);
      task_title.value = "";
    }

    return {
      task_title,
      taskSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>