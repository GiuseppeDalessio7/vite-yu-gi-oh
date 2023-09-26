<script >
import Button from "../src/components/Button.vue"


export default {
  components: {
    Button,


  },
  data() {
    return {



    }
  }
}

</script>

<template>
  <div class="d-flex align-items-center p-2">
    <img src="../src/assets/img/logo.jpg" alt="">
    <h1 class="m-2">Yu-Gi-Oh Api</h1>
  </div>
  <Button></Button>
</template>

<style scoped>
img {
  width: 70px;
  height: 30px;
}
</style>
