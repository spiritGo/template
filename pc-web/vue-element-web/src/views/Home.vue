<template>
  <div class="justify-start align-start p-20">
    <el-button type="primary" @click="$router.push('test')">Test</el-button>
    <el-button type="primary" @click="$router.push('time')">Time</el-button>
    <el-button type="primary" @click="$router.push('emoji')">Emoji</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      charStr: "",
    };
  },
};
</script>
