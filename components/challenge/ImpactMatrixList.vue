<template>
  <v-card elevation="0">
    <v-subheader class="headline justify-center">{{
      disabled ? "DISABLED" : "Select Impact"
    }}</v-subheader>
    <v-divider></v-divider>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          ><v-btn small plain elevation="0" v-ripple="{ class: `red--text` }" @click="setImpact(1)" :disabled="disabled">
            <v-icon color="red" left>mdi-alert-box</v-icon>High</v-btn
          ><br />
          <v-btn small plain elevation="0" v-ripple="{ class: `orange--text` }" @click="setImpact(2)" :disabled="disabled">
            <v-icon color="orange" left>mdi-information</v-icon>Medium</v-btn
          ><br />
          <v-btn small plain elevation="0" v-ripple="{ class: `blue--text` }" @click="setImpact(3)" :disabled="disabled">
            <v-icon color="blue" left>mdi-information-outline</v-icon>Low</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["disabled"],
  methods: {
    setImpact: function (impact) {
      this.$emit("update-impact", impact);
    },
  },
};
</script>

<style></style>