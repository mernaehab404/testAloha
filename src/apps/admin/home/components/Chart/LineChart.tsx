import { Chart as ChartJS, LineElement, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import { BaseChart } from "./BaseChart";
import { Dataset } from "./Dataset";

ChartJS.register(PointElement, LineElement);

export class LineChart extends BaseChart<"line"> {
  protected chartComponent = Line;

  /**
   * {@inheritdoc}
   */
  protected moreOptions: any = {
    tension: 0.5,
    fill: false,
    stepped: false,
  };

  /**
   * Set area chart Bézier curve
   */
  public curve(value: number) {
    return this.set("tension", value);
  }

  /**
   * Render datasets as steps
   */
  public stepped(value: boolean | "before" | "after" | "middle") {
    return this.set("stepped", value);
  }

  /**
   * {@inheritdoc}
   */
  protected overRideDataset(dataset: Dataset) {
    dataset
      .set("stepped", this.moreOptions.stepped)
      .opacity(0.2)
      .set("tension", this.moreOptions.tension);
  }
}

export function lineChart(title?: string) {
  const chart = new LineChart();

  if (title) {
    chart.title(title);
  }

  return chart;
}
