<template>
  <!-- 侧边导航 -->
  <div class="material">
    <div class="topList">
      <span
        @click="uti.goPath('/material/hello')"
        :class="{
          act: $route.path == '/material/hello' || $route.path == '/material',
        }"
        >欢迎内容</span
      >
      <span
        @click="uti.goPath('/material/faq')"
        :class="{ act: $route.path == '/material/faq' }"
        >智能问答</span
      >
      <span
        @click="uti.goPath('/material/timeout')"
        :class="{ act: $route.path == '/material/timeout' }"
        >定时发送</span
      >
      <!-- <span @click="clickAct(3)" :class="{ act: isAct == 3 }">定时发送</span> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Store from '../../store';
export default {
  components: {},
  data() {
    return {
      ifM: false,
      uti: Store.uti,
      http: Store.http,
      store: Store.state,
      isAct: 3,
      // 问候内容
      input: '',
      actRobot: '',
      faqList: [],
      faqPop: false,
      faqFrom: {
        f: '',
        q: '',
      },
    };
  },
  mounted() {},
  methods: {
    clickAct(val) {
      this.isAct = val;
    },
  },
};
</script>

<style lang="less" scoped>
.material {
  /* 矩形 7 */
  .topList {
    margin-bottom: 22px;
    span {
      margin-right: 100px;
      color: #999;
    }
    .act {
      color: #5b99ff;
    }
  }
}
</style>
