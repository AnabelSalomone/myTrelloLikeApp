<template>
<div class="container">

<div class="subtitle">Current tasks:</div>

  <div class="chip">
		{{datas.taches.length}} current tasks
  </div>

	<div class="chip">
		Time remaining: {{totalHours}} hours
  </div>

		<div class="chip">
		Average time: {{averageHours}}
  </div>
	</div>
</template>

<script>
import {Bus} from '@/Bus.js'
import {Store} from '@/Store.js'


export default {
  name: 'Counter',
  data(){
    return{
      datas: Store.datas,
     }
  },

   computed: {
    totalHours: function(){
      let final = 0;
      for (let item of this.datas.taches){
        final += parseInt(item.heures);
      }
      return Math.round(final);
    },

    averageHours: function(){
      let moyenne = 0;
      for (let item of this.datas.taches){
        moyenne += parseInt(item.heures);
      }
      return Math.round(moyenne / this.datas.taches.length);
    }

  } // ferme computed
}
</script>

<style scoped>
.subtitle{
  background-color: #333;
  color: white;
  margin-top: 1em;
	margin-bottom:2em;
}
</style>