<template>
  <div>
    <form class="form-group was-validated" id="main-form">
      <div v-if="manualAddress">
        <h3>Enter the address</h3>
        <label for="firstAdd">1st line of Address</label>
        <input
          type="text"
          name="firstAdd"
          id=""
          class="form-control"
          required
          v-model="defect.address1"
        />
        <label for="secondAdd">2nd line of Address</label>
        <input
          type="text"
          name="secondAdd"
          id=""
          class="form-control"
          v-model="defect.address2"
        />
        <label for="postcode">Postcode</label>
        <input
          type="text"
          name="postcode"
          id=""
          class="form-control"
          required
          v-model="defect.postcode"
        />
        <label for="city">Town/City</label>
        <input
          type="text"
          name="city"
          id=""
          class="form-control"
          required
          v-model="defect.city"
        />
      </div>
      <h3>Problem Details</h3>
      <label for="">Where is the problem located?</label>
      <select class="form-control form-control-md" required>
        <option>The center of the footway</option>
        <option>The verge</option>
      </select>
      <label for="loc-details"
        >Can you give any further information? Such as a house number, business
        name or description of the problem?</label
      >
      <textarea
        name="loc-details"
        id=""
        cols="40"
        rows="5"
        v-model="defect.details"
      ></textarea>

      <h3>Photo</h3>
      <label for="image-file"
        >Are you able to provide a photo of the issue?</label
      >
      <input id="image-file" type="file" />
      <div v-if="!defect.anon">
        <h3>Personal Details</h3>
        <label for="title">Title</label>
        <select
          class="form-control form-control-sm"
          id="title"
          required
          v-model="defect.title"
        >
          <option>Mr</option>
          <option>Ms</option>
          <option>Mrs</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </select>
        <label for="first-name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first-name"
          required
          v-model="defect.firstName"
        />
        <label for="surname">Surname</label>
        <input
          type="text"
          class="form-control"
          id="surname"
          required
          v-model="defect.lastName"
        />
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@email.com"
          required
          v-model="defect.email"
        />
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model="defect.phoneNumber"
        />

        <div class="form-check" id="priv">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="privacy"
            required
          />
          <label class="form-check-label" for="privacy">
            I have read and accepted the privacy policy
          </label>
        </div>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="anon"
          v-model="defect.anon"
        />
        <label class="form-check-label" for="anon">
          I want to report this anonymously
        </label>
      </div>

      <button
        type="submit"
        class="btn btn-primary btn-lg"
        id="submit"
        @click="submitDefect()"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    manualAddress: Boolean,
    category: String,
    subCategory: String,
  },

  data() {
    return {
      defect: {
        address1: " ",
        address2: "",
        postcode: "",
        city: "",
        anon: "",
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        details: "",
        address: { formatted: "" },
      },
    };
  },

  methods: {
    submitDefect() {
      this.$store.commit("setDefect", this.defect);
      window.location.href = "/";
    },
  },
};
</script>

<style>
.form-group {
  display: flex;
  flex-direction: column;
  padding: 1em;
}

#submit {
  margin-top: 1em;
}

#main-form label {
  padding-top: 0.4em;
}

#main-form h3 {
  padding-top: 1em;
}

#priv {
  padding-top: 1em;
}
</style>
