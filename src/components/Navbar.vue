<template>
<div>
<nav :class="{'red': datas.taches.length < 2, 'teal': datas.taches.length > 1}">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">My Trello-like</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Hi, User! </li>
        <li><a>{{datas.taches.length}} taches en cours</a></li>
        <li><a>{{totalHours}} hours remaining</a></li>
        <li><a>{{averageHours}} heures en moyenne</a></li>
        <li><router-link to="/hidden">Taches cachées</router-link></li>
        <li><a href="#" class="btn btn-floating" :class="{'pulse' : datas.newTask}" @click="seenTask"><i class="material-icons">add_alert</i></a></li>
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
      datas: Store.datas
     }
  },

  methods: {
    seenTask: function(){
      if(Store.datas.newTask === true){
        Store.datas.newTask = false;
        Materialize.toast('Nouvelle tache: vue!', 2000)
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