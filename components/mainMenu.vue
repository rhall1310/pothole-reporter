<template>

<div>
    <h1>What do you want to report?</h1>
    <div class="tiles">
        
        <div class="tile" v-for="(defect, index) in defects" :key="index" @click="setType(defect)" >
            <TileButton :text="defects[index]" />
        </div>
    </div> 
</div> 

</template>

<script>
import tileButton from './tileButton.vue'
export default {
  components: { tileButton },
  
  data () {
      return {
          defects: ['Roads', 'Footways', 'Drainage', 'Street Lighting']

      }
  },
  methods: {
        setType (defect) {
            this.$store.commit('setType', defect)
        }
    }
}
</script>

<style>

h1 {
    margin: auto;
    text-align: center;
    padding: 1em;
}

.tiles {
    padding: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
    
}

.tile {
    height: 40vw;
    width: 40vw;
    
}

@media screen and (min-width: 800px) {

.tile {
    height: 20vw;
    width: 20vw;
    
}
    
}




</style>