import { Component, Vue } from "vue-property-decorator"
import lineChartComponent from "@/components/chart/VueChart.vue"
import Chart from "chart.js"

interface GridLinesSettingType {
  display: boolean,
  drawOnChartArea: boolean,
  color: string,
  zeroLineColor: string
}

const FONT_COLOR: string = "rgba(255, 255, 255, 1)"
const STACKED_SETTING: boolean = false
const GRID_LINES_SETTING: GridLinesSettingType = {
  display: true,
  drawOnChartArea: false,
  color: "rgba(255, 255, 255, .5)",
  zeroLineColor: "rgba(255, 255, 255, 1)"
}

@Component({
  components: {
    lineChartComponent
  }
})
export default class ChartComponent extends Vue {
  public chartTitle: string = "Vue Chartjs Demo"
  public chartData: Chart.ChartData = {}
  public chartOptions: Chart.ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      // display: false
      onClick(event, legendItem) {
        return
      },
      fullWidth: false,
      labels: {
        boxWidth: 20,
        fontColor: FONT_COLOR
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        bottom: 20,
        right: 20
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: GRID_LINES_SETTING,
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14
          },
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "月",
          },
          stacked: STACKED_SETTING
        },
      ],
      yAxes: [
        {
          id: "yAxis_1",
          type: "linear",
          gridLines: GRID_LINES_SETTING,
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "湿度(%)"
          },
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14,
            min: 0,
            max: 100
          },
          stacked: STACKED_SETTING
        },
        {
          id: "yAxis_2",
          type: "linear",
          display: !STACKED_SETTING,
          gridLines: GRID_LINES_SETTING,
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "温度(℃)"
          },
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14,
            min: 0,
            max: 40
          },
          position: "right",
          stacked: STACKED_SETTING
        }
      ],
    }
  }

  public created() {
    this.createChartData()
  }

  public createChartData() {
    this.chartData = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          yAxisID: "yAxis_1",
          type: "bar",
          label: "湿度",
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false,
          data: this.craeteRamdomValue(100)
        },
        {
          yAxisID: "yAxis_2",
          type: "bar",
          label: "温度",
          backgroundColor: "#F87979",
          borderColor: "#F87979",
          fill: false,
          data: this.craeteRamdomValue(40)
        }
      ]
    }
  }

  public craeteRamdomValue(baseNumber: number) {
    const arr: number[] = []
    for (let i: number = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * baseNumber))
    }
    return arr
  }
}
