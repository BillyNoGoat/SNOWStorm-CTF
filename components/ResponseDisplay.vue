<template>
  <!-- <v-card class="mx-auto" max-width="200px"> -->
  <v-card v-if="responseData" class="ml-2n text-center" max-width="200px" >
    <v-system-bar color="blue lighten-3">
      <span class="black--text"
        >Response: <b>{{ responseData.status }}</b></span
      >
      <v-spacer></v-spacer>
      <span v-if="responseData.count" class="black--text"
        >Tickets: <b>{{ responseData.count }}</b></span
      >
    </v-system-bar>
    <!-- <v-card-title class="justify-center">Response data</v-card-title> -->
    <v-card-text>
      Method: <b>{{ responseData.method }}</b
      ><br />
      <span v-if="responseData && responseData.body"
        >Request Body: <br />
        <pre style="text-align: left">{{ JSON.stringify(responseData.body, null, 2) }}</pre>
      </span>
    </v-card-text>
    <v-divider></v-divider>
    <v-btn color="blue darken-3" x-small plain @click="toggleTrim"
      ><v-icon left small>{{
        shouldTrim ? "mdi-arrow-expand" : "mdi-content-cut"
      }}</v-icon
      >{{ shouldTrim ? "Expand" : "Trim" }} response URL</v-btn
    >
  </v-card>
</template>

<script>
export default {
  props: ["responseData", "shouldTrim"],
  data: function () {
    return {
      trim: this.shouldTrim,
    };
  },
  methods: {
    toggleTrim() {
      this.$emit("trim-url"); // return this.trim ? "Expand" : "Trim";
    },
  },
};
</script>

<style>
</style>