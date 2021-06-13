<template>
  <v-card class="mb-n6 text-center mt-2" :min-width="minWidth">
    <v-system-bar color="blue lighten-3">
      <v-spacer /><span class="black--text">Reponse URL</span><v-spacer />
    </v-system-bar>
    <!-- <v-card-text class="mt-8n"> -->
      <span><pre style="font-size: 12px"> {{ shouldTrim ? trimmedURL : url }} </pre></span>
    <!-- </v-card-text> -->
  </v-card>
</template>

<script>
export default {
  props: ["url", "shouldTrim" ,"minWidth"],
  computed: {
    trimmedURL: function () {
      return this.url.replace(/http.+?\.com/, "");
    },
  },
};
</script>

<style>
</style>