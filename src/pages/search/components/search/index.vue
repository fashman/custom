<template>
  <div class="search-box">
    <span class="clear" @click="goBack"></span>
    <div class="search">
      <input @keyup.enter="goToListPage" v-focus autofocus="autofocus" type="text" v-model.trim="keyword" placeholder="你想去哪里？">
      <span @click="goToListPage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    goToListPage() {
      const keyword = this.keyword;
      if (keyword) {
        location.href = `/custom/list?keyword=${this.keyword}`;
      }
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    }
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>