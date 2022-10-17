import { defineComponent, reactive, ref, useRouter, onMounted } from '@lincy-vue/core';
import { Message } from '@/components';
import SendCaptchaButton from '@/components/sendCaptchaButton/index.vue';
import { isPhone, trim } from '@lincy-js/utils/string';

const drawBackGround = () => {
  const win: any = window;
  // canvas绘画
  win.requestAnimationFrame =
  win.requestAnimationFrame ||
  win.mozRequestAnimationFrame ||
  win.webkitRequestAnimationFrame ||
  win.msRequestAnimationFrame;

  const canvas: any = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.offsetWidth;
  const h = canvas.height = canvas.offsetHeight;
  const circles: any[] = [];

  init(180);

  function init (num: number) {
    for (let i = 0; i < num; i++) {
      newobject(Math.random() * w, Math.random() * h);
    }
    draw();
  }

  function newobject (x: number, y: number) {
    const object: any = {};
    object.x = x;
    object.y = y;
    object.r = Math.random() * 3;
    object._mx = Math.random();
    object._my = Math.random();
    circles.push(object);
  }

  function drawCircle (obj: any) {
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r, 0, 360);
    ctx.closePath();
    ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
    ctx.fill();
  }

  function drawLine (obj1: any, obj: any) {
    const dx = obj1.x - obj.x;
    const dy = obj1.y - obj.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 60) {
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.moveTo(obj1.x, obj1.y); // start
      ctx.lineTo(obj.x, obj.y); // end
      ctx.closePath();
      ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
      ctx.stroke();
    }
  }

  function move (obj: any) {
    obj._mx = obj.x < w && obj.x > 0 ? obj._mx : -obj._mx;
    obj._my = obj.y < h && obj.y > 0 ? obj._my : -obj._my;
    obj.x += obj._mx / 2;
    obj.y += obj._my / 2;
  }

  function draw () {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < circles.length; i++) {
      move.call(circles[i], circles[i]);
      drawCircle.call(circles[i], circles[i]);
      for (let j = i + 1; j < circles.length; j++) {
        drawLine.call(circles[i], circles[i], circles[j]);
      }
    }
    requestAnimationFrame(draw);
  }
};

export default defineComponent({
  components: {
    SendCaptchaButton
  },
  setup () {
    const formRef = ref();
    const disableLoginButton = ref(false);
    const activeKey = ref('1');
    const start = ref(false);
    const formState: any = reactive({
      password: 'admin',
      userId: 'admin',
      mobile: '',
      captcha: '',
      rememberMe: false
    });

    // 验证规则
    const rules = {
      userId: [{ required: true, message: '请输入用户名' }],
      password: [{ required: true, message: '请输入密码' }],
      mobile: [
        {
          trigger: 'blur',
          validator: (rule: any, value: any, callback: any) => {
            if (!trim(value)) callback(new Error('请输入手机号码'));
            if (isPhone(value)) callback();
            callback(new Error('手机号格式错误'));
          }
        }
      ],
      captcha: [{ required: true, message: '请输入验证码!' }]
    };

    const onSwithLogin = (e: any) => {
      formState.autoLogin = e.target.checked;
    };

    const onSwitchTab = (key: string) => {
      activeKey.value = key;
    };

    const onSubmit = () => {
      if (activeKey.value === '1') {
        formRef.value.validate(['userId', 'password'], {
          firstFields: ['userId', 'password']
        }).then(() => {
            disableLoginButton.value = true;
            const router = useRouter();
            router.push('home');
            disableLoginButton.value = false;
          });
      } else if (activeKey.value === '2') {
        formRef.value.validate(['mobile', 'captcha']).then(() => {
          const router = useRouter();
          router.push('home');
        }).catch((error: any) => {
          console.log('error', error);
        });
      }
    };

    const send = () => {
      formRef.value.validate(['mobile'], {}).then(() => {
        Message.loading('处理中..', 0);
        setTimeout(() => {
          start.value = true;
          Message.destroy();
          Message.success('This is a message of success code [ 4569 ]', 10);
        }, 1000);
      }).catch((err: any) => {
        console.log(err);
      });
    };

    onMounted(() => {
      drawBackGround();
    });

    return {
      start,
      formRef,
      rules,
      activeKey,
      formState,
      disableLoginButton,
      onSwithLogin,
      onSubmit,
      onSwitchTab,
      send
    };
  }
});
