<template>
  <div class="simple">
    <div class="header">Header</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.simple {
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: 0;
}

.header {
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  background-color: #555555;
}

.main {
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: 100px;
  background-color: #999999;
  text-align: center;
  font-size: 30px;
  color: #ffffff;
}

.main::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  background-color: #555555;
}
</style>