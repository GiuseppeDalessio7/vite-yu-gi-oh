<script >
import Background from "../src/components/Background.vue"


export default {
  name: "App",
  components: {
    Background,
  },
  data() {
    return {

    }
  },

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
