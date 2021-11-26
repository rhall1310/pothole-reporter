<template>
  <button type="button" class="btn btn-primary btn-lg">
    <p>{{ text }}</p>

    <img id="defIcon" :src="imgSrc" />
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    imgSrc: String,
  },
};
</script>

<style>
button {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#defIcon {
  max-height: 2.5em;
}

@media screen and (max-width: 320px) {
  #defIcon {
    max-height: 1.2em;
  }
}

@media screen and (min-width: 600px) {
  #defIcon {
    max-height: 4.5em;
  }
}
</style>
