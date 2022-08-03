<template>
  <div ref="tips">
    <!-- 提示弹窗 -->
  </div>
</template>
<script>
// import { TweenMax } from "gsap";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 获取真实文字
    getTips(text) {
      // return text;
      let that = window.myVue.$i18n;
      if (that.messages[that.locale].tips[text]) {
        // console.log(that.messages[that.locale].tips[text]);
        return that.messages[that.locale].tips[text];
      } else {
        // console.log(text);
        return text;
      }
    },
    aaaaaa() {},
    // 错误
    err(text) {
      window.myVue.$message({
        showClose: true,
        message: this.getTips(text),
        type: 'error',
      });
    },
    // 成功
    suc(text) {
      window.myVue.$message({
        showClose: true,
        message: this.getTips(text),
        type: 'success',
      });
    },
    // 警示
    war(text) {
      window.myVue.$message({
        showClose: true,
        message: this.getTips(text),
        type: 'warning',
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
