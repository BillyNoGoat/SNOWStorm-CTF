<template>
  <div class="app">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="6" justify="center" class="grey lighten-3">
          <v-sheet class="grey lighten-3" rounded="lg">
            <challenge-description :challengeNum="challengeNum">
            </challenge-description>
            <challenge-brief :challengeNum="challengeNum"></challenge-brief>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="6"
          offset="3"
          style="max-width: 720px"
          justify="center"
          class="grey lighten-3"
        >
          <challenge-controls-get
            @tickets-loading="ticketsLoading"
            @tickets-loaded="renderTickets"
            :challengeNum="this.challengeNum"
          ></challenge-controls-get>
        </v-col>
        <v-col cols="3">
          <response-display
            :responseData="responseData"
            @trim-url="toggleURLTrimming"
            :shouldTrim="trimURL"
          ></response-display>
        </v-col>
      </v-row>

      <v-container class="mx-auto">
        <v-row justify="center">
          <response-endpoint-display
            v-if="responseData"
            :url="responseData.url"
            :shouldTrim="trimURL"
            minWidth="700px"
          ></response-endpoint-display>
        </v-row>
        <v-row justify="center">
          <v-col v-if="tickets && tickets.length == 0 && !loading && initialTicketLoad" cols="5">
            <v-card class="mx-auto mt-5 mb-n4" style="height: 100%">
              <v-system-bar color="red">
                <v-spacer></v-spacer>
                <span class="white--text">Results</span>
                <v-spacer></v-spacer>
              </v-system-bar>
              <v-card-title class="justify-center">
                No tickets found
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-row justify="center">
        <v-col cols="12" style="max-width: 750px">
          <v-container>
            <v-row dense>
              <v-col v-for="ticket in tickets" :key="ticket.sys_id" cols="6">
                <challenge-ticket
                  :ticketData="ticket"
                  style="height: 100%"
                  :color="ticket.flag ? 'green' : 'red'"
                  :flag="ticket.flag"
                  :editable="challengeNum == 3 ? true : false"
                  :challengeNum="challengeNum"
                  @response="updateSpecificTicket"
                >
                </challenge-ticket>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ChallengeBrief from "@/components/challenge/ChallengeBrief.vue";
import ChallengeControlsGet from "@/components/challenge/ChallengeControlsGet.vue";
import ChallengeDescription from "@/components/challenge/ChallengeDescription.vue";
import ChallengeTicket from "@/components/challenge/ChallengeTicket.vue";
import ResponseDisplay from "@/components/ResponseDisplay.vue";
import ResponseEndpointDisplay from "@/components/ResponseEndpointDisplay.vue";

export default {
  // middleware: ["challengeCheck"],
  components: {
    ChallengeDescription,
    ChallengeBrief,
    ChallengeControlsGet,
    ChallengeTicket,
    ResponseDisplay,
  },
  middleware: ["auth", "progress"],
  data: () => ({
    challengeNum: "2",
    responseData: null,
    tickets: [],
    loading: false,
    trimURL: true,
    initialTicketLoad: false, // Prevents "No tickets" being shown. This is set to true when the first req is made
  }),
  methods: {
    ticketsLoading: function () {
      this.tickets = [];
      this.responseData = null;
      this.loading = true;
    },
    renderTickets: function (res) {
      this.initialTicketLoad = true;
      this.loading = false;
      this.tickets = res.data;
      this.responseData = res;
    },
    toggleURLTrimming: function () {
      this.trimURL = !this.trimURL;
    },
    updateSpecificTicket: function (t) {
      if (!t.data) return;
      const updateIndex = this.tickets.indexOf(
        this.tickets.find((ticket) => ticket.sys_id == t.data.sys_id)
      );
      this.tickets[updateIndex] = t.data;
      this.$forceUpdate();
    },
  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.app {
  text-align: center;
  font-size: 16px;
  box-sizing: border-box;
}
</style>

