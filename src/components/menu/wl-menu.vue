<template>
  <!-- 侧边导航 -->
  <div class="left">
    <div class="menuList">
      <div
        class="menuItem"
        :class="{ act: $route.path == '/robots' || $route.path == '/' }"
        @click="uti.goPath('/robots')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiqiren"></use>
        </svg>
        机器人
      </div>
      <div
        class="menuItem"
        :class="{ act: $route.path.indexOf('/material') >= 0 }"
        @click="uti.goPath('/material')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sucaiku-1"></use>
        </svg>
        素材库
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../../store';
export default {
  components: {},
  mounted() {},
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
.menuList {
  margin-top: 38px;
  .menuItem {
    height: 70px;
    box-sizing: border-box;
    padding: 21px 30px;
    margin: 0 auto;
    width: 223px;
    color: #666;
  }
  .act {
    background-color: #e3f2fd;
    /* 矩形 3 */

    border-radius: 10px;
    background: #e3f2fd;
    color: #5b99ff;
    border: 1px solid;
    border-color: #0000;
  }
}
</style>
