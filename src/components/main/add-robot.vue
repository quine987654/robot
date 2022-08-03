<template>
  <div class="add"></div>
</template>

<script>
import Store from '../../store';
export default {
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

<style lang="less" scoped>
.add {
}
</style>
