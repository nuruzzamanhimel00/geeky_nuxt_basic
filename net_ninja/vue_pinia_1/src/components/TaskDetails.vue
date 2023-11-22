<script>
import { reactive } from "vue";
import { useTaskStore } from "../../store/TaskStore";
export default {
  name: "TaskDetails",
  props: ["task"],
  setup(props) {
    let taskdata = reactive(props.task);
    // console.log(props.task);
    const taskStore = useTaskStore();

    function deleteTask(task) {
      // console.log(task);
      taskStore.delete_task(task);
    }

    function toggleFav(task) {
      taskStore.toggle_task(task);
    }
    return {
      taskdata,
      deleteTask,
      toggleFav,
    };
  },
};
</script>
<template>
  <div style="display: flex">
    <div>{{ taskdata.title }}</div>
    <div>
      <a href="" @click.prevent="deleteTask(taskdata)" class="btn btn-danger"
        >delete</a
      >
      <a
        href=""
        @click.prevent="toggleFav(taskdata)"
        class="btn btn-success"
        :class="[taskdata.isFav ? 'btn-success' : 'btn-info']"
      >
        {{ taskdata.isFav ? "Unfavorite" : "Favorite" }}
      </a>
    </div>
  </div>
</template>



<style scoped>
</style>