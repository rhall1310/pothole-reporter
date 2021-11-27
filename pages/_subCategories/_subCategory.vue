<template>
  <div>
    <Header />

    <div class="container main-form">
      <h2>{{ subCat.text }}</h2>

      <div class="map-address" v-if="!manualAdd">
        <p>
          Click or tap the map to mark the location of the issue you're
          reporting
        </p>

        <Map />

        <p>
          {{ this.$store.state.defect.address.formatted }}
        </p>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="manual"
          v-model="manualAdd"
        />
        <label class="form-check-label" for="manual">
          I want to manually enter the address
        </label>
      </div>

      <Details
        :manualAddress="manualAdd"
        :category="cat.text"
        :subCategory="subCat.text"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: this.$route.params.subCategories,
      subCategory: this.$route.params.subCategory,
      categories: this.$store.state.defectTypes.categories,
      manualAdd: false,
    };
  },

  computed: {
    cat() {
      return this.categories.find(
        (category) => category.category === this.category
      );
    },

    subCat() {
      return this.cat.subCategories.find(
        (category) => category.category === this.subCategory
      );
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  padding-top: 0.2em;
}

.map-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  text-align: center;
}
</style>
