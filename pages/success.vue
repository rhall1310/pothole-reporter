<template>
  <div>
    <Header />
    <div class="main-form">
      <h1 class="text-success">Reported successfully</h1>
      <p>
        Thank you for your report {{ this.$store.state.defect.firstName }}.
        Here's what you have told us -
      </p>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ this.$store.state.defect.details.category }} -
            {{ this.$store.state.defect.details.subCategory }}
          </h5>
          <p>At this location -</p>
          <p>{{ this.$store.state.defect.address.formatted }}</p>
        </div>
      </div>
      <div v-if="hasMap"><StaticMap /></div>
      <p style="padding-bottom: 1em">
        Thanks for helping to improve our streets
      </p>
      <a href="/">
        <button type="button" class="btn btn-primary btn-lg" id="another">
          Report something else
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import staticMap from "~/components/staticMap.vue";
export default {
  components: { staticMap },
  computed: {
    hasMap() {
      return this.$store.state.defect.address.hasOwnProperty("lat");
    },
  },
};
</script>

<style>
.card {
  margin: 1.2em;
}
</style>
