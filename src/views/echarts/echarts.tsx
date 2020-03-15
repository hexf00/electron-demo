

import { Component, Prop, Vue } from 'vue-property-decorator'
import echarts from 'echarts'

@Component({
  name: 'echarts'
})
export default class extends Vue {
  public height = 100;
  created() {
    this.height = document.body.clientHeight - 200
  }

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const canvasDom = this.$refs.chart as HTMLCanvasElement
    const myChart = echarts.init(canvasDom)
    console.log(this.height)
    // console.log({

    //   width: canvasDom.clientWidth,
    //   height: canvasDom.clientHeight
    // })
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }

  render() {
    return <div>
      <div ref="chart" style={{
        height: this.height + 'px',
        width: '100%'
      }}></div>
    </div>
  }
}
