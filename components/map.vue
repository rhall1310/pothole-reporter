<template>
  <div id="map-wrap">
    <client-only>
      <l-map :zoom="13" :center="markerCoords" @click="moveMarker">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="markerCoords"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      markerCoords: [50.795893175589484, 0.26435462099609897],
      lat: "50.795893175589484",
      lon: "0.26435462099609897",
      address: {
        country_code: "gb",
        street: "Stanmer Drive",
        country: "United Kingdom",
        county: "East Sussex",
        datasource: {
          sourcename: "openstreetmap",
          attribution: "© OpenStreetMap contributors",
          license: "Open Database License",
          url: "https://www.openstreetmap.org/copyright",
        },
        state: "England",
        city: "Eastbourne",
        lon: 0.263575,
        lat: 50.795528,
        state_code: "ENG",
        distance: 68.20109792297515,
        result_type: "street",
        formatted: "Stanmer Drive, Eastbourne, United Kingdom",
        address_line1: "Stanmer Drive",
        address_line2: "Eastbourne, United Kingdom",
        county_code: "ESX",
        rank: {
          popularity: 4.7685678919278995,
        },
        place_id: "51cac342ad69ded03f59b1868bdcd3654940",
      },
    };
  },

  mounted() {
    this.getLoc();
  },

  methods: {
    moveMarker(event) {
      this.markerCoords = event.latlng;
      this.lat = event.latlng.lat;
      this.lon = event.latlng.lng;

      this.getAddress();
    },

    getLoc() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.markerCoords = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

        this.getAddress();
      });
    },

    getAddress() {
      fetch(
        "https://api.geoapify.com/v1/geocode/reverse?lat=" +
          this.lat +
          "&lon=" +
          this.lon +
          "&apiKey=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((result) => {
          this.address = result.features[0].properties;

          console.log(this.address);

          this.$store.commit("setAddress", this.address);
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
#map-wrap {
  width: 60vh;
  height: 60vh;
}
</style>
