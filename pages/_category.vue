<template>
    <div>
           <h1> {{cat.text}} </h1>

            <TileMenu :menuItems="cat.subCats" />

    </div>
</template>

<script>
export default {

    data () {
        return {

            category: this.$route.params.category,

            categories: [
                {
                    category: 'footways',
                    text: 'Footways',
                    link: 'Blalalalal',
                    subCats: [
                            {
                            category: 'footways',
                            text: 'Footways',
                            link: 'Blalalalal',
                            subCats: []
                            },
                            {
                            category: 'footways',
                            text: 'Footways',
                            link: 'Blalalalal',
                            subCats: []
                            }
                            ]
                },
                 {
                    category: 'roads',
                    text: 'What is Palut?',
                    link: 'Plalalalal',
                    subCats: []
                },
            ]

            }
        },
    computed : {
        cat () {

            return this.categories.find(category => category.category === this.category)
    }    
    }

}
</script>

<style>

</style>