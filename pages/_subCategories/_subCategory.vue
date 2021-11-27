<template>
  <div>
    <Header />

    <div class="main-form">
      <h1>{{ subCat.text }}</h1>

      <div class="map-address" v-if="!manualAdd">
        <p>
          Click or tap the map to mark the location of the issue you're
          reporting
        </p>
        <div class="map">
          <Map />
        </div>

        <p>
          {{ this.$store.state.defect.mapAddress.formatted }}
        </p>
      </div>

      <div class="manual-check">
        <input type="checkbox" name="manual" id="manual" v-model="manualAdd" />
        <label for="manual">I want to enter the address manually</label>
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
html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}

.map {
  max-height: 50%;
  max-width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
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

.manual-address {
  display: flex;
  text-align: center;
  align-items: center;
}

h1 {
  text-align: center;
}

.map-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  text-align: center;
}

.map-address p {
  padding: 0.5em;
}
</style>
