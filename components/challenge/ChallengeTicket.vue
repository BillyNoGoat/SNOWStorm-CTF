<template>
  <div>
    <v-card class="mx-auto mt-5" style="height: 100%" v-if="ticketData">
      <v-system-bar :color="color">
        <span class="white--text"
          >Number: <b>{{ ticketData.number }}</b></span
        >
        <v-spacer></v-spacer>
        <span v-if="challengeNum != 3" class="white--text"
          >Impact: <b>{{ ticketData.impact }}</b></span
        >
      </v-system-bar>
      <v-card-title class="justify-center">{{
        ticketData.short_description
      }}</v-card-title>
      <v-card-subtitle>
        {{ ticketData.description }} <b v-if="flag">{{ flag }}</b>
      </v-card-subtitle>

      <v-card-text class="mt-n3" v-if="challengeNum == 3">
        Impact: <b>{{ ticketData.impact }}</b> <br />
        <!-- Risk: <b>{{ ticketData.risk }}</b><br /> -->
        Priority: <b>{{ ticketData.priority }}</b>
      </v-card-text>

      <div id="edit" v-if="editable">
        <v-btn
          class="mb-3 mt-n3"
          color="red"
          x-small
          plain
          outlined
          @click="dialog = true"
          ><v-icon left small>mdi-pencil</v-icon>Update ticket</v-btn
        >
      </div>
      <v-divider></v-divider>
      <v-list-item-subtitle class="mb-n5">
        Sys ID: {{ ticketData.sys_id }}
      </v-list-item-subtitle>
    </v-card>
    <v-dialog v-model="dialog" height="100%" overlay-opacity="0.6">
      <v-card flat color="rgb(0, 0, 0, 0)">
        <v-container>
          <v-row justify="center">
            <v-col cols="3" offset="3">
              <edit-ticket-dialog
                :ticketData="ticketData"
                @close="dialog = false"
                @response="handleResponse"
                @loading-data="loadingData"
              ></edit-ticket-dialog>
            </v-col>
            <v-col cols="3">
              <response-display
                v-if="responseData"
                :responseData="responseData"
                @trim-url="toggleURLTrimming"
                :shouldTrim="trimURL"
              ></response-display>
            </v-col>
          </v-row>
          <v-row style="mx-auto">
            <v-col >
              <v-container class="mx-auto">
                <v-row justify="center">
                  <response-endpoint-display
                    v-if="responseData && responseData.url"
                    :url="responseData.url"
                    :shouldTrim="trimURL"
                    minWidth="300px"
                  ></response-endpoint-display>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import EditTicketDialog from "./EditTicketDialog.vue";
import ResponseEndpointDisplay from "../ResponseEndpointDisplay.vue";

export default {
  components: { EditTicketDialog },
  props: ["ticketData", "color", "flag", "editable", "challengeNum"],
  data: function () {
    return {
      trimURL: false,
      dialog: false,
      responseData: null,
    };
  },
  methods: {
    toggleURLTrimming: function () {
      this.trimURL = !this.trimURL;
    },
    handleResponse: function (res) {
      this.responseData = {
        status: res.status,
        method: res.method,
        body: res.body,
        url: res.url,
      };
      this.$emit("response", res);
      // this.ticketData = res.data;
    },
    loadingData: function () {
      this.responseData = null;
    },
  },
};
</script>

<style>
.v-dialog__content .v-dialog {
  box-shadow: none;
}
</style>