<template>
	<div id="filter">
		<div class="row">
			<h1 class="col-sm">Список</h1>
			<span class="col-sm">
				<button class="icon btn" :class="{ 'active': highlight == false }" @click="highlight = false"><font-awesome-icon icon="filter"/></button>
				<button class="icon btn" :class="{ 'active': highlight == true }" @click="highlight = true"><font-awesome-icon icon="lightbulb"/></button>
				<input v-model="query" type="text" @input="filterCodes">
			</span>
		</div>
		<ul>
			<li v-for="item in filteredList" :key="item">
				<text-highlight :queries="[query]" v-if="highlight == true">{{ item }}</text-highlight>
				<span v-else>{{ item }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import codes from '../assets/status-codes.json'

export default {
	data () {
		return {
			codes: codes,
			query: "",
			highlight: true
		}
	},
	methods: {
		filterCodes() {
			console.log("filterCodes");
			if(!this.query) {
				return this.codes;
			}
			this.codes.forEach((item, index) => {
				item.replace(new RegExp(this.query, "gi"), match => {
					return '<span class="highlightText">' + match + '</span>';
				});
			});
			
		}
	},
	computed: {
		filteredList() {
			if (!this.highlight) {
				return this.codes.filter(item => {
					return item.toLowerCase().includes(this.query.toLowerCase())
				});
			} else {
				return this.codes;
			}
			
		}
  }
}
</script>

<style>
li {
    list-style-type: none;
}

.btn:focus,.btn:active {
   outline: none;
   box-shadow: none;
}

button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

.icon {
	color: darkgray;
}

.active {
	color: black;
}
</style>
