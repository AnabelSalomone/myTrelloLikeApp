<template>
<div>
<ul class="collection" v-for="item in tasks">
<div  class="col s11">
    <li class="collection-item avatar">
      <img src="" alt="" class="circle">
      <span class="title">{{item.titre}}</span>
      <p>Note: {{item.note}}</p>
			<p>Time: {{item.heures}} hours</p>
    </li>
    </div>
			<div class="col s1">
     <a class="tooltipped" @click="deleteTask(item)" data-tooltip="Delete this task"><i class="tiny material-icons">delete</i></a>
		 <a class="tooltipped" @click="cacher(item)" data-tooltip="Mark as 'important'"><i class="tiny material-icons">remove_red_eye</i></a>
    </div>
		</ul>
</div>
</template>


<script>
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'


export default {
  name: 'Taches',
  data(){
    return {
    }
  },

computed: {
    tasks(){
      return Store.search();
    }
  },

	methods: {
	  deleteTask: function (item) {
			let position = this.tasks.indexOf(item);
      this.tasks.splice(position, 1);
			console.log(position);
      Store.datas.tachesSup += 1;
			console.log( Store.datas.tachesSup );
		 this.three();
		},

    cacher: function(item){
      let position = this.tasks.indexOf(item);
      Store.datas.taches[position].visibilite = false;
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

a{
	cursor: pointer;
}
</style>