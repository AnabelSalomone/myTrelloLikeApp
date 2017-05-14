<template>
  <div id="app">
    <navbar></navbar>
    <taches></taches>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Taches from '@/components/Taches'
import {Store} from '@/Store.js'


export default {
  name: 'app',
  components: {navbar: Navbar, taches: Taches},
   
}
</script>

<style>

</style>
