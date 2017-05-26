<template>
	<div class="container">
		<div class="subtitle">Search: </div>
		<input type="search" v-model="datas.word" @keyup="recherche" placeholder="Start typing...">
	</div>
</template>

<script>
import {Store} from '@/Store.js'
	export default {
  	name: 'search',
		data(){
			return {
				datas: Store.datas
			}
		},
		methods: {
			recherche(){
				Store.datas.word = this.datas.word;
				Store.search()
			}
		}
	}
</script>


<style scoped>
.subtitle{
  background-color: #333;
  color: white;
  margin-top: 2em;
}
</style>