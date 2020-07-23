<template>
  <div id="element-layout">
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-main>Main</el-main>
      <el-footer height="100px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#element-layout {
  display: flex;
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: 0;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  flex: 1;
  color: #ffffff;
  font-size: 30px;
}
</style>