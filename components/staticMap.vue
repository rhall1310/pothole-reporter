<template>
  <div id="static-map-wrap">
    <client-only>
      <l-map id="map" :zoom="16" :center="pos">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="pos"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  computed: {
    pos() {
      return [
        this.$store.state.defect.address.lat,
        this.$store.state.defect.address.lon,
      ];
    },
  },
};
</script>

<style>
#static-map-wrap {
  width: 100%;
  height: 40vh;
  padding-bottom: 3em;
  align-items: center;
}

@media (min-width: 800px) {
  #static-map-wrap {
    width: 60vw;
  }
}
</style>
