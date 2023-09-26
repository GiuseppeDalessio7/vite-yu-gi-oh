<script >
import axios from "axios"
import Background from "../src/components/Background.vue"


export default {
  name: "App",
  components: {
    Background,


  },
  data() {
    return {
      base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0",
      archetype: null,

    }
  },
  created() {
    axios.get(this.base_url)
      .then(response => {
        console.log(response.data);
      })
  }
}



</script>

<template>
  <div class="d-flex align-items-center p-2">
    <img src="../src/assets/img/logo.jpg" alt="">
    <h1 class="m-2">Yu-Gi-Oh Api</h1>
  </div>
  <Background></Background>
</template>

<style scoped>
img {
  width: 70px;
  height: 30px;
}
</style>
