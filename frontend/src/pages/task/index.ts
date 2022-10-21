import { defineComponent, reactive, ref, toRefs, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import ChartStatistics  from './components/statistics';
import DictionaryUtil, {ISelectionEntity, IAllDictionary } from '@/utils/dictionary';
import { ITaskStatistics } from '@/model';
interface IState {
  spinning: boolean,
  areaChartOption: Record<string,any> | null,
  lineChartOption: Record<string,any> | null,
  totalStatistics: ITaskStatistics | null,
  lineSpinning: boolean,
  stationSpinning: boolean,
  lineArea: string,
  areaOptions:ISelectionEntity[],
  stationArea: string,
  stationLine: string,
  lineOptions: ISelectionEntity[],
  stationChartOption: Record<string,any> | null
}

export default defineComponent({
  components: {
    'echart-statistics ': ChartStatistics,
  },
  props: {
  },
  setup () {
    const contentHeight = ref('600px');
    let dicionary: IAllDictionary;
    const state = reactive<IState>({
      spinning: false,
      areaChartOption: null,
      lineChartOption: null,
      totalStatistics: null,
      lineSpinning: false,
      stationSpinning: false,
      lineArea: '',
      areaOptions:[],
      stationArea: '',
      stationLine: '',
      lineOptions: [],
      stationChartOption: []
    })


    //初始化下拉选择框
    const init = async () => {
      dicionary = await DictionaryUtil.getAllDictionary();
      const area = dicionary.areas[0].value;
      if(!area) return;
      state.areaOptions = dicionary.areas;
      state.lineArea = dicionary.areas[0].value;
      state.stationArea = area;
      state.lineOptions = dicionary.lines.filter(item=>item.data?.areaCode===area);
      if(state.lineOptions.length) {
        state.stationLine = state.lineOptions[0].value;
      }
    };


    const handleLineAreaChange = (value: string) =>{
      getLineStatistics();
    };

    const handleStationAreaChange = ()=>{
      state.lineOptions = dicionary.lines.filter(item=>item.data?.areaCode===state.stationArea);
      if(state.lineOptions.length) {
        state.stationLine = state.lineOptions[0].value;
      }
    };

    const handleStationLineChange = ()=>{
      getStationStatistics();
    };

    const getTotalStatistics = async ()=>{
      const result = await Api.Task.getTotalStatistics();
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        state.totalStatistics = result.data.data!
      }
    };

    const getAreaStatistics = async ()=>{
      const result = await Api.Task.getAreaStatistics();
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        const areaStatistics: ITaskStatistics[] = result.data.data!;
        state.areaChartOption = {
          source: areaStatistics.forEach(item => {
            return [
              item.areaName,
              Math.round(100*item.labeled/item.total)
            ]
          })
        }
      }
    };

    const getLineStatistics = async ()=>{
      const result = await Api.Task.getLineStatistics({
        params: {
          area: state.lineArea
        }
       });
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        const lineStatistics = result.data.data;
        state.lineChartOption = {
          source: lineStatistics!.forEach(item => {
            return [
              item.lineName,
              Math.round(100*item.labeled/item.total)
            ]
          })
        }
      }
    };

    const getStationStatistics = async ()=>{
      const result = await Api.Task.getStationStatistics({
        params: {
          area: state.stationArea,
          line: state.stationLine
        }
     });
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        const stationStatistics = result.data.data;
        state.stationChartOption = {
          source: stationStatistics!.forEach(item => {
            return [
              item.lineName,
              Math.round(100*item.labeled/item.total)
            ]
          })
        }
      }
    };

    onMounted(async () => {
      await init();
      getTotalStatistics();
      getAreaStatistics();
      getLineStatistics();
      getStationStatistics();
    });

    return {
      ...toRefs(state),
      contentHeight,
      handleLineAreaChange,
      handleStationAreaChange,
      handleStationLineChange,
    };
  }
});
