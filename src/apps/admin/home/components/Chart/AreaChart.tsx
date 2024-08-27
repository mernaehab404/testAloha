import { Dataset } from "./Dataset";
import { LineChart } from "./LineChart";

export class AreaChart extends LineChart {
  /**
   * {@inheritdoc}
   */
  protected moreOptions: any = {
    tension: 0.5,
    fill: "origin",
    stepped: false,
  };

  /**
   * Set fill value for dataset
   */
  public fill(fillType: boolean | "start" | "end" | "stack" | "origin") {
    return this.set("fill", fillType);
  }

  /**
   * {@inheritdoc}
   */
  protected overRideDataset(dataset: Dataset) {
    dataset
      .set("fill", this.moreOptions.fill)
      .set("stepped", this.moreOptions.stepped)
      .opacity(0.2)
      .set("tension", this.moreOptions.tension);
  }
}

export function areaChart(title?: string) {
  const chart = new AreaChart();

  if (title) {
    chart.title(title);
  }

  return chart;
}
