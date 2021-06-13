<template>
  <div>
    <v-app-bar app class="red accent-4">
      <v-container fluid>
        <!-- <v-app-bar-title class="text-uppercase white--text"></v-app-bar-title> -->
        <v-row no-gutters>
          <v-col>
            <v-btn text color="white" to="/">
              <v-icon left>mdi-home</v-icon>
              Home
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn text color="white" to="/challenge1">
              <v-icon left v-if="currentChallenge == 0">mdi-puzzle</v-icon>
              <v-icon left v-else-if="$auth.user.challenges.challenge1.completed"
                >mdi-check</v-icon
              >
              Challenge 1
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              text
              color="white"
              :disabled="!$auth.user.challenges.challenge1.completed"
              to="/challenge2"
            >
              <v-icon left v-if="currentChallenge == 1">mdi-puzzle</v-icon>
              <v-icon left v-else-if="$auth.user.challenges.challenge2.completed"
                >mdi-check</v-icon
              >
              <v-icon left v-else>mdi-close</v-icon>
              Challenge 2
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              text
              color="white"
              :disabled="!$auth.user.challenges.challenge2.completed"
              to="/challenge3"
            >
              <v-icon left v-if="currentChallenge == 2">mdi-puzzle</v-icon>
              <v-icon left v-else-if="$auth.user.challenges.challenge3.completed"
                >mdi-check</v-icon
              >
              <v-icon left v-else>mdi-close</v-icon>
              Challenge 3
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn text color="white" @click="dialog = true">
              <v-icon left>mdi-trophy</v-icon>
              Submit flag
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text color="white" to="/login">
              <v-icon left>mdi-exit-to-app</v-icon>
              Logout ({{ $auth.user.username }})
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-dialog v-model="dialog" max-width="800">
      <submit-flag-dialog :close="close"></submit-flag-dialog>
    </v-dialog>
  </div>
</template>

<script>
export default {
  // layout: "auth",
  computed: {
    currentChallenge: function () {
      // progress contains 3 booleans, the sum of these is the current progress. Values: 0,1,2,3
      return Object.keys(this.$auth.user.challenges).reduce(
        (acc, challenge) => {
          return acc + this.$auth.user.challenges[challenge].completed;
        },
        0
      );
    },
  },
  data: function () {
    return {
      dialog: false,
    };
  },
  methods: {
    async close() {
      this.dialog = false;
    },
  },
};
</script>