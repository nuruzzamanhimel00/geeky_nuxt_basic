<template>
  <div>
    <div style="display: flex; flex-direction: row">
      <div>{{ taskData.title }}</div>
      <div>
        <a href="" @click.prevent="deleteTask(taskData)" class="btn btn-danger"
          >Delete</a
        >
        <a
          href=""
          @click.prevent="toggleFav(taskData)"
          class="btn"
          :class="[taskData.isFav ? 'btn-success' : 'btn-warning']"
          >{{ taskData.isFav ? "Favorite" : "Not Favorite" }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../store/TaskStore";
export default {
  name: "TaskItem",
  props: ["task"],
  setup(props) {
    const taskData = reactive(props.task);
    let taskStore = useTaskStore();
    function toggleFav(task) {
      taskStore.toggleFav(task);
    }

    function deleteTask(task) {
      taskStore.deleteFav(task);
    }

    return {
      taskData,
      toggleFav,
      deleteTask,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>