<template>
  <div class="hello">
    <el-dialog center title="欢迎机器人" width="966px" :visible.sync="holloPop">
      <el-form :model="faqFrom">
        <el-form-item label="">
          <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入内容"
            v-model="input"
            :maxlength="512"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addHello()">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Store from '../../store';
// import MainRobotItem from './main-robot-item.vue';
export default {
  // components: { MainRobotItem },
  mounted() {
    // this.getHello();
    // this.addHello();
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,

      input: '',
      holloPop: false,
    };
  },
  methods: {
    up() {
      this.holloPop = true;
      this.getHello();
    },
    // 获取问候语
    async getHello() {
      console.log(this.actRobot);
      let { data: res } = await this.$http.get(
        `/getCache?key=${this.store.wallet}_welcome`
      );

      if (res.code != 200) {
        if (res.code == 404) {
          return (this.input = '暂无欢迎语');
        } else {
          return this.$tips.err(res.message);
        }
      }
      this.input = res.data;
    },
    // 修改问候语句
    async addHello() {
      let { data: res } = await this.$http.get(
        `/addCache?key=${this.store.wallet}_welcome&value=${this.input}`
      );
      if (res.code != 200) {
        return this.$tips.err(res.message);
      }
      this.holloPop = false;
      this.$tips.suc('修改成功');
    },
  },
};
</script>

<style lang="less" scoped>
.hello {
  /deep/.el-textarea__inner {
    background: #ffffff;
    border: none;
  }
  .ft {
    text-align: right;
    color: #5b99ff;
    .del {
      color: #eb2f96;
      margin-left: 20px;
    }
  }
  /deep/.el-dialog {
    border-radius: 10px;
    .el-textarea__inner {
      border: 1px solid #f1f1f1;
    }
  }
}
</style>
