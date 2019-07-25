<template>
	<div id="about">
		<div id="name">
			<h1 v-show="!editing">
				<button class="icon btn" @click="changeName">
					<font-awesome-icon icon="pencil-alt"/>
				</button>
				<span>{{ name }}</span>
			</h1>
			<h1 v-show="editing">
				<button class="icon btn" @click="saveName">
					<font-awesome-icon icon="save"/>
				</button>
				<input ref="name" type="text" v-model="name"/>
			</h1>			
		</div>

		<div id="email">
			<h3>Email:</h3>
			<input type="email" v-model="email">
			<br>
			<span class="comment" :class="{'error': emailError == true }">
				должен быть валиден и принадлежать @neolant.ru
			</span>
		</div>

		<div id="birthday">
			<h3>Дата рождения:</h3>
			<input type="date" v-model="birthday"/>
		</div>

		<div id="birthplace">
			<h3>Место рождения:</h3>
			<select type="text" id="country" @change="updateCountry($event)">
				<option v-for="country in countries" :key="country.name">
					{{country.name}}
				</option>
			</select>

			<select type="text" id="region" @change="updateRegion($event)">
				<option v-for="region in countries[countryIndex].regions" :key="region.name">
					{{region.name}}
				</option>
			</select>

			<select type="text" id="town" @change="updateTown($event)">
				<option v-for="town in countries[countryIndex].regions[regionIndex].towns" :key="town.name">
					{{town.name}}
				</option>
			</select>

		</div>

		<div id="about">
			<h3>Пара слов о себе:</h3>
			<textarea v-model="about"></textarea>
		</div>

		<hr>
		<button @click="save">Сохранить</button>
	</div>
</template>

<script>
import countries from '../assets/countries.json'
export default {
	name: 'about',
	data () {
		return {
			name: "Вася Пупкин",
			editing: false,
			email: "",
			countries: countries,
			countryIndex: localStorage.getItem("saved.countryIndex") || 0,
			regionIndex: localStorage.getItem("saved.regionIndex") || 0,
			townIndex: 0,
			birthday: null,
			about: ""
		}
	},
	methods: {
		changeName() {
			this.editing = true;
			this.$refs.name.focus();
		},
		saveName() {
			this.editing = false;
		},
		updateCountry(event) {
			console.log(event)
			this.countryIndex = event.target.selectedIndex;
			console.log("this.countryIndex : ", this.countryIndex);
			
			this.regionIndex = 0
			this.townIndex = 0
		},
		updateRegion(event) {
			console.log(event)
			this.regionIndex = event.target.selectedIndex;
			console.log("this.regionIndex : ", this.regionIndex);
			this.townIndex = 0
		},
		updateTown(event) {
			console.log(event)
			this.townIndex = event.target.selectedIndex;
			console.log("this.townIndex : ", this.townIndex);
		},
		getCountries() {
			// let link = "http://rgp.neolant.com/static/test-0/data/countries.json"
            // this.$http.get(link).then(function(response) {
            //     this.countries = response.data;
            // }, function(error){
            //     console.log(error.statusText);
			// });
			
			// cors заблочил данные... пришлось засунуть в локальный файл

			console.log(this.countries);
		},
		save() {
			localStorage.setItem("saved", JSON.stringify({
				"name": this.name,
				"email": this.email,
				"birthday": this.birthday,
				"countryIndex": this.countryIndex,
				"regionIndex": this.regionIndex,
				"townIndex": this.townIndex,
				"about": this.about
			}))
		},
		getSavedData() {
			const saved = JSON.parse(localStorage.getItem("saved"));
			this.name = saved.name || "Вася Пупкин";
			this.email = saved.email;
			this.birthday = saved.birthday;
			this.countryIndex = saved.countryIndex || 0;
			this.regionIndex = saved.regionIndex || 0;
			this.townIndex = saved.townIndex || 0;
			this.about = saved.about;
		}
	},
	watch: {
		email() {
			// console.log("email: ", this.email);
			// console.log("emailError: ", this.emailError);
		}
	},
	computed: {
		emailError: function () {
    		return !/^[a-zA-Z0-9_.-]+@neolant\.ru$/.test(this.email);
		}
	},
	mounted: function() {
		this.getCountries();
		this.getSavedData();
	}
}
</script>

<style>
.comment {
	color:darkgray;
}

.error {
	color: red;
}
</style>
