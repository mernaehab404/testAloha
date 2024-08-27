import { trans } from "@mongez/localization";
import { dataset } from "apps/admin/home/components/Chart";
import { MostViewedProps } from "apps/admin/overview/types";
import { ChartConfigurations } from "design-system/components/Chart/types";
import { useMemo, useState } from "react";

export function useChart(
  mostViewed: MostViewedProps,
  activeKey: string,
  config: Record<string, ChartConfigurations>,
) {
  const [activeChart, setActiveChart] = useState(activeKey);

  const [datasets, labels] = useMemo(() => {
    const dataForActiveChart = config[activeChart];
    if (!dataForActiveChart) {
      return [[], []];
    }

    const { color, dataExtractor, labelExtractor } = dataForActiveChart;
    const chartData = mostViewed[activeChart];

    return [
      [
        dataset(dataForActiveChart.label)
          .color(color)
          .data(dataExtractor(chartData)),
      ],
      chartData.map(item => labelExtractor(item)),
    ];
  }, [mostViewed, activeChart, config]);

  const chartOptions = Object.keys(config).map(option => ({
    value: option,
    label: trans(config[option].label),
  }));

  return {
    datasets,
    labels,
    data: chartOptions,
    value: activeChart,
    changeChart: setActiveChart,
  };
}
