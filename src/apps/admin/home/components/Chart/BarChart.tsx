import { Bar } from "react-chartjs-2";
import { BaseChart } from "./BaseChart";

import { BarElement, Chart as ChartJS } from "chart.js";

ChartJS.register(BarElement);

export class BarChart extends BaseChart<"bar"> {
  protected chartComponent = Bar;
}

export function barChart(title?: string) {
  const chart = new BarChart();

  if (title) {
    chart.title(title);
  }

  return chart;
}
