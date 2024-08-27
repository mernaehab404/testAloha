import { ArcElement, Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BaseChart } from "./BaseChart";
import { Dataset } from "./Dataset";

ChartJS.register(ArcElement);

export class DoughnutChart extends BaseChart<"doughnut"> {
  protected chartComponent = Doughnut;

  /**
   * {@inheritDoc}
   */
  public overRideDataset(dataset: Dataset) {
    const generateRandomColors = () => {
      const colors: string[] = [];

      return colors;
    };

    const generateRandomBorders = () => {
      const colors: string[] = [];

      return colors;
    };

    const backgroundColors =
      dataset.get("backgroundColor") || generateRandomColors();
    const borderColors = dataset.get("borderColor") || generateRandomBorders();

    dataset.set("backgroundColor", backgroundColors);
    dataset.set("borderColor", borderColors);
  }
}

export function doughnutChart(title?: string) {
  const chart = new DoughnutChart();

  if (title) {
    chart.title(title);
  }

  return chart;
}
