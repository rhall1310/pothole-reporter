<template>
  <div>
    <Header />
    <h1>What do you want to report?</h1>
    <TileMenu :menuItems="menu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: this.$store.state.defectTypes.categories,
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
h1 {
  margin: auto;
  text-align: center;
  padding: 1em;
}
</style>
