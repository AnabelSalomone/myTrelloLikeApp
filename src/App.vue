<template>
  <div id="app">
    <navbar></navbar>
    <my-form></my-form>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Taches from '@/components/Taches'
import MyForm from '@/components/MyForm'
import Cache from '@/components/Cache'
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'



export default {
  name: 'app',
  components: {navbar: Navbar,  myForm: MyForm},
   
}
</script>

<style>

</style>
