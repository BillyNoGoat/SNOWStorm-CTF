<template>
  <div id="description">
    <h1>
      Welcome to the SNOWStorm ticket portal!
    </h1>
    <p>You are currently logged in as: <b>Little Company Inc</b></p>
  </div>
</template>

<script>
export default {
    props: ["challengeNum"]
}
</script>

<style scoped>
#description {
    color: rgb(44 62 80);
}
</style>