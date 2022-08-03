<template>
  <div class="helloBox">
    <div class="hello" v-if="hello != ''">
      <!-- <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入问候语"
      v-model="input"
    >
    </el-input> -->
      <div class="div">
        {{ hello }}
      </div>
      <div class="ft">
        <span @click="holloPop = true">编辑</span>
        <!-- <span class="del" @click="deleteHello()">删除</span> -->
      </div>
    </div>

    <div class="add" v-else @click="holloPop = true">添加欢迎语</div>
    <el-dialog
      @close="getHello()"
      center
      title="欢迎机器人"
      width="966px"
      :visible.sync="holloPop"
    >
      <el-form>
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
    this.getHello();
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,

      hello: '',
      input: '',

      holloPop: false,
    };
  },
  methods: {
    // 获取问候语
    async getHello() {
      let { data: res } = await this.$http.get(
        `/user/getWelcome/${this.store.wallet}`
      );

      if (res.code != 200) {
        return;
        // return this.$tips.war(res.msg);
      }
      this.hello = res.data.content_text;
    },
    // 修改问候语句
    async addHello() {
      let { data: res } = await this.$http.post(
        `/user/addWelcome/${this.store.wallet}`,
        {
          contentText: this.input,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.message);
      }
      this.holloPop = false;
      this.$tips.suc('操作成功');
      this.getHello();
    },
  },
};
</script>

<style lang="less" scoped>
.hello {
  // margin-top: 20px;
  // width: 1034px;
  border-radius: 10px;
  background: #ffffff;
  padding: 30px;
  box-sizing: border-box;
  .div {
    height: 150px;
  }
  .ft {
    text-align: right;
    color: #5b99ff;
    .del {
      color: #eb2f96;
      margin-left: 20px;
    }
  }
}
/deep/.el-dialog {
  border-radius: 10px;
  .el-textarea__inner {
    border: 1px solid #eee;
  }
}
.add {
  /* 矩形 7 */
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  color: #5b99ff;
  line-height: 51px;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  height: 80px;
  background: #e3f2fd;
}
</style>
