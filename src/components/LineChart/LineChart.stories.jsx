import React from "react";

import { LineChart } from "./index";

export default {
  title: "Example/LineChart",
  component: LineChart,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

const Template = (args) => <LineChart {...args} />;

export const showLegend = Template.bind({});
showLegend.args = {
  id: "showLegend",
  legend: {
    orient: "vertical",
    left: "left",
  },
};

export const noLegend = Template.bind({});
noLegend.args = {
  id: "noLegend",
  legend: {
    show: false,
  },
};
