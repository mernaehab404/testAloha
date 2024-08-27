import { clone, set } from "@mongez/reinforcements";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  ChartType,
  Filler,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useMemo, useRef } from "react";
import { ChartProps } from "react-chartjs-2";
import { Dataset } from "./Dataset";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Filler, Legend);

export type BaseChartProps = {
  options: ChartOptions<ChartType>;
  labels: string[];
  datasets?: Dataset[];
  title?: string;
  tooltip?: (item: any) => any;
  data?: {
    id: string;
    values: number[];
  }[];
};

export abstract class BaseChart<Type extends ChartType> {
  /**
   * Tooltip callback
   */
  protected _tooltipCallback: (item: any) => any = item => {
    return item.formattedValue;
  };

  protected options: ChartOptions<ChartType> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      tooltip: {
        callbacks: {
          label: this._tooltipCallback.bind(this),
        },
      },
    },
  };

  /**
   * Set tooltip callback
   */
  public tooltip(callback: (item: any) => any) {
    (this.options as any).plugins.tooltip.callbacks.label = callback;

    return this;
  }

  /**
   * set tooltip callback value prefix
   */
  public tooltipPrefix(prefix: string) {
    return this.tooltip(item => {
      return `${prefix}${item.formattedValue}`;
    });
  }

  /**
   * Set tooltip callback value suffix
   */
  public tooltipSuffix(suffix: string) {
    return this.tooltip(item => {
      return `${item.formattedValue} ${suffix}`;
    });
  }

  /**
   * Chart props
   */
  protected chartProps: any = {};

  /**
   * Set chart height
   */
  public height(value: number) {
    this.setOption("maintainAspectRatio", false);

    this.chartProps.height = value;

    return this;
  }

  /**
   * Set chart width
   */
  public width(value: number) {
    this.setOption("maintainAspectRatio", false);

    this.chartProps.width = value;

    return this;
  }

  /**
   * More options to be used in the chart
   */
  protected moreOptions: any = {};

  /**
   * Set option
   */
  public setOption(key: string, value: any) {
    this.options = set(this.options, key, value);

    return this;
  }

  /**
   * Chart component
   */
  protected abstract chartComponent: React.ComponentType<any>;

  /**
   * Data sets list
   */
  protected datasetsList: Dataset[] = [];

  /**
   * Labels list
   */
  protected labelsList: string[] = [];

  /**
   * Set the title of the chart
   */
  public title(title: string) {
    return this.setOption("plugins.title", {
      text: title,
      display: true,
    });
  }

  /**
   * Whether to display the legend or not
   */
  public displayLegend(display = true) {
    return this.setOption("plugins.legend.display", display);
  }

  /**
   * Set label (Legend) position
   */
  public legendPosition(position: "top" | "bottom" | "left" | "right") {
    return this.setOption("plugins.legend.position", position);
  }

  /**
   * Set option
   */
  public set(key: string, value: any) {
    this.moreOptions = set(this.moreOptions, key, value);

    return this;
  }

  /**
   * Set labels
   */
  public labels(labels: string[]) {
    this.labelsList = labels;

    return this;
  }

  /**
   * Whether to make chart responsive or not
   */
  public responsive(responsive = true) {
    return this.set("responsive", responsive);
  }

  /**
   * Set data sets
   */
  public datasets(datasets: Dataset[]) {
    this.datasetsList = datasets;

    return this;
  }

  /**
   * Get chart data
   */
  public getData() {
    return {
      labels: this.labelsList,
      data: this.datasetsList.map(dataset => dataset.getOptions()),
    };
  }

  /**
   * Get data sets
   */
  public getDatasets() {
    return this.datasetsList;
  }

  /**
   * {@inheritdoc}
   */
  protected overRideDataset(_dataset: Dataset) {
    //
  }

  /**
   * Return chart as component
   */
  public asComponent() {
    const Component = this.chartComponent;

    const overRideDataset = this.overRideDataset.bind(this);

    // const finalizeDatasets = this.finalizeDatasets.bind(this);

    function ChartComponent({
      options,
      labels,
      data,
      datasets,
      title,
      tooltip,
      ...props
    }: BaseChartProps & ChartProps<Type>) {
      const chartRef = useRef<ChartJS>(null);
      const componentOptions = useMemo(() => {
        const finalOptions = clone(options);

        if (tooltip) {
          set(finalOptions, "plugins.tooltip.callbacks.label", tooltip);
        }

        if (title) {
          set(finalOptions, "plugins.title", {
            text: title,
            display: true,
          });
        }

        return finalOptions;
      }, [options, title, tooltip]);

      const finalData = useMemo(() => {
        const enhancedDatasets = (datasets as Dataset[]).map(item => {
          if (data) {
            const datasetData = data.find(dataItem => dataItem.id === item._id);

            if (datasetData) {
              item.data(datasetData.values);
            }
          }

          overRideDataset(item);

          return item.getOptions();
        });

        return enhancedDatasets;
      }, [data, datasets]);

      return (
        <Component
          ref={chartRef}
          datasetIdKey="id"
          data={{
            labels,
            datasets: finalData,
          }}
          options={componentOptions}
          {...props}
        />
      );
    }

    ChartComponent.defaultProps = {
      options: this.options,
      labels: this.labelsList,
      datasets: this.getDatasets(),
      ...this.chartProps,
    };

    return React.memo(ChartComponent);
  }
}
