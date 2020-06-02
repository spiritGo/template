<template>
  <div class="p-20">
    <div class="flex align-center">
      <i
        class="emoji"
        :class="`emoji${item}`"
        v-for="(item, index) in emoji"
        :key="index"
      ></i>
    </div>
    <div contenteditable ref="contentbox">dfsdf 1f600</div>
  </div>
</template>

<script>
import { GetNationality } from "../api/api";
export default {
  data() {
    return {
      emoji: ["1f60e", "1f600", "1f620", "1f629"],
    };
  },

  mounted() {
    this.listen();
    this.loadData();
  },

  methods: {
    loadData() {
      GetNationality().then((res) => {
        console.log(res);
      });
    },

    listen() {
      this.$refs.contentbox.addEventListener("paste", (e) => {
        console.log(e.clipboardData.getData("text/html"));
      });
    },
  },
};
</script>

<style>
div[contenteditable] {
  width: 800px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
  margin-top: 20px;
  padding: 10px;
}
</style>
