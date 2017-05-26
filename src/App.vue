<template>
  <div id="app">
    <navbar></navbar>
    <div class="row">
    <div class="col s12 m3 grey lighten-4 pad-fix">
    <counter></counter>
    <search></search>
     <my-form></my-form>     
     </div>
     <div class="col s12 m9">
     <router-view></router-view>
    </div>
   </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Taches from '@/components/Tasks'
import MyForm from '@/components/MyForm'
import Cache from '@/components/Cache'
import Counter from '@/components/Counter'
import Search from '@/components/Search'
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'



export default {
  name: 'app',
  components: {navbar: Navbar,  myForm: MyForm, taches: Taches, search: Search, counter: Counter},
   
}
</script>

<style>
.pad-fix{
  margin-top: 2px;
}

</style>
