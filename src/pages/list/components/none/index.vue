<template>
  <div class="none">
    <img src="./images/none.png" alt="">
    <p>抱歉，还没有你想要的路线</p>
    <span @click="handleYsf" class="link">让定制师来帮你</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'None',
  methods: {
    ...mapMutations('intention', {
      close: 'CHANGE_STATE'
    }),
    handleYsf() {
      if ( ysf ) {
        ysf.open({
          templateId: 2484043
        });
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>