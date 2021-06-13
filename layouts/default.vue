<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <v-app>
      <nav-bar-vuetify></nav-bar-vuetify>
      <v-main class="grey lighten-3">
        <img
          class="mt-5"
          id="logo"
          alt="SNOWStorm"
          src="~/assets/snowstorm_transparent.png"
          height="100"
          style="display: block; margin-left: auto; margin-right: auto;"
        />
        <Nuxt />
      </v-main>
    <contact-footer></contact-footer>
    </v-app>
  </div>
</template>

<style>
/* body {
  background-color: #00a2ff;
} */

/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
} */

/* *,
*::before, */
/* *::after {
  box-sizing: border-box;
  margin: 0;
} */
</style>
