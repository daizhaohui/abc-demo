import { defineComponent, onMounted, nextTick, watch } from '@lincy-vue/core';
import * as echarts from 'echarts';

export default defineComponent({
  components: {},
  props: {
    option: {
      type: Object
    },
    id: {
      type: String,
      default: 'container'
    }
  },
  setup (props: any) {
    let myChart: echarts.ECharts;
    
    const renderChart = ()=>{
      if(myChart) {
        myChart.setOption({
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
          yAxis: {},
          series: {
            type: 'bar',
            encode: { x: 'name', y: 'percent' },
            datasetIndex: 1
          }
        }
      )
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
