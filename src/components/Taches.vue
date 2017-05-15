<template>
<div>
<div class="row">
<div v-for="item in tasks.taches">
      <div class="col s12 m3">
        <div class="card blue-grey darken-1">
				<div class="card-content white-text">
          <span class="white-text">
					<p>Tache: {{item.titre}}</p>
					<p>Note: {{item.note}}</p>
					<p>Temps: {{item.heures}} heures</p>

          </span>
        </div>
				<div class="card-action">
					<button class="btn" @click="deleteTask" type="button"> Eliminer</button>  
          </div>
						</div>
    </div>
</div>
</div> 
{{tasks.newTask}}
</div>
</template>

<script>
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'


export default {
  name: 'taches',
  data(){
    return {
      tasks: Store.datas
    }
  },

	methods: {
	deleteTask: function (item) {
			let position = this.tasks.taches.indexOf(item);
			this.tasks.taches.splice(position, 1);
      Store.datas.tachesSup += 1;
      console.log(this.tasks.tachesSup);
		 this.three();
		},

		three: function(){
      Bus.$emit('three');
       }
     }//ferme methods
   } //ferme export
</script>

<style scoped>
.card-action{
	text-align: center;
}
</style>