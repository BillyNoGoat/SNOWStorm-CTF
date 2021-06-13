<template>
  <v-dialog v-model="dialog" persistent max-width="500px" min-width="400px">
    <v-card>
      <v-app-bar color="red">
        <img
          id="logo"
          alt="SNOWStorm"
          src="~/static/cropped-icon-transparent-storm-only.png"
          height="60"
        />
        <v-toolbar-title class="title white--text pl-2">
          Login
        </v-toolbar-title>
      </v-app-bar>
      <v-card-text v-if="error" class="red--text mt-6">
        <b>{{ error }}</b>
      </v-card-text>

      <v-card-actions full-width>
        <v-container>
          <v-form>
            <v-text-field
              class="mx-2"
              label="Username"
              rows="1"
              v-model="userInfo.username"
              color="red"
              required
              @keyup.enter="login"
            ></v-text-field>
            <v-text-field
              class="mx-2"
              label="Password"
              rows="1"
              v-model="userInfo.password"
              color="red"
              required
              @keyup.enter="login"
              type="password"
            ></v-text-field>

            <v-btn
              :style="{ left: '50%', transform: 'translateX(-50%)' }"
              @click="login"
              color="red"
              class="white--text"
            >
              Log in
            </v-btn>
          </v-form>
        </v-container>
        <br /><br />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  layout: "unauth",
  beforeMount() {
    this.$auth.logout("local");
  },
  data: () => ({
    dialog: true,
    error: "",
    userInfo: {
      username: "",
      password: "",
    },
  }),
  methods: {
    async login(userInfo) {
      //userInfo is JSON username and password
      try {
        await this.$auth.loginWith("local", {
          data: this.userInfo,
        });
      } catch (e) {
        this.error = e.message;
      }
    },
    logout() {
      this.$auth.logout("local");
    },
  },
};
</script>