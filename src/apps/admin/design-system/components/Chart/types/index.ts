import { MostViewedProps } from "apps/admin/overview/types";

export type ChartConfigurations = {
  label: string;
  color: string;
  dataExtractor: (data: any[]) => number[];
  labelExtractor: (item: any) => string;
};

export type ChartProps = {
  title: string;
  activeKey: string;
  mostViewed: MostViewedProps;
  config: Record<string, ChartConfigurations>;
};
