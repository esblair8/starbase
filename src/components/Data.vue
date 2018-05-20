<template>
	<div class="col-md-12">
		<Item
		v-for="(item, index) in items"
		v-bind:key="index"
		v-bind:passed-item="item"
		v-bind:type="type"
		/>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
		data() {
			return {
				type: this.$route.params.type,
				items: []
			}
		},
		watch: {
			'$route': 'fetchItems'
		},
		methods: {
			fetchItems() {
				this.items = []
				this.type = this.$route.params.type
				let initialIDs = [1, 13, 14]

				for (let i in initialIDs) {
					let id = initialIDs[i]

				    fetch(`https://swapi.co/api/${this.type}/${id}`, {
    					method: 'GET'
  					})
			        .then(response => response.json())
			        .then(json => this.items.push(json))
				}
			}
		},
		created() {
			this.fetchItems()
		},
		components: {
			Item
		}
	}

</script>

<style>

.character-card {
	border: 2px solid #4FC08D;
	border-radius: 4px;
	curser: pointer;
}

</style>