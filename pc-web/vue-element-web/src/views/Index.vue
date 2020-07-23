<template>
  <div id="index">
    <div class="button-wrapper">
      <el-button type="primary" @click="component = 'simple-layout'">SimpleLayout</el-button>
      <el-button type="primary" @click="component = 'element-layout'">ElementLayout</el-button>
      <el-button type="primary" @click="component = 'flex-layout'">FlexLayout</el-button>
    </div>
    <component :is="component"></component>
  </div>
</template>

<script>
export default {
  components: {
    'simple-layout': () => import('../components/SimpleLayout'),
    'element-layout': () => import('../components/ElementLayout'),
    'flex-layout': () => import('../components/FlexLayout')
  },
  data() {
    return {
      component: 'simple-layout'
    }
  },
}
</script>

<style scoped>
#index {
  position: relative;
  height: 100%;
  box-sizing: border-box;
}

.button-wrapper {
  height: 100px;
  line-height: 100px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>