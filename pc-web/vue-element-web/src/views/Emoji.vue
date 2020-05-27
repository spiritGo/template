<template>
  <div class="p-20">
    <el-table :data="emoji" border stripe class="mt-20">
      <el-table-column
        type="index"
        label="索引"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column
        prop="0"
        label="实例"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column label="高清" width="80px" align="center">
        <template slot-scope="scope">
          <span :class="`emoji emoji${scope.row[1][2]}`"></span>
        </template>
      </el-table-column>
      <el-table-column label="unified_unicode" width="140px">
        <template slot-scope="scope">
          <span>{{ scope.row[1][0] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="title" width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row[1][1] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="classname" width="100px">
        <template slot-scope="scope">
          <span>{{ scope.row[1][2] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="DoCoMo">
        <template slot-scope="scope">
          <span>{{ scope.row[1][3] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="KDDI">
        <template slot-scope="scope">
          <span>{{ scope.row[1][4] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Softbank">
        <template slot-scope="scope">
          <span>{{ scope.row[1][5] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Google">
        <template slot-scope="scope">
          <span>{{ scope.row[1][6] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            :data-name="scope.row[1][2]"
            @click="handleCopy"
            >复制类名</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="currentChange"
      layout="total, sizes, prev, pager, next"
      :total="this.data.length"
      background
      class="mt-20 text-end"
    >
    </el-pagination>
  </div>
</template>

<script>
import emoji from "../../emoji/emoji";
export default {
  data() {
    return { emoji: [], data: [] };
  },

  created() {
    this.showEmoji();
    console.log(this.data);
  },

  methods: {
    currentChange(cur) {
      this.emoji = this.data.slice(10 * cur - 10, 10 * cur);
    },

    handleCopy(e) {
      let input = document.createElement("input");
      input.value = e.currentTarget.dataset.name;
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      this.$message.success("复制成功 " + e.currentTarget.dataset.name);
    },

    showEmoji() {
      let count = 0;
      for (let key in emoji.EMOJI_MAP) {
        let temp = [];
        temp.push(key);
        temp.push(emoji.EMOJI_MAP[key]);
        this.data.push(temp);
      }
      this.emoji = this.data.slice(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep.el-table__row {
  height: 65px !important;
  box-sizing: border-box;
}
</style>
