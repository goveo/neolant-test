<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<h2>Главная страница</h2>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Neolant test'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	/* color: #2c3e50; */
	/* text-align: center; */
	}

h1, h2 {
	font-weight: normal;
}

</style>
