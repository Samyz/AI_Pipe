<template>
  <div>
    <span class="bg"></span>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/background.svg") no-repeat center center;
  background-size: cover;
  transform: scale(1);
  z-index: 0;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>

