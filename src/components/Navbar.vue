<template>
<div>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">My Trello-like</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Hi, User! </li>
        <li><a>{{datas.taches.length}} taches en cours</a></li>
        <li><a>{{totalHours}} hours remaining</a></li>
        <li><a>{{averageHours}} heures en moyenne</a></li>
        <li><a href="#">Taches</a></li>
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
        Store.datas.newTask = false;
          }
      },
  computed: {
    totalHours: function(){
      let final = 0;
      for (let item of this.datas.taches){
        final += parseInt(item.heures);
      }
      return final
    },

    averageHours: function(){
      let moyenne = 0;
      for (let item of this.datas.taches){
        moyenne += parseInt(item.heures);
      }
      return moyenne / this.datas.taches.length
    }

  } // ferme computed
}
</script>