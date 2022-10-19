import { defineComponent, onMounted, watch, onUnmounted } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props:{
    url: {
      type: String,
      default: '',
    },
    poster: {
      type: String,
      default: 'http://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg'
    }
  },
  setup (props: any) {
    let player: any = null;

    const initPlayer = (url: string, poster: string) => {
      player = new window.HlsPlayer({
        id: 'video-player', // 上面容器的id选择器
        url,
        autoplay: true, // 自动播放
        poster,
        playsinline: true,
        height: '100%',
        width: '100%'
      });
    }

    const destroyPalyer = () => {
      try {
        player && player.destroy()
      } catch {}
    }

    watch(props.url, (url: string)=>{
      destroyPalyer();
      initPlayer(url, props.poster);
    });
    onMounted(() => {
      initPlayer(props.url, props.poster);
    });
    onUnmounted(()=>{
      destroyPalyer();
    })
  }

});
