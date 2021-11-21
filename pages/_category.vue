<template>
    <div>
            {{post.text}}

    </div>
</template>

<script>
export default {

    data () {
        return {

            category: this.$route.params.category,

            posts: [
                {
                    category: 'balut',
                    text: 'What is Balut?',
                    link: 'Blalalalal'
                },
                 {
                    category: 'palut',
                    text: 'What is Palut?',
                    link: 'Plalalalal'
                },
            ]

            }
        },
    computed : {
        post () {

            return this.posts.find(post => post.category === this.category)
    }    
    }

}
</script>

<style>

</style>