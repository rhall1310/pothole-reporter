<template>
  <div>
    <Header />
    <h1>{{ cat.text }}</h1>
    <TileMenu :menuItems="cat.subCategories" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: this.$route.params.category,

      categories: this.$store.state.defectTypes.categories,
    };
  },

  computed: {
    cat() {
      return this.categories.find(
        (category) => category.category === this.category
      );
    },
  },
};
</script>

<style></style>
