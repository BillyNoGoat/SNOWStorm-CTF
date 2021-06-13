<template>
  <div id="description">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" justify="center" class="grey lighten-3 text-center">
          <v-sheet class="grey lighten-3" rounded="lg">
            <h1>Welcome to SNOWStorm!</h1>
            <span
              >SNOWStorm is a <b>CTF</b> designed to help you learn and practice
              safe security practices within ServiceNow. <br />
              The aim of SNOWStorm is to help teach developers to think carefully about user
              input, context and integrating with third parties.</span
            >
            <br />
            <br />
            <h3>What is SNOWStorm?</h3>
            <span>
              SNOWStorm is an application built to emulate a company's online
              portal.
              <br />
              SNOWStorm makes requests to a back-end server which then makes
              requests to the ServiceNow instance to feed back to SNOWStorm.<br />
              To help guide you on building your exploit, sections highlighted
              in <span style="color: #90caf9">blue</span> will show you data
              about the request that the back-end made to the ServiceNow
              instance.
            </span>
            <br /><br />
            <h3>What is a CTF?</h3>
            <span>
              CTF stands for <b>Capture The Flag</b>, a style of hacking event
              where your goal is to find flags hidden within an application by
              finding and exploiting flaws.<br />
              The <b>Challenge brief</b> on each challenge page will tell you
              where the flag is located, and then it is up to you to find a way
              to exploit the way the application works to get your flag.<br />
              Flags will always be in the following format:
              <b>##FLAG:27239483-b4ed-499a-9ea6-e7f4046d9fcb##</b>. For more
              information about flags, click the <b>Submit Flag</b> link in the
              top right. <br />
              Please ensure you read the <b>Challenge brief</b> on each
              challenge page so you can understand what each challenge requires. </span
            ><br /><br />
            <h3>Before you start</h3>
            <span>
              • You do <b>not</b> need any tools to solve the challenges.<br />
              • You do not need any prior hacking/security experience to complete the challenges. Your knowledge of ServiceNow is enough.<br />
              • You don't need to guess anything.<br />
              • Outbound email is enabled on the ServiceNow instance. <br />
              • To progress to the next challenge, the previous challenge must be completed <br />
            </span><br />
            <h3>Getting started</h3>
            Click <b>Challenge 1</b> at the top to get started on your first
            challenge!<br />
            Good luck!
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "auth",
  middleware: ["auth"],
};
</script>

<style scoped>
#description {
  color: rgb(44 62 80);
}
</style>