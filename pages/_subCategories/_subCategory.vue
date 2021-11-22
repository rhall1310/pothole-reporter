<template>
    <div>
  
  {{subCat.text}}
        
    </div>
</template>

<script>
export default {

     data () {
        return {
            category: this.$route.params.subCategories,
            subCategory: this.$route.params.subCategory,
            categories: this.$store.state.defectTypes.categories,

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

</style>