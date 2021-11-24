import React, { useEffect } from "react";
import * as echarts from "echarts";
import "./pie.css";

export const Pie = ({ id, legend, backgroundColor }) => {
  useEffect(() => {
    initCharts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function initCharts() {
    var mychart = echarts.init(document.getElementById(id));
    var option = {
      tooltip: {
        trigger: "item",
      },
      legend,
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };
    option && mychart.setOption(option);
  }
  return (
    <div>
      {id === "showLegend" && (
        <div id="showLegend" style={{ width: "800px", height: "400px" }} />
      )}
      {id === "noLegend" && (
        <div
          id="noLegend"
          style={{
            width: "800px",
            height: "400px",
            backgroundColor: backgroundColor,
          }}
        />
      )}
    </div>
  );
};
