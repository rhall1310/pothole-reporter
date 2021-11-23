<template>
  <div class="form-group">
      
    <label for="">Where is the problem located?</label>
    <select class="form-control form-control-md">
        <option>The center of the footway</option>
        <option>The verge</option>
    </select>
    <label for="loc-details">Can you give any further information? Such as a house number, business name?</label>
    <textarea name="loc-details" id="" cols="40" rows="5"></textarea>
    <label for="image-file">Are you able to provide a photo of the problem?</label>
    <input id="image-file" type="file" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .form-group {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }
</style>