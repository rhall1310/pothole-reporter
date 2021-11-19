<template>

<div>
    <h1>What do you want to report?</h1>
    <div class="tiles">
        
        <div class="tile" v-for="(category, index) in categories" :key="index" @click="setCat(category[0])" >
            <NuxtLink to="subMenu"> 
                <TileButton :text="categories[index][0]" />
            </NuxtLink>
        </div>
    </div> 
</div> 

</template>

<script>
import tileButton from '../components/tileButton.vue'

export default {
  components: { tileButton },

  computed: {
      categories () {
          return this.$store.state.defectTypes.list
      }
  },
  
  data () {
      return {
          

      }
  },
  methods: {
        setCat (cat) {
            this.$store.commit('setCategory', cat)
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