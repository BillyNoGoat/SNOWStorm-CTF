<template>
  <v-card>
    <v-app-bar flat color="red">
      <v-toolbar-title class="title white--text pl-2">
        Submit flag
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="grey lighten-2"
        icon
        @click="
          close();
          clearResponse();
        "
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card-text class="mt-3">
      Submit your flag here to progress to the next level!
    </v-card-text>
    <v-card-text v-if="response" :class="success ? 'green--text' : 'red--text'">
      <b>{{ response }}</b>
    </v-card-text>
    <v-card-actions>
      <v-text-field
        class="mx-2"
        label="Flag"
        rows="1"
        prepend-icon="mdi-flag-variant"
        v-model="flag"
        color="blue"
        required
        @keyup.enter="submitFlag"
      ></v-text-field>
      <v-btn color="red darken-1" text plain @click="submitFlag">Submit</v-btn>
      <br /><br />
    </v-card-actions>
    <v-btn
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
      @click="show = !show"
      plain
    >
      <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon> Help
    </v-btn>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          • <b>Flags</b> are unique strings found by completing challenges.
          <br />
          • Submitting a flag verifies that a challenge was completed and
          unlocks the next challenge<br />
          • Flags are unique per user account and there is one to be found per
          challenge<br />
          • Flags will always be in the format of:
          <b>##FLAG:27239483-b4ed-499a-9ea6-e7f4046d9fcb##</b> <br />
          • Please ensure you submit the <b>full</b> flag string, including
          special characters and the FLAG keyword
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>  <script>
export default {
  props: ["close"],
  data: function () {
    return { show: false, success: true, flag: "", response: "" };
  },
  methods: {
    submitFlag: async function () {
      try {
        const res = await this.$axios.$post("/submitflag", { flag: this.flag });
        console.log(res);
        this.response = res;
        this.success = true;
        await this.$auth.fetchUser();
      } catch (e) {
        this.response = e.response.data;
        this.success = false;
      }
    },
    clearResponse: function () {
      this.response = "";
      this.flag = "";
    },
  },
};
</script>  <style scoped>
</style>