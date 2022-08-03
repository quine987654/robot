<template>
  <div class="helloBox">
    <div class="hello" v-if="hello != ''">
      <!-- <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入定时发送内容"
      v-model="faqFrom.input"
    >
    </el-input> -->
      <div class="div">
        {{ hello }}
      </div>

      <div class="ft">
        <span @click="faqPop = true">编辑</span>
        <!-- <span class="del">删除</span> -->
      </div>
    </div>

    <div class="add" v-else @click="faqPop = true">添加定时发送语</div>

    <el-dialog
      @close="getHello()"
      center
      title="定时群发机器人"
      width="796px"
      :visible.sync="faqPop"
    >
      <el-form :model="faqFrom">
        <el-form-item label="定时" :label-width="formLabelWidth">
          <el-select v-model="faqFrom.time" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
            v-model="faqFrom.input"
            maxlength="512"
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

      // 添加弹窗
      hello: '',
      input: '',
      formLabelWidth: '60px',
      faqPop: false,
      faqFrom: {
        time: '',
        input: '',
      },
      options: [
        {
          value: 30,
          label: '30M',
        },
        {
          value: 60,
          label: '1H',
        },
        {
          value: 120,
          label: '2H',
        },
        {
          value: 240,
          label: '4H',
        },
        {
          value: 480,
          label: '8H',
        },
        {
          value: 720,
          label: '12H',
        },
        {
          value: 1440,
          label: '24H',
        },
      ],
    };
  },
  methods: {
    // 获取定时语句
    async getHello() {
      let { data: res } = await this.$http.get(
        `/user/getCron/${this.store.wallet}`
      );

      if (res.code != 200) {
        return this.$tips.war(res.msg);
      }
      this.faqFrom.time = res.data.sleep_time;
      this.faqFrom.input = res.data.content_text;
      this.hello = res.data.content_text;
    },
    // 修改定时语句
    async addHello() {
      let { data: res } = await this.$http.post(
        `/user/addCron/${this.store.wallet}`,
        {
          contentText: this.faqFrom.input,
          sleepTime: this.faqFrom.time,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.msg);
      }
      this.faqPop = false;
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
    min-height: 100px;
  }
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
}
/deep/.el-dialog {
  border-radius: 10px;
  .el-select {
    border: none;
    width: 100%;
    .el-input {
      border: none;
      .el-input__inner {
        border: none;
        border-bottom: 1px solid #f0f0f0;
      }
    }
  }
  .el-textarea__inner {
    border: 1px solid #eee;
  }
}
/deep/.el-textarea__inner {
  border: 1px solid #eee;
}
.add {
  /* 矩形 7 */
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 80px;
  color: #5b99ff;
  line-height: 51px;
  text-align: center;
  border-radius: 10px;
  background: #e3f2fd;
}
</style>
