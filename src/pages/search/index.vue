<template>
  <div class="search-page" ref="searchPage">
    <Sidebar />
    <SearchBox />
    <Hots :tag="tag" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Sidebar from '@/components/sidebar';
import SearchBox from './components/search';
import Hots from './components/hots';

export default {
  name: 'Search',
  data() {
    return {
      show: true
    }
  },
  components: { 
    Sidebar, SearchBox, Hots
  },
  computed: {
    ...mapState('search', {
      tag: state => state.tag
    })
  },
  created() {
    this.getTags();
  },
  methods: {
    ...mapActions('search', {
      getTags: 'getIndex'
    })
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>