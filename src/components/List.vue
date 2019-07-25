<template>
	<div id="list" class="container">
		<h1>Список Дел</h1>
		<ul id="todo">

			<li v-for="task in list" :key="task">
				<div class="row">
					<button type="button" class="btn close" @click="removeTask(task)">
						<span aria-hidden="true">&times;</span>
					</button>
					{{task}}
				</div>
			</li>
			<input v-model="newTask" type="text" @keyup.enter="createTask">
		</ul>
	</div>
</template>

<script>
export default {
	name: 'list',
	data () {
		return {
			newTask: "",
			list: [
				"task",
				"one more task"
			]
		}
	},
	methods: {
		removeTask(task) {
			let index = this.list.indexOf(task);
			if (index >= 0) this.list.splice(index, 1);
		},
		createTask() {
			if (this.list.indexOf(this.newTask) === -1) {
				this.list.push(this.newTask);
			}
			this.newTask = "";
		}
	}
}
</script>

<style>
li {
    list-style-type: none;
}

#todo {
	justify-content: space-between;  
}

.close {
	padding-top: 0px
}

.btn:focus,.btn:active {
   outline: none;
   box-shadow: none;
}

</style>
