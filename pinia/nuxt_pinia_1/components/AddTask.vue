<script>
import { uuid } from "vue3-uuid";
import { useTaskStore } from "../store/TaskStore";
export default {
  setup() {
    let title = ref("");
    const taskStore = useTaskStore();

    function taskSubmit() {
      let data = {
        id: uuid.v1(),
        title: title.value,
        isFav: false,
      };
      taskStore.addTask(data);
      title.value = "";
      //   console.log(data);
    }
    return {
      title,
      taskSubmit,
    };
  },
};
</script>
<template>
  <div>
    <form @submit.prevent="taskSubmit">
      <div class="form-group">
        <label for="task">Task</label>
        <input type="text" class="form-control" id="task" v-model="title" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>



<style lang="scss" scoped>
</style>