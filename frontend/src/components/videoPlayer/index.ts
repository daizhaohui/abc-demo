import { defineComponent, onMounted, watch, onUnmounted } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props:{
    visible: {
      type: Boolean,
      default: false
    },
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
      if(!player) {
        player = new window.HlsPlayer({
          id: 'video-player', // 上面容器的id选择器
          url,
          autoplay: true, // 自动播放
          playsinline: true,
          width: '100%',
          height: '100%',
          videoInit: true
        });
      }
    }

    const destroyPalyer = () => {
      try {
        player && player.destroy()
      } catch {}
    }

    watch(()=>props.url, (url: string)=>{
      initPlayer(url, props.poster);
      player.src = props.url;
      player.start(props.url);
    });

    watch(()=>props.visible, ()=>{
      if(props.visible) {
        player && player.play();
      } else {
        player && player.pause();
      }
    });

    onMounted(() => {
      initPlayer(props.url, props.poster);
    });
    onUnmounted(()=>{
      destroyPalyer();
    })
  }

});
