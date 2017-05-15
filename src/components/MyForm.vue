<template>
<div>

<div class="row">
{{msg}}
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="nouvelle-tache" type="text" class="validate" v-model="newTask.titre">
          <label for="nouvelle-tache">Nouvelle tache</label>
        </div>
        <div class="input-field col s4">
          <input id="heures" type="number" class="validate" v-model="newTask.heures">
          <label for="heures">N° d'heures</label>
        </div>
        <div class="input-field col s4">
          <input id="note" type="number" class="validate" v-model="newTask.note">
          <label for="note">Note</label>
        </div>
      </div>
					 <button class="btn" @click="addTask" type="button">Envoyer</button>   
					  </form>
  </div>
	{{newTask.titre}}
	</div>

</template>

<script>
import {Bus} from '@/Bus.js'
import {Store} from '@/Store.js'

export default {
	name: 'myForm',

	data(){
    return {
			msg: 'coucou',
			datas: Store.datas,
      newTask: {
				titre: '',
				note: 0,
				heures: 0,
				visibilite: true
			}
    }
  },

	
	created() {
	console.log("Estoy aca: created de MyForm. La respuesta de Bus esta aca");
  console.log("array de tareas suprimidas: " + this.datas.tachesSup);

    Bus.$on('three', function(){
			console.log("Entre al bus");
      if(Store.datas.tachesSup === 3){
      alert("He oh doucement!");
	    	}
    }
    );
	},

	methods: {
    addTask: function(){
      this.datas.taches.push(this.newTask);
			this.newTask = {};
			Store.datas.newTask = true;
      console.log(Store.datas.newTask);

    }
  },

	  watch:{
    datas: function(){
      if(this.datas.tachesSup >= 3){
         this.msg = "Hé oh ! Doucement";
      }
    }
  }

}
</script>