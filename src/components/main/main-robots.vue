<template>
  <div class="robots">
    <main-robot-item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      @refresh="getTobot()"
    ></main-robot-item>
    <div class="add" @click="dialogFormVisible = true">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tianjia"></use>
      </svg>
      添加机器人
    </div>
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>

    <el-dialog
      @close="clear()"
      title="添加机器人"
      width="432px"
      :visible.sync="dialogFormVisible"
      center
    >
      <el-form :model="form">
        <!-- <el-form-item label="机器人名称" :label-width="formLabelWidth">
          <el-input v-model="form.botName" autocomplete="off"></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="机器人类型" :label-width="formLabelWidth">
          <el-select v-model="form.fn" placeholder="请选择机器人">
            <el-option label="欢迎机器人" value="welcome"></el-option>
            <el-option label="问答机器人" value="autoReply"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item :label-width="formLabelWidth">
          <el-checkbox
            v-model="form.welcome"
            label="欢迎机器人"
            :disabled="ifTobot(1)"
          ></el-checkbox>
          <br />
          <el-checkbox
            v-model="form.answer"
            label="问答机器人"
            :disabled="ifTobot(3)"
          ></el-checkbox>
          <br />
          <el-checkbox
            v-model="form.cron"
            label="定时发送机器人"
            :disabled="ifTobot(2)"
          ></el-checkbox>
          <br />
        </el-form-item>
        <el-form-item label="" class="more"> 期待更多 </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setTobot()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Store from '../../store';
import MainRobotItem from './main-robot-item.vue';
export default {
  components: { MainRobotItem },
  mounted() {
    this.getTobot();
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,
      // 添加弹窗
      dialogFormVisible: false,
      formLabelWidth: '50px',
      form: {
        account: '123456',
        // botName: '',
        fn: '',
        // botApi: '5563422849:AAGq1wT2gQDY8eZcB7fWx0DpntMpXgWCdco',
        welcome: 0,
        cron: 0,
        answer: 0,
      },
      list: [],
    };
  },
  methods: {
    down() {
      this.form.account = '';
      this.form.botName = '';
      this.form.fn = '';
      this.form.botApi = '';
      this.dialogFormVisible = false;
    },
    // 获取机器人列表
    async getTobot() {
      if (this.store.wallet == '') {
        return;
      }
      this.list = [];
      let { data: res } = await this.$http.get(
        `/user/botList/${this.store.wallet}`
      );
      this.list = JSON.parse(res.data);
      // console.log(this.list);
      this.store.robotList = JSON.parse(res.data);
    },

    // 申请机器人
    async setTobot() {
      if (this.store.wallet == '') {
        return this.$tips.war('请先链接钱包');
      }
      let { data: res } = await this.$http.post(
        `/user/apply/${this.store.wallet}`,
        {
          welcome: this.form.welcome,
          cron: this.form.cron,
          answer: this.form.answer,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.msg);
      }
      this.down();
      this.list = res;
      this.getTobot();
      return this.$tips.suc('添加成功');
    },
    async addTobot() {
      if (this.form.checkList.indexOf('welcome') >= 0) {
        this.setTobot('welcome');
      }
      if (this.form.checkList.indexOf('autoReply') >= 0) {
        this.setTobot('autoReply');
      }
      if (this.form.checkList.indexOf('loop') >= 0) {
        this.setTobot('loop');
      }
    },
    // 关闭时清除
    clear() {
      (this.form.welcome = 0), (this.form.cron = 0), (this.form.answer = 0);
    },
    // 如果有这种机器人就不让选择
    ifTobot(val) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].fields.bot_type == val) {
          return true;
        }
      }
      return false;
      // let a = JSON.stringify(this.list);
      // let index = a.indexOf(val);
      // if (index >= 0) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.robots {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .add {
    /* 矩形 7 */
    min-width: 370px;
    flex: 1;
    margin: 0 10px;

    height: 181.07px;
    border-radius: 10px;
    background: #e3f2fd;
    color: #666666;
    line-height: 181.07px;
    text-align: center;
    background-image: url('../../assets/images/addBg.png');
    background-size: 100% 100%;
    padding: 0 30px;
    margin: 0 10px;
    box-sizing: border-box;
    svg {
      margin-right: 20px;
    }
  }
  .div1,
  .div2,
  .div3 {
    min-width: 370px;
    flex: 1;
    margin: 0 10px;
    padding: 0 30px;
    height: 181.07px;
    box-sizing: border-box;
  }
  /deep/.el-dialog {
    .el-radio {
      line-height: 50px;
      font-size: 16px;
      height: 50px;
    }
    .el-input {
      margin-top: 20px;
    }
    .el-checkbox__label {
      font-size: 16px;
      margin-left: 30px;
    }
    .el-dialog__header {
      /* 添加机器人 */

      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0em;
      color: #333333;
    }
    .more {
      .el-form-item__content {
        padding-left: 105px;
        color: #5b99ff;
      }
    }
    .el-button {
      /* 矩形 9 */

      width: 234.15px;
      height: 57.05px;
      border-radius: 10px;
      background: #5b99ff;
    }
  }
}
@media screen and (max-width: 1500px) {
  .div1 {
    display: block;
  }
  .div2 {
    display: none;
  }
  .div3 {
    display: none;
  }
}
</style>
