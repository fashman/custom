<template>
  <div class="hot">
    <h3>最近热搜</h3>
    <ul>
      <li v-for="(value, index) in tag" :key="index" :class="{cur: value.hot, last: (index + 1) % 5 === 0}">
        <a :href="value.url" v-if="value.url">{{ value.title }}</a>
        <a :href="'/custom/list?keyword=' + value.title" v-else>{{ value.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hots',
  props: ['tag'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>