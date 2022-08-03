<template>
  <div class="faq">
    <div class="list">
      <div class="item" v-for="(item, index) in faqList" :key="index">
        <div class="num">{{ item.fields.serial_number }}</div>
        <div class="box">
          <div class="f">{{ item.fields.question }}</div>
          <div class="q">{{ item.fields.answer }}</div>
          <!-- <div class="q"><input type="text" v-model="item[1]" /></div> -->
          <div class="ft">
            <span @click="upUPdated(item)">修改</span>
            <span class="del" @click="upDel(item)">删除</span>
          </div>
        </div>
      </div>
      <div v-if="faqList.lenght == 0">暂无</div>
    </div>
    <div class="add" @click="faqPop = true">添加问题</div>
    <el-dialog
      @close="clearFrom()"
      center
      :title="upOrAdd ? '添加问题' : '修改问题'"
      width="632.95px"
      :visible.sync="faqPop"
    >
      <el-form :model="faqFrom">
        <el-form-item label="编号:" :label-width="'70px'">
          <el-input
            type="number"
            v-model="faqFrom.index"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="问题:" :label-width="'70px'">
          <el-input v-model="faqFrom.f" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案:" :label-width="'70px'">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="faqFrom.q"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="upOrAdd" type="primary" @click="addFaq()"
          >添加问题</el-button
        >
        <el-button v-else type="primary" @click="updateFaq()"
          >修改问题</el-button
        >
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
    this.getFaqList();
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,
      faqList: [],
      // 添加弹窗
      faqPop: false,
      // true 代表默认为添加
      upOrAdd: true,
      faqFrom: {
        id: '',
        index: '',
        f: '',
        q: '',
      },
    };
  },
  methods: {
    // 获取问答列表
    async getFaqList() {
      this.faqList = [];
      let { data: res } = await this.$http.get(
        `/user/getAnswer/${this.store.wallet}`
      );
      if (res.code != 200) {
        return this.$tips.war(res.msg);
      }
      this.faqList = JSON.parse(res.data);
    },
    // 添加问答
    async addFaq() {
      let a = /^[0-9]*$/.test(this.faqFrom.index);
      if (!a) {
        return this.$tips.war('编号请输入纯数字');
      }
      if (this.faqFrom.index.length > 6) {
        return this.$tips.war('编号过长,最长不超过 6 位');
      }
      if (this.faqFrom.index == '') {
        return this.$tips.war('请输入问题编号');
      }
      if (this.faqFrom.f == '') {
        return this.$tips.war('请输入问题');
      }
      if (this.faqFrom.q == '') {
        return this.$tips.war('请输入答案');
      }
      let { data: res } = await this.$http.post(
        `/user/addAnswer/${this.store.wallet}`,
        {
          question: this.faqFrom.f,
          answer: this.faqFrom.q,
          serialNumber: this.faqFrom.index,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.msg);
      }
      this.$tips.suc('添加成功');
      this.faqPop = false;
      this.getFaqList();
    },
    // 修改
    async updateFaq() {
      let a = /^[0-9]*$/.test(this.faqFrom.index);
      if (!a) {
        return this.$tips.war('请输入纯数字');
      }
      if (this.faqFrom.index == '') {
        return this.$tips.war('请输入问题编号');
      }
      if (this.faqFrom.f == '') {
        return this.$tips.war('请输入问题');
      }
      if (this.faqFrom.q == '') {
        return this.$tips.war('请输入答案');
      }
      let { data: res } = await this.$http.post(
        `/user/updateAnswer/${this.store.wallet}`,
        {
          question: this.faqFrom.f,
          answer: this.faqFrom.q,
          serialNumber: this.faqFrom.index,
          answerId: this.faqFrom.id,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.msg);
      }
      this.$tips.suc('修改成功');
      this.faqPop = false;
      this.getFaqList();
    },
    // 打开删除确认
    upDel(item) {
      this.$confirm('此操作将删除该问答, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.deleteFaq(item);
        })
        .catch(() => {
          this.$tips.err('已取消');
        });
    },
    // 删除
    async deleteFaq(item) {
      let { data: res } = await this.$http.post(
        `/user/deleteAnswer/${this.store.wallet}`,
        {
          answerId: item.pk,
        }
      );
      if (res.code != 200) {
        return this.$tips.err(res.msg);
      }
      this.$tips.suc('删除成功');
      this.getFaqList();
    },
    // 打开修改
    upUPdated(item) {
      this.faqPop = true;
      this.upOrAdd = false;

      this.faqFrom.id = item.pk;
      this.faqFrom.index = item.fields.serial_number;
      this.faqFrom.f = item.fields.question;
      this.faqFrom.q = item.fields.answer;
    },
    // 关闭清空数据
    clearFrom() {
      this.upOrAdd = true;
      this.faqFrom.index = '';
      this.faqFrom.f = '';
      this.faqFrom.q = '';
      // this.getFapNum();
      // this.getFaqList();
    },

    // 获取当前问题序号
    getFapNum() {
      if (this.faqList.length == 0) {
        this.faqFrom.index = 1;
        // return '1';
      } else {
        this.faqFrom.index = this.faqList[this.faqList.length - 1].id + 1;
        // return this.faqList[this.faqList.length - 1].id + 1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.faq {
  /* 矩形 7 */

  .item {
    // width: 1034px;
    // height: 118px;
    border-radius: 10px;
    background: #ffffff;
    margin-bottom: 22px;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    .num {
      width: 80px;
    }
    .box {
      flex: 1;
      .f {
        font-weight: bold;
      }
      .q {
        min-height: 60px;
        margin-top: 5px;
      }
      .ft {
        text-align: right;
        color: #5b99ff;
        .del {
          margin-left: 20px;
          color: #eb2f96;
        }
      }
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
    box-sizing: border-box;
    height: 80px;
    text-align: center;
    border-radius: 10px;
    background: #e3f2fd;
  }
  /deep/.el-form-item__label {
    text-align: center;
  }
  /deep/.el-input__inner {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #eee;
  }
  /deep/.el-textarea__inner {
    border: 1px solid #eee;
  }
  /deep/.el-button {
    /* 矩形 9 */

    width: 234.15px;
    height: 57.05px;
    // line-height: 57.05px;
    font-size: 16px;
    border-radius: 10px;
    background: #5b99ff;
  }
}
</style>
