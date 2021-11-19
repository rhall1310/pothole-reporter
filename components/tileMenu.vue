<template>

<div>
    
    <div class="tiles" v-if="isMain" >
        
        <div class="tile" v-for="(item, index) in menuItems" :key="index" @click="setCat(item)" >
            <NuxtLink :to="link"> 
                <TileButton :text="menuItems[index].category" />
                
            </NuxtLink>
        </div>
        
    </div> 

     <div class="tiles" v-else >
               
        <div class="tile" v-for="(item, index) in menuItems" :key="index" @click="setSubCat(item)" >
            <NuxtLink :to="link"> 
                
                <TileButton :text="menuItems[index]" />
            </NuxtLink>
        </div>
    </div> 
</div> 

</template>

<script>
import tileButton from './tileButton.vue'

export default {
  components: { tileButton },

    props: {
        menuItems: Array,
        isMain: Boolean,
        link: String


    }, 
  
  data () {
      return {

         
          

      }
  },
  methods: {
        setCat (cat) {
            this.$store.commit('setCategory', cat)
        },

        setSubCat (subCat) {
            this.$store.commit('setSubCat', subCat)
        }
    }
}
</script>

<style>



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