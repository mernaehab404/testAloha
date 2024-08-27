import { SegmentedControl, Text, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { areaChart } from "app/home/components/Chart";
import { useChart } from "design-system/components/Chart/hooks/useChart";
import { ChartProps } from "design-system/components/Chart/types";

const MostViewedChart = areaChart("Statistics").asComponent();

export default function Chart({
  activeKey,
  mostViewed,
  config,
  title,
}: ChartProps) {
  const { changeChart, data, datasets, labels, value } = useChart(
    mostViewed,
    activeKey,
    config,
  );

  const chartsWithData = Object.keys(mostViewed).filter(
    chartKey => mostViewed[chartKey].length > 0,
  );

  if (chartsWithData.length === 0) {
    return (
      <>
        <Title order={1} ta="center" mb="md">
          No data available
        </Title>
      </>
    );
  }

  return (
    <>
      <Title order={1} ta="center" mb="md">
        {trans(title)}
      </Title>
      <Text ta="center">
        <SegmentedControl
          onChange={changeChart}
          value={value}
          data={data || []}
        />
      </Text>
      <MostViewedChart datasets={datasets} labels={labels} />
    </>
  );
}
