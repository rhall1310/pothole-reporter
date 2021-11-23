<template>
  <div>
    <div class="form-group">
      <h3>Problem Details</h3>
      <label for="">Where is the problem located?</label>
      <select class="form-control form-control-md">
        <option>The center of the footway</option>
        <option>The verge</option>
      </select>
      <label for="loc-details"
        >Can you give any further information? Such as a house number, business
        name or description of the problem?</label
      >
      <textarea name="loc-details" id="" cols="40" rows="5"></textarea>

      <h3>Photo</h3>
      <label for="image-file"
        >Are you able to provide a photo of the issue?</label
      >
      <input id="image-file" type="file" />
    </div>

    <div class="form-group" v-if="!anon">
      <h3>Personal Details</h3>
      <label for="title">Title</label>
      <select class="form-control form-control-sm" id="title">
        <option>Mr</option>
        <option>Ms</option>
        <option>Mrs</option>
        <option>Other</option>
        <option>Prefer not to say</option>
      </select>
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" required />
      <label for="surname">Surname</label>
      <input type="text" class="form-control" id="surname" />
      <label for="email">Email</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="name@email.com"
      />
      <label for="phone">Phone Number</label>
      <input type="text" class="form-control" id="phone" />
    </div>

    <label for="anon">I want to report this anonymously</label>
    <input type="checkbox" name="anon" id="anon" v-model="anon" />

    <button type="button" class="btn btn-primary btn-lg">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anon: "",
      dataPol: "",
      title: "",
      firstName: "",
      LastName: "",
      email: "",
      phoneNumber: "",
    };
  },
};
</script>

<style>
.form-group {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
</style>
