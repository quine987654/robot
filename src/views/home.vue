<template>
  <div id="home">
    <el-container>
      <el-aside width="286px">
        <wl-menu></wl-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="div"></div>
          <wallet-link></wallet-link>
        </el-header>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import WalletLink from '../components/menu/wallet-link.vue';
import WlMenu from '../components/menu/wl-menu.vue';
import Store from '../store';
export default {
  components: {
    WlMenu,
    WalletLink,
  },
  mounted() {
    // this.getUserDetail();
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
#home {
  // width: 1440px;

  min-width: 1440px;
  // margin: 0 auto;
}
.el-container {
  min-height: 100vh;
}
.el-aside {
  border-right: 1px solid #d8d8d8;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 120px !important;
  background-color: #f7f8fa;
  .div {
    flex: 1;
  }
}
.el-main {
  background-color: #f7f8fa;
  background-image: url('../assets/images/ftRobot.png');
  background-repeat: no-repeat;
  background-position: left bottom;
}
</style>
