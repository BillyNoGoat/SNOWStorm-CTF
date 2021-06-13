<template>
  <div>
    <v-btn @click="show = !show" plain>
      <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      Show challenge brief
    </v-btn>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-if="challengeNum == 1">
          • You are an employee of <b>Little Company Inc</b> and this is your
          online portal to view your tickets.
          <br />
          • This portal will make a request to the SNOW instance's incident
          table and return the data to the the user on this portal.
          <br />
          • In the instance, there is a <b>secret ticket</b> belonging a
          different company on the incident table containing the challenge flag.
          <br />
          • Find a way to abuse the functionality on this page to retrieve this
          flag and submit it by clicking "Submit flag".
          <br />
          • For more information about flags, see the Submit Flag page on the
          top right of the page.
          <br />
          • Good luck!
        </v-card-text>
        <v-card-text v-if="challengeNum == 2">
          • For this challenge, your goal again is to find the
          <b>secret ticket</b> belonging to a different company on the incident
          table.
          <br />
          • This time, your previous method has been DISABLED, so you will need
          to find a new way to retrieve this secret ticket.
          <br />
          • Good luck!
        </v-card-text>
        <v-card-text v-if="challengeNum == 3">
          • For this challenge, your goal is to
          <b>Gain access to a ServiceNow admin account</b>
          <br />
          • I recommend you note the account details down for easy access.
          <br />
          • This challenge includes functionality to write data to ServiceNow,
          please be responsible and kind to others completing challenges and do
          not write any data which might impact others.
          <br />
          • Upon logging in to the account in the instance, you will be
          redirected to a page with the <b>flag</b> required to complete this
          challenge.
          <br />
          <v-divider></v-divider><br />
          The account you must gain access to has a user_id of
          <b>{{ accDetails.user_id }}</b> and a sys_id of
          <b>{{ accDetails.sys_id }}</b>.
          <br />
          The instance you must gain access to is <a :href="accDetails.instance"><b>{{ accDetails.instance }}</b></a>
          <br />
          • Good luck!
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props: ["challengeNum"],
  mounted: function () {
    if (this.challengeNum == 3) this.getAccDetails();
  },
  data: function () {
    return {
      show: false,
      accDetails: {},
    };
  },
  methods: {
    async getAccDetails() {
      const res = await this.$axios.$get(`/accdetails`);
      this.accDetails = res;
    },
  },
};
</script>

<style></style>