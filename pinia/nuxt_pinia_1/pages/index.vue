<script>
import { useTaskStore } from "../store/TaskStore";
export default {
  setup() {
    const taskStore = useTaskStore();
    let tab = ref("all");
    // console.log(taskStore.name);
    return {
      taskStore,
      tab,
    };
  },
};
</script>
<template>
  <div>
    <div class="card">
      <div class="card-title text-center">
        <img src="/pinia.png" alt="" width="100" /> PINIA
      </div>
      <div class="card-body">
        <AddTask />
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link btn btn-success"
                href="#"
                @click.prevent="tab = 'all'"
                >All {{ taskStore.allTaskCount }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-primary"
                href="#"
                @click.prevent="tab = 'fav'"
              >
                Favorite {{ taskStore.favTasksCount }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-danger"
                href="#"
                @click.prevent="tab = 'notfav'"
                >Not Favorite {{ taskStore.noFasksCount }}</a
              >
            </li>
          </ul>
        </div>
        <div v-if="tab == 'all'">
          <h1>All Fav {{ taskStore.allTaskCount }}</h1>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.tasks"
              :key="key"
            >
              <TaskItem :task="task" />
            </li>
          </ul>
        </div>

        <div v-else-if="tab == 'fav'">
          <h1>IS Fav {{ taskStore.favTasksCount }}</h1>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.favTasks"
              :key="key"
            >
              <TaskItem :task="task" />
            </li>
          </ul>
        </div>

        <div v-else-if="tab == 'notfav'">
          <h1>IS no Fav {{ taskStore.noFasksCount }}</h1>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.notFavTasks"
              :key="key"
            >
              <TaskItem :task="task" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
</style>