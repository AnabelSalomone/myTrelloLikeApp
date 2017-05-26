<template>
<div>
<div class="row"> 
<div v-for="item in tasks.taches">
<div v-if="item.visibilite === false">
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
					<button class="btn" @click="deleteTask(item)" type="button"> Eliminer</button> 
          <button class="btn" @click="montrer(item)" type="button"> Montrer</button> 
          </div>
						</div>
    </div>
    </div>
</div>
</div> 
</div>
</template>

<script>
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'


export default {
  name: 'cache',
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
		 this.three();
		},

    montrer: function(item){
      let position = this.tasks.taches.indexOf(item);
      Store.datas.taches[position].visibilite = true;
    },

	  three: function(){
      Bus.$emit('three');
       },
     }//ferme methods
   } //ferme export
</script>

<style scoped>
.card-action{
	text-align: center;
}

button{
  display: inline-flex;
}
</style>