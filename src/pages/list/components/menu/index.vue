<template>
  <div :class="{menu: true, hide: scrollDown}" ref="menuRef">
    <span 
      @click="changeState({key: 'showDestinationModal', value: true})"
      :class="{cur: destination.text !== '目的地'}"
      v-show="destination.show"
    >
      {{destination.text}}
    </span>
    <span 
      @click="changeState({key: 'showThemeModal', value: true})"
      :class="{cur: theme.text !== '兴趣主题'}"
      v-show="theme.show"
    >
      {{theme.text}}
    </span>
    <span 
      @click="changeState({key: 'showFilterModal', value: true})"
      :class="{cur: filter.text !== '筛选'}"
      v-show="filter.show"
    >
      {{filter.text}}
    </span>
    <div class="sort">
      <span @click="toggleSort" :class="{cur: show}">
        {{ ['综合排序', '价格低到高', '价格高到低'][sort] }}
      </span>
      <div class="sort-hide" v-show="show">
        <p @click="handleClick(0)" v-if="sort !== 0">综合排序</p>
        <p @click="handleClick(1)" v-if="sort !== 1">价格低到高</p>
        <p @click="handleClick(2)" v-if="sort !== 2">价格高到低</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      show: false,
    }
  },
  props: ['scrollDown', 'changeState', 'sort', 'getList', 'facetFields', 'facetFieldsSelect'],
  computed: {
    destination() {
      const { facetFields, facetFieldsSelect } = this;
      let arr = [], items = 0;
      facetFields.forEach(val => {
        if (['continent', 'country', 'area', 'city'].indexOf(val.field) >  -1) {
          const match = facetFieldsSelect[val.field];
          val.facetItems.forEach(v => {
            if (match.indexOf(v.key) > -1) {
              arr.push(v.displayName);
            }
            items++;
          });
        }
      });
      return {
        text: arr.length ? `${arr[arr.length - 1]}${arr.length > 1 ? '···' : ''}` : '目的地',
        show: items > 0
      }
    },
    theme() {
      const { facetFields, facetFieldsSelect } = this;
      let arr = [], items = 0;
      facetFields.forEach(val => {
        if (['interest_topic_tag', 'suitable_crowd_tag'].indexOf(val.field) > -1) {
          const match = facetFieldsSelect[val.field];
          val.facetItems.forEach(v => {
            if (match.indexOf(v.key) > -1) {
              arr.push(v.displayName);
            }
            items++;
          });
        }
      });
      return {
        text: arr.length ? `${arr[0]}${arr.length > 1 ? '···' : ''}` : '兴趣主题',
        show: items > 0
      }
    },
    filter() {
      const { facetFields, facetFieldsSelect } = this;
      const arr = ['duration', 'start_location', 'end_location', 'search_price'];
      let index = 0, items = 0;
      arr.forEach(val => {
        const matchArr = facetFieldsSelect[val];
        if (matchArr.length > 0) {
          if (val !== 'search_price') {
            index++;
          } else {
            if (location.href.indexOf('p-') > -1) {
              index++;
            }
          }
        }
        facetFields.find(v => v.field === val).facetItems.length && items++;
      });
      return {
        text: index ? `筛选·${index}` : '筛选',
        show: items > 0
      }
    },
  },
  methods: {
    toggleSort() {
      this.show = !this.show;
    },
    handleScroll() {
      this.show = false;
    },
    handleClick( num ) {
      this.show = false;
      this.changeState({key: 'sort', value: num});
      this.getList(false);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>