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
  </div>
</template>

<script>
export default {
  data() {
    return {
      emoji: ["1f60e", "1f600", "1f620", "1f629"],
    };
  },
};
</script>

<style></style>
