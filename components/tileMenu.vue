<template>
  <div>
    <div class="tiles">
      <div class="tile" v-for="(item, index) in menuItems" :key="index">
        <NuxtLink :to="menuItems[index].link">
          <TileButton :text="menuItems[index].text" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import tileButton from "./tileButton.vue";

export default {
  components: { tileButton },

  props: {
    menuItems: Array,
    link: String,
  },

  data() {
    return {
      text: this.subOpt,
    };
  },
  methods: {
    setCat(cat) {
      this.$store.commit("setCategory", cat);
    },

    setSubCat(subCat) {
      this.$store.commit("setSubCat", subCat);
    },
  },
};
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
