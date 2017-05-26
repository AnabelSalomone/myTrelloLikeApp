<template>
<div>
<nav :class="{'red': datas.taches.length < 2, 'teal': datas.taches.length > 1}">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">My Trello-like</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Hi, User! </li>
        <li class="fix-pad" v-if="mainScreen===true" @click="changeScreen"><router-link to="/hidden">Important tasks</router-link></li>
        <li class="fix-pad" v-if="mainScreen===false" @click="changeScreen"><router-link to="/">All tasks</router-link></li>
        <li class="fix-pad"><a href="#" class="btn btn-floating" :class="{'pulse' : datas.newTask, 'red' : datas.newTask}" @click="seenTask"><i class="material-icons">add_alert</i></a></li>
      </ul>
  </div>
  </nav>
</div>
</template>

<script>
import {Bus} from '@/Bus.js'
import {Store} from '@/Store.js'


export default {
  name: 'myNavbar',
  data(){
    return{
      datas: Store.datas,
      mainScreen: true
     }
  },

  methods: {
    seenTask: function(){
      if(Store.datas.newTask === true){
        Store.datas.newTask = false;
        Materialize.toast('You have new task(s)!', 2000)
          }
        },

    changeScreen: function(){
      if (this.mainScreen === true){
        return this.mainScreen = false;
      } else{
        return this.mainScreen = true;
      }
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
.fix-pad{
  padding-right: 10px;
  padding-left: 10px;
  font-size: 10px;
}
</style>