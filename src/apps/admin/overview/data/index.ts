import { trans } from "@mongez/localization";
import { ScriptableContext } from "chart.js";
import { GetChartData } from "../types";

export const options = {
  responsive: true,
  tension: 0.5,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // USING IT LATER...
    // title: {
    //   display: true,
    //   text: trans("results"),
    // },
  },
};

export function getSetData({ data, title, gradientColors }: GetChartData) {
  return [
    {
      fill: true,
      label: trans(title),
      data: data,
      borderColor: gradientColors.border,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, gradientColors.start);
        gradient.addColorStop(1, gradientColors.end);
        return gradient;
      },
    },
  ];
}
