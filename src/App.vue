<template>
  <div id="app">
    <router-view />
    <div
      class="wl-loading"
      v-loading="store.loading"
      v-if="store.loading"
    ></div>
  </div>
</template>

<script>
import Store from './store';
export default {
  name: 'app',
  components: {},
  mounted() {
    window.myVue = this;
    if (screen.width < 700 && window.location.pathname == '/') {
      // if (screen.width < 700) {
      this.ifM = true;
      this.$router.push('/m');
    } else {
      this.ifM = false;
      // this.$router.push("/");
    }
    // if (window.sessionStorage.getItem("path")) {
    //   this.$router.push(window.sessionStorage.getItem("path"));
    // }

    // 生成web3
    this.web3 = new this.$web3('https://seed2.PolySmartChain.com');
    // this.web3 = new this.$web3(
    //   "https://ropsten.infura.io/v3/ebacd5fd12c448a6a31d9347716e3372"
    // );
  },
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,
    };
  },
  methods: {},
};
</script>

<style lang="less">
.w {
  width: 1260px;
  margin: 0 auto;
}
@import url('./assets/style.less');

#app {
  min-height: 100vh;
  // @font-face {
  //   font-family: 'ubuntu';
  //   src: url('./assets/fonts/Ubuntu-L_W.woff2') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-Bold';
  //   src: url('./assets/fonts/SourceHanSansCN-Bold.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-ExtraLight';
  //   src: url('./assets/fonts/SourceHanSansCN-ExtraLight.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-Heavy';
  //   src: url('./assets/fonts/SourceHanSansCN-Heavy.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-Light';
  //   src: url('./assets/fonts/SourceHanSansCN-Light.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-Medium';
  //   src: url('./assets/fonts/SourceHanSansCN-Medium.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN';
  //   src: url('./assets/fonts/SourceHanSansCN-Normal.otf') format('woff2');
  // }
  // @font-face {
  //   font-family: 'Source Han Sans CN-Regular';
  //   src: url('./assets/fonts/SourceHanSansCN-Regular.otf') format('woff2');
  // }
  // font-family: SourceHanSansCN;

  // font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  // font-family: arialbd, SourceHanSansCN, ubuntu;
  background: rgb(250, 250, 250);
}
.wl-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000;
  z-index: 9999;
}
.a0 {
  background-color: #97c4b8;
}
.a1 {
  background-color: #97c4b8;
}
.a2 {
  background-color: #bffff0;
}
.a3 {
  background-color: #f6ffa4;
}
.a4 {
  background-color: #fdd7aa;
}
.a5 {
  background-color: #ffa8a8;
}
.a6 {
  background-color: #bffff0;
}
.a7 {
  background-color: #7fb5ff;
}
.a8 {
  background-color: #b8fff9;
}
.a9 {
  background-color: #ff5d5d;
}
.aa {
  background-color: #ff8c8c;
}
.aA {
  background-color: #ff8c8c;
}
.ab {
  background-color: #d18ce0;
}
.aB {
  background-color: #d18ce0;
}
.ac {
  background-color: #ea5c2b;
}
.aC {
  background-color: #ea5c2b;
}
.ad {
  background-color: #c7b198;
}
.aD {
  background-color: #c7b198;
}
.ae {
  background-color: #ffb085;
}
.aE {
  background-color: #ffb085;
}
</style>
