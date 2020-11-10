import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '某某物品三十天内价格走势（/KG）',
      left: 'left'
    },
    color: ["#9FE6B8"],
    // legend: {
    //   data: ['A'],
    //   top: 50,
    //   left: 'center',
    //   backgroundColor: 'white'
    // },
    // grid: {
    //   containLabel: true
    // },
    // tooltip: {
    //   show: true,
    //   trigger: 'axis'
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2020-08-28', '2020-09-15', '2020-09-28', '2020-10-28'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [2, 50, 98, 10]
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    index: 0,//选择的下拉列表下标
    date: '2018-12-25',
    picker: ['可回收物品类型', '可回收物品类型1', '可回收物品类型2', '可回收物品类型3', '可回收物品类型4', '可回收物品类型5'],
    ec: {
      onInit: initChart
    }
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  // 点击下拉显示框
  selectTap1() {
    this.setData({
      show1: !this.data.show1
    });
  },
  // 点击下拉列表
  optionTap1(e) {
    console.log(e)
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(Index)
    this.setData({
      index1: Index,
      show1: !this.data.show1
    });
  },
  onLoad: function (options) {
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  }
})