import React, { Component } from "react";
import * as echarts from "echarts";
import "./lineChart.css";

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
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: op.legend,
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Step Start",
          type: "line",
          step: "start",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Step Middle",
          type: "line",
          step: "middle",
          data: [220, 282, 201, 234, 290, 430, 410],
        },
        {
          name: "Step End",
          type: "line",
          step: "end",
          data: [450, 432, 401, 454, 590, 530, 510],
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
