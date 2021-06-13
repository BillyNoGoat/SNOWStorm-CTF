<template>
  <div>
    <v-card>
      <v-app-bar flat color="red">
        <img
          id="logo"
          alt="SNOWStorm"
          src="~/static/cropped-icon-transparent-storm-only.png"
          height="60"
        />
        <v-spacer></v-spacer>
        <v-toolbar-title class="title white--text">
          Edit {{ ticketData.number }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="grey lighten-2" icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6"> Field </v-col>
            <v-col cols="6"> Value </v-col>
            <v-col cols="6">
              <v-text-field
                dense
                value="impact"
                @input="updateKey($event, 0)"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                dense
                :value="ticketData.impact"
                @input="updateValue($event, 0)"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                dense
                value="priority"
                @input="updateKey($event, 1)"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                dense
                :value="ticketData.priority"
                @input="updateValue($event, 1)"
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="6">
              <v-text-field
                dense
                value="risk"
                @input="updateKey($event, 2)"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                dense
                :value="ticketData.risk"
                @input="updateValue($event, 2)"
              ></v-text-field>
            </v-col> -->
            <v-col cols="12">
              <v-text-field
                dense
                label="Sys ID"
                :value="sys_id"
                @input="updateSysID"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        
        <p v-if="error" style="font-size: 12px" class="text-center red--text">
          <v-icon small color="red"> mdi-alert-box </v-icon>
          {{error}}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="close"> Close </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="updateRecord"
          :loading="loading"
        >
          <v-icon right>mdi-upload</v-icon>
          Update
        </v-btn>
      </v-card-actions>
      <v-expand-transition> </v-expand-transition>
    </v-card>
  </div>
</template>  

<script>
export default {
  props: ["ticketData"],
  created: function () {
    this.values[0] = { key: "impact", value: this.ticketData.impact };
    this.values[1] = { key: "priority", value: this.ticketData.priority };
    // this.values[2] = { key: "risk", value: this.ticketData.risk };
    this.sys_id = this.ticketData.sys_id;
  },
  data: function () {
    return {
      dialog: false,
      responseDialogue: false,
      values: [{}, {}, {}],
      sys_id: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    async close() {
      this.$emit("close");
      // this.dialog = false;
    },
    updateKey(value, index) {
      this.values[index].key = value;
    },
    updateValue(value, index) {
      this.values[index].value = value;
    },
    updateSysID(value) {
      this.sys_id = value;
    },
    getBody() {
      return this.values.reduce((acc, p) => {
        acc[p.key] = p.value;
        return acc;
      }, {});
    },
    async updateRecord() {
      this.loading = true;
      this.$emit("loading-data");
      try {
        const body = this.getBody();
        const res = await this.$axios.$put(
          `/challenge/3/updatechange/vue`,
          body,
          { params: { sys_id: this.sys_id } }
        );
        this.loading = false;
        this.error = res.error ? res.error : null; // Set error if exists, if not, set to null
        // this.ticketData = res.data;
        console.log(res);

        // this.loading = false;
        // this.url = res.url;
        // this.tickets = res.data;
        // this.$emit("tickets-loaded", res);
        this.$emit("response", res);
        // if(!this.error) this.$emit("response", res);
      } catch (e) {
        console.log(e);
        this.loading = false;
        this.error = e.error;
      }
    },
  },
};
</script>

<style scoped>
</style>