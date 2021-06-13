<template>
  <div>
    <v-card max-width="720px">
      <v-app-bar color="red">
      <img
          id="logo"
          alt="SNOWStorm"
          src="~/static/cropped-icon-transparent-storm-only.png"
          height="60"
        />
      <v-toolbar-title class="title white--text pl-2">
          Ticket filter options
        </v-toolbar-title>
      <v-spacer></v-spacer>
        
        
      </v-app-bar>

      <!-- <v-card-actions> -->
      <v-container>
        <v-row>
          <v-col>
            <impact-matrix-list
              @update-impact="updateImpact"
              :disabled="challengeNum == 2 || challengeNum == 3"
            ></impact-matrix-list>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="8">
            <v-form>
              <v-text-field
                class="mx-2 mt-6"
                label="Impact"
                rows="1"
                v-model="impact"
                dense
                color="red"
                required
                @keyup.enter="getTickets"
                :disabled="challengeNum == 2 || challengeNum == 3"
              ></v-text-field>
              <v-text-field
                class="mx-2"
                label="Limit"
                rows="1"
                dense
                v-model="limit"
                color="red"
                required
                @keyup.enter="getTickets"
                :disabled="challengeNum == 3"
              ></v-text-field>

              <!-- <v-row justify="center" align="center"> -->
              <v-btn
                color="red"
                class="white--text"
                @click="getTickets"
                :loading="loading"
              >
                Get {{ limit }} tickets
              </v-btn>
              <v-card-text v-if="error" class="red--text mb-n3">
                <v-icon color="red"> mdi-alert-box </v-icon>
                <b>ERROR: {{ error }}</b>
              </v-card-text>
              <!-- <p
                v-if="error"
                style="font-size: 12px"
                class="text-center red--text"
              >
                <v-icon small color="red"> mdi-alert-box </v-icon>
                {{ error }}
              </p> -->

              <!-- </v-row> -->
            </v-form>
          </v-col>
        </v-row>
      </v-container>
      <!-- </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["challengeNum"],
  data: () => ({
    error: "",
    impact: "1",
    limit: "15",
    loading: false,
  }),
  methods: {
    async getTickets() {
      this.$emit("tickets-loading");
      this.loading = true;
      this.error = "";
      //   this.tickets = [];
      try {
        const params = { impact: this.impact, limit: this.limit };
        const res = await this.$axios.$get(
          `/challenge/${this.challengeNum}/gettickets/vue`,
          { params }
        );
        console.log(res);

        this.loading = false;
        this.url = res.url;
        this.tickets = res.data;
        if (res.error) this.error = res.error;
        this.$emit("tickets-loaded", res);
      } catch (e) {
        this.error = e.message;
      }
    },
    updateImpact(impact) {
      this.impact = impact;
    },
    updateLimit(limit) {
      this.limit = limit;
    },
    checkForFlag(str) {
      return /##FLAG:[^#]+##/.test(str);
    },
  },
};
</script>