<template>
  <div class="flex-column justify-start align-start p-20">
    <button class="btn success">{{time}}</button>
    <button class="btn success mt-20">{{time2}}</button>
    <button class="btn success mt-20">{{time3}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import datetime from "../utils/datetime";
export default {
  name: "Home",
  data() {
    return {
      time: "",
      time2: "",
      time3: ""
    };
  },
  created() {
    setInterval(() => {
      this.time = datetime.format(new Date(), "yyyy年MM月dd日 HH时mm分ss秒");
      this.time2 = datetime.format(new Date(), "yyyy年 (ಥ_ಥ)  HH 时 ss 秒");
      this.time3 = datetime.format(new Date(), "yyyy年 (ಥ_ಥ)  HH 时 ss 秒 sb sss MMs");
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px;
}
</style>
