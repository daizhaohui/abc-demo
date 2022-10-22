import { defineComponent, onMounted, nextTick, watch } from '@lincy-vue/core';
import * as echarts from 'echarts';

export default defineComponent({
  components: {},
  props: {
    option: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: 'container'
    }
  },
  setup (props: any) {
    let myChart: echarts.ECharts;
    
    const renderChart = ()=>{
      const op = {
        title : {
          text: '',
          subtext: '完成百分比'
        },
        dataset: [
          {
            dimensions: ['name', 'percent'],
            source: props.option.source || []
          },
          {
            transform: {
              type: 'sort',
              config: { dimension: 'percent', order: 'desc' }
            }
          }
        ],
        xAxis: {
          type: 'category',
          axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {
          min: 0,
          max: 100,
          axisLabel:{
            formatter: (value:number) => {
              return `${value}%`;
            }
          }
        },
        series: {
          type: 'bar',
          showBackground: true,
          encode: { x: 'name', y: 'percent' },
          datasetIndex: 1,
          itemStyle: {
            opacity: 0.1,
            normal: {
              label: {
                show: true, //开启显示数值
                position: 'top', //数值在上方显示
                textStyle: {  //数值样式
                  color: 'black',   //字体颜色
                  fontSize: 16  //字体大小
                },
                formatter: (params: any) => {
                  if (params.value[1] > 0) {
                      return `${params.value[1]}%`;
                   } else {
                      return ' ';
                   }
              }
              }
            }
          }
        }
      };
      if(props.text) {
        op.title.text = props.text;
      }
      if(props.subtext) {
        op.title.subtext = props.subtext;
      }
      if(myChart) {
        myChart.setOption(op);
      }
    };

    watch(()=>props.option, ()=>{
      renderChart();
    })

    onMounted(()=>{
      nextTick(()=>{
        myChart = echarts.init(document.getElementById(props.id) as HTMLElement, undefined, {
          renderer: 'canvas',
          useDirtyRect: false
        });
        window.addEventListener('resize', myChart.resize);
      });
    });
  }
});
