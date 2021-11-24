import React, { Component } from "react";
import * as echarts from "echarts";

export default class LineChart extends Component {
  componentDidMount() {
    this.initCharts();
  }
  initCharts() {
    // console.log(this.props);
    const { option: op } = this.props;
    var mychart = echarts.init(document.getElementById(op.id));
    var option = {
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: op.legend,
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    option && mychart.setOption(option);
  }
  render() {
    const { option } = this.props;
    return (
      <div>
        {option.id === "showLegend" && (
          <div id="showLegend" style={{ width: "800px", height: "400px" }} />
        )}
        {option.id === "noLegend" && (
          <div
            id="noLegend"
            style={{
              width: "800px",
              height: "400px",
              backgroundColor: option.backgroundColor,
            }}
          />
        )}
      </div>
    );
  }
}
