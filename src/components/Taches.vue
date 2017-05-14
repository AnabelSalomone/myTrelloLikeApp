<template>
<div>
<div class="row">
<div v-for="item in tasks.taches">
      <div class="col s12 m3">
        <div class="card-panel teal">
          <span class="white-text">
					<p>Tache: {{item.titre}}</p>
					<p>Note: {{item.note}}</p>
					<p>Temps: {{item.heures}} heures</p>
          </span>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import {Store} from '@/Store.js'

export default {
  name: 'taches',
  data(){
    return {
      tasks: Store.datas,
    }
  }

}
</script>

