<template>
  <!-- 侧边导航 -->
  <div class="robot">
    <!-- <div class="avatar">图片</div> -->
    <img
      class="avatar"
      v-if="item.fields.bot_type == 1"
      src="../../assets/images/avatar1.png"
      alt=""
    />
    <img
      class="avatar"
      v-if="item.fields.bot_type == 3"
      src="../../assets/images/avatar2.png"
      alt=""
    />
    <img
      class="avatar"
      v-if="item.fields.bot_type == 2"
      src="../../assets/images/avatar3.png"
      alt=""
    />
    <div class="box">
      <div class="name" v-if="item.fields.bot_type == 1">欢迎机器人</div>
      <div class="name" v-if="item.fields.bot_type == 2">定时发送机器人</div>
      <div class="name" v-if="item.fields.bot_type == 3">智能问答机器人</div>
      <div class="id">
        {{ item.fields.name }}

        <svg
          aria-hidden="true"
          class="icon hash"
          @click="doCopy()"
          :data-clipboard-text="item.fields.name"
        >
          <use xlink:href="#icon-fuzhi1"></use>
        </svg>
      </div>
      <div class="ft">
        <div class="sw">
          <span v-if="value">开启</span>
          <span v-else class="del">关闭</span>
          <el-switch
            @change="changeSw()"
            v-model="value"
            active-color="#5B99FF"
            inactive-color="#999"
          >
          </el-switch>
        </div>
        <div class="cz">
          <!-- <span @click="upupdade()">编辑</span> 
          <span class="del" @click="upDel()">删除</span> -->
        </div>
      </div>
    </div>
    <!-- <pop-uplode-hello ref="aaa"></pop-uplode-hello> -->
  </div>
</template>

<script>
import Store from '../../store';
// import PopUplodeHello from './pop-uplode-hello.vue';
import Clipboard from 'clipboard';
export default {
  // components: { PopUplodeHello },

  mounted() {
    this.value = this.item.fields.status ? true : false;
  },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,
      value: false,
      it: {
        fields: {
          api_key: '5461942161:AAGdTLd7m8ipw4gY5DZMuLs1Ha5nKjKgJIc',
          bot_type: 1,
          name: 'Poly0001_bot',
          status: 0,
          user: 1,
        },
        model: 'user.bot',
        pk: 3,
      },
    };
  },
  methods: {
    changeSw() {
      if (this.value) {
        this.upRobot(this.item);
      } else {
        this.downRobot(this.item);
      }
    },
    // 打开机器人
    async upRobot(item) {
      let { data: res } = await this.$http.post(
        `/user/startBot/${this.store.wallet}`,
        {
          botId: item.pk,
        }
      );
      if (res.code != 200) {
        this.value = false;
        return this.$tips.err(res.msg);
      }
      // this.$emit('refresh');
      this.$tips.suc('启动成功');
      // console.log(res);
    },
    // 关闭机器人
    async downRobot(item) {
      let { data: res } = await this.$http.post(
        `/user/stopBot/${this.store.wallet}`,
        {
          botId: item.pk,
        }
      );
      if (res.code != 200) {
        this.value = true;
        return this.$tips.err(res.msg);
      }
      // this.$emit('refresh');
      this.$tips.suc('关闭成功');
      // console.log(res);
    },
    // 打开删除确认
    upDel() {
      this.$confirm('此操作将删除该机器人, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.delete();
        })
        .catch(() => {
          this.$tips.err('已取消');
        });
    },
    // 删除
    async delete() {
      let { data: res } = await this.$http.get(
        `/deleteTB?account=${this.store.wallet}&botName=${this.item.botName}&fn=${this.item.fn}`
      );
      if (res.code != 200) {
        return this.$tips.err(res.message);
      }
      this.$emit('refresh');
      this.$tips.suc('删除成功');
      // console.log(res);
    },

    // 复制方法
    doCopy() {
      // console.log(cp);
      var clipboard = new Clipboard('.hash');
      clipboard.on('success', () => {
        this.$message.success('Copy Success');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        // 不支持复制

        this.$message.error('error');
        // 释放内存
        clipboard.destroy();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.robot {
  /* 矩形 8 */

  min-width: 370px;
  // width: (48%);
  flex: 1;
  margin: 0 10px;

  height: 181.07px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  padding: 60px 30px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .avatar {
    /* 圆形 3 */

    width: 57.05px;
    height: 57.05px;
    // background-color: pink;
    border-radius: 50%;
  }
  .box {
    flex: 1;
    margin-left: 22px;
    .name {
      height: 25px;
      font-weight: bold;
    }
    .id {
      height: 50px;
      color: #666;
      font-size: 14px;
      svg {
        margin-left: 30px;
        color: #5b99ff;
      }
    }
    .ft {
      // width: 513.74px;
      display: flex;
      justify-content: space-between;
      .sw {
        span {
          margin-right: 10px;
          color: #5b99ff;
          font-size: 12px;
        }
        .del {
          color: #999;
        }
      }
      .cz {
        span {
          margin-left: 10px;
          color: #5b99ff;
        }
        .del {
          color: #eb2f96;
        }
      }
    }
  }
}
</style>
