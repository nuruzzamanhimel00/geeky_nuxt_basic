import { defineStore } from 'pinia'

//composables
export const useTaskStore = defineStore('taskStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
		name: 'himel',
		tasks: [
			{
				id: 1,
				title: 'Learn Vue 3',
				isFav: true
			},
			{
				id: 2,
				title: 'Learn Vue 2',
				isFav: false
			},
		]
    }
	},
	getters: {
		allTask(state) {
			return state.tasks
		},
		favTasks(state) {
			return state.tasks.filter(t => t.isFav)
		},
		notFavTasks(state) {
			return state.tasks.filter(t => !t.isFav)
		},
		allTaskCount() {
			return this.tasks.length
		},
		favTasksCount() {
			return this.favTasks.length
		},
		noFasksCount() {
			return this.notFavTasks.length
		}
	},
	actions: {
		addTask(task) {
			this.tasks.push(task)
		},
		toggleFav(task) {
			let find = this.tasks.find(t => t.id === task.id)
			if (find) {
				find.isFav = !find.isFav
			}
		},
		deleteFav(task) {
			this.tasks = this.tasks.filter(t => t.id !== task.id)
		}
	}
})