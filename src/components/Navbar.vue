<template>
	<div id="navbar">
		<router-link to="/">Главная</router-link>
		<router-link to="/list">Список дел</router-link>
		<router-link to="/filter">Фильтрация</router-link>
		<router-link to="/about">О себе</router-link>
	</div>
</template>

<script>
export default {
	name: 'about',
	data () {
		return {
			msg: 'About'
		}
	}
}
</script>

<style>
</style>
