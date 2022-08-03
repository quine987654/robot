<template>
  <div class="wallet-link">
    <a href="javascript:;">
      <div class="wallet" v-if="store.wallet">
        {{ uti.shrink(store.wallet) }}
      </div>
      <div class="link" v-else @click="linkWallet()">
        <!-- 链接 -->
        链接钱包
      </div>
    </a>
  </div>
</template>

<script>
import Store from '../../store';
export default {
  components: {},
  data() {
    return {
      store: Store.state,
      uti: Store.uti,
      http: Store.http,
    };
  },
  mounted() {
    // this.linkWallet();
    this.changeWallet();
  },
  methods: {
    // 链接钱包
    async linkWallet() {
      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((item) => {
          console.log(window.ethereum.networkVersion);
          if (
            ['1', '56', '137'].indexOf(window.ethereum.networkVersion) == -1
          ) {
            return this.$tips.war('请使用 ETH Polygan 或 BSC 网络链接');
          }
          console.log(item[0]);
          this.store.wallet = item[0];
          window.sessionStorage.setItem('wallet', item[0]);
          // this.login();
          this.getUserDetail();
        });
    },
    changeWallet() {
      window.ethereum.on('accountsChanged', (handler) => {
        this.store.wallet = handler[0];
        window.sessionStorage.setItem('wallet', handler[0]);
        this.getUserDetail();
      });
    },
    // 获取用户信息
    async getUserDetail() {
      console.log(this.actRobot);
      let { data: res } = await this.$http.get(
        `/user/detail/${this.store.wallet}`
      );

      if (res.code != 200) {
        return this.$tips.err(res.message);
      }
      // this.input = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.wallet-link {
  // height: 100vh;
  a {
    color: #000;
  }
  .wallet,
  .link {
    text-align: center;
    line-height: 48px;
    border-radius: 5px;
    font-size: 18px;
    color: #212121;
    /* 矩形 5 */
    width: 168.39px;
    height: 47.19px;
    border-radius: 50px;
    background: #e3f2fd;
  }
}
</style>
