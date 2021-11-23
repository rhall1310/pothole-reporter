<template>
  <button type="button" class="btn btn-primary btn-lg">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style>
button {
  height: 100%;
  width: 100%;
}
</style>
