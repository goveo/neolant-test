<template>
	<header id="navbar">
		<router-link class="link" to="/"><font-awesome-icon icon="thumbtack"/>Главная</router-link>
		<router-link class="link" to="/list"><font-awesome-icon icon="list"/>Список дел</router-link>
		<router-link class="link" to="/filter"><font-awesome-icon icon="filter"/>Фильтрация</router-link>
		<router-link class="link" to="/about"><font-awesome-icon icon="user"/>О себе</router-link>
	</header>
</template>

<script>
export default {
	name: 'about',
	data () {
		return {
		}
	}
}
</script>

<style>
#navbar {
	padding-bottom: 2rem;
	padding: 1rem;
}
.link {
	padding: 1rem;
	color:black
}
</style>
