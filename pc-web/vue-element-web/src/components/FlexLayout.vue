<template>
  <div id="flex-layout">
    <div class="header">Header</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#flex-layout {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
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
  display: flex;
  align-items: center;
  background-color: #999999;
  justify-content: center;
  font-size: 30px;
  color: #ffffff;
  flex: 1;
}

.footer {
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  background-color: #555555;
}
</style>