import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
	state: () => ({tasks: [{
				id: 1,
				title: 'Learn Vue 3',
				isFav: true},{
				id: 2,
				title: 'Learn Vue 2',
			isFav: false
		}]
	}),
	getters: {
		fav(state) {
			return state.tasks.filter(t => t.isFav)
		},
		notFav(state) {
			return state.tasks.filter(t => !t.isFav)
		},
		favCount(state) {
			return state.tasks.reduce((p, c)=>{
				return c.isFav ? p + 1 : p
			},0)
		},
		notFavCount() {
			return this.tasks.reduce((p, c) => {
				return !c.isFav ? p + 1 : p
			},0)
		},
		allCount() {return this.tasks.length}},
	actions: {
		add_task(task) {
			this.tasks.push(task);
			// console.log(task)
		},
		delete_task(task) {
			this.tasks = this.tasks.filter(t => t.id !== task.id)
			// console.log(task)
		},
		toggle_task(task) {
			let find_task = this.tasks.find(t => t.id === task.id);
		
			if (find_task) {
				find_task.isFav = !find_task.isFav
				
			}
		}
	}
	
	
})