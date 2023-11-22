<template>
  <div>
    <div class="card">
      <div class="card-title text-center my-5">
        <img src="/pinia.png" alt="" class="img-fluid" width="100" />
        PINIA
      </div>
      <div class="card-body">
        <add-task-details />
        <div class="filter-section" style="display: flex; flex-direction: row">
          <a
            href=""
            class="btn btn-success mr-1"
            @click.prevent="filter = 'all'"
            >All -{{ taskStore.allCount }}</a
          >
          <a href="" class="btn btn-danger mr-1" @click.prevent="filter = 'fav'"
            >Fav -{{ taskStore.favCount }}</a
          >
          <a href="" class="btn btn-info mr-1" @click.prevent="filter = 'isfav'"
            >Is Fav -{{ taskStore.notFavCount }}</a
          >
        </div>
        <div v-if="filter == 'all'">
          <p>ALl task -{{ taskStore.allCount }}</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.tasks"
              :key="key"
            >
              <task-details :task="task" />
            </li>
          </ul>
        </div>
        <div v-if="filter == 'fav'">
          <p>Fav task -{{ taskStore.favCount }}</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.fav"
              :key="key"
            >
              <task-details :task="task" />
            </li>
          </ul>
        </div>
        <div v-if="filter == 'isfav'">
          <p>is notFav task -{{ taskStore.notFavCount }}</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, key) in taskStore.notFav"
              :key="key"
            >
              <task-details :task="task" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../store/TaskStore";
import taskDetails from "./components/TaskDetails.vue";
import AddTaskDetails from "./components/AddTaskDetails.vue";
export default {
  name: "App",
  components: {
    taskDetails,
    AddTaskDetails,
  },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return {
      taskStore,
      filter,
    };
  },
};
</script>

<style>
</style>
