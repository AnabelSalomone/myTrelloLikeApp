<template>
<div>
<h5>Important tasks</h5>
<div class="row"> 
<div v-for="item in tasks">
<div v-if="item.important===true">
<ul class="collection">
<div  class="col s11">
    <li class="collection-item avatar">
       <img data-tooltip="Marked as important" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/1024px-Emblem-important-red.svg.png" alt="Important" class="circle tooltipped" v-if="item.important===true">
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
     
    }
  },
computed: {
    tasks(){
      return Store.search();
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
      Store.datas.taches[position].important = true;
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