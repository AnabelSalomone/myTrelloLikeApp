<template>
<div class="container">
<div class="subtitle">Add a new task:</div>
<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="nouvelle-tache" type="text" class="validate" v-model="newTask.titre">
          <label for="nouvelle-tache">Title</label>
        </div>
        <div class="input-field col s12">
          <input id="heures" type="number" min="0" class="validate" v-model="newTask.heures">
          <label for="heures"># of hours</label>
        </div>
        <div class="input-field col s12">
          <input id="note" type="number" min="0" class="validate" v-model="newTask.note">
          <label for="note">Note</label>
        </div>
      </div>
					 <button class="btn" @click="addTask" type="button">Send</button>   
					  </form>
 </div>
 </div>

</template>

<script>
import {Bus} from '@/Bus.js'
import {Store} from '@/Store.js'

export default {
	name: 'myForm',

	data(){
    return {
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

<style scoped>

.subtitle {
  background-color: #333;
  color: white;
  margin-top: 20px;
}

</style>