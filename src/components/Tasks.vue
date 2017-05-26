<template>
<div>
<h5>Current tasks</h5>
<ul class="collection" v-for="item in tasks">
<div  class="col s11">
    <li class="collection-item avatar">
      <img data-tooltip="Marked as important" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/1024px-Emblem-important-red.svg.png" alt="Important" class="circle tooltipped" v-if="item.important===true">
      <span class="title">{{item.titre}}</span>
      <p>Note: {{item.note}}</p>
			<p>Time: {{item.heures}} hours</p>
    </li>
    </div>
			<div class="col s1">
     <a class="tooltipped" @click="deleteTask(item)" data-tooltip="Delete this task"><i class="petite material-icons">delete</i></a>
		 <a class="tooltipped" @click="cacher(item)" data-tooltip="Mark as 'important'" v-if="item.important===false"><i class="petite material-icons">error</i></a>
     <a class="tooltipped" @click="cacher(item)" data-tooltip="Mark as 'normal'" v-if="item.important===true"><i class="petite material-icons">remove_red_eye</i></a>
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
      if (item.important===false){
         return Store.datas.taches[position].important = true;
      } else{
          return Store.datas.taches[position].important = false;
      }
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
  color: #80cbc4;
}
</style>