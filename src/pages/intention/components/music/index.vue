<template>
  <div 
    :class="{
      'music-box': true, 
      playing, 
      'm0': index === 0,
      'm1': index === 1,
      'm2': index === 2,
      'm3': index === 3,
    }" 
    @click="togglePlay"
  >
    <audio 
      ref="audioRef" 
      src="//h5.quimg.com/h5-custom-static/dist/music/brand-bg.mp3" 
      loop autoplay
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      playing: true,
      touchPlay: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }
  },
  props: ['index'],
  methods: {
    play() {
      this.playing = true;
      this.$refs.audioRef.play();
    },
    stop() {
      this.playing = false;
      this.$refs.audioRef.pause();
    },
    togglePlay() {
      if (this.playing) {
        this.stop();
      } else {
        this.play();
      }
    }
  },
  mounted() {
    const { playing, touchPlay } = this;
    if (touchPlay) {
      this.playing = false;
      document.addEventListener('touchstart', () => {
        if (!playing && touchPlay) {
          this.play();
          this.touchPlay = false;
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>