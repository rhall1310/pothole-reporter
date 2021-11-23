<template>
<div>
    <Header />
    
    <div class="main-form">
        
        <h1>{{subCat.text}}</h1>
        <p>Click or tap the map to mark the location of the issue you're reporting</p>
        <div class="map" v-if="!manualAdd">
            <Map />
            
        </div>
        {{this.$store.state.defect.address.formatted}}
        [{{this.$store.state.defect.address.lat}},{{this.$store.state.defect.address.lon}}]
        <div class="manual">
        <input type="checkbox" name="manual" id="manual" v-model="manualAdd">
        <label for="manual">I want to enter the address manually</label>
        </div>
        <Details />   
    </div>
</div>    
</template>

<script>
export default {

     data () {
        return {
            category: this.$route.params.subCategories,
            subCategory: this.$route.params.subCategory,
            categories: this.$store.state.defectTypes.categories,
            manualAdd: ''

        }
    },

      computed: {
        cat () {
            return this.categories.find(category => category.category === this.category)
        },

        subCat () {
            return this.cat.subCategories.find(category => category.category === this.subCategory)
        }

        
       
    }

    

}
</script>

<style>
.map {
    max-height: 50%;
    max-width: 75%;
    margin: auto;
    display: flex;
    padding: 1em;
    
}

.main-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    
}

.manual {
    padding: 1em;
}

</style>