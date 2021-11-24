import React from "react";

import { Pie } from "./Pie";

export default {
  title: "Example/PieChart",
  component: Pie,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

const Template = (args) => <Pie {...args} />;

export const showLegend = Template.bind({});
showLegend.args = {
  id: "showLegend",
  legend: {
    top: "5%",
    left: "center",
  },
};

export const noLegend = Template.bind({});
noLegend.args = {
  id: "noLegend",
  legend: {
    show: false,
  },
};
