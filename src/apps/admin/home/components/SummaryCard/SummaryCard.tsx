import { Box, Text, useMantineTheme } from "@mantine/core";
import { trans } from "@mongez/localization";

export type SummaryCrd = {
  title: string;
  value: number;
  color?: string;
};

export default function SummaryCard({ title, value, color }: SummaryCrd) {
  const theme = useMantineTheme();
  const hexColor = color ? theme.colors[color][5] : "";

  return (
    <Box
      ta="center"
      p={20}
      style={{
        borderRadius: "10px",
        border: "2px solid #eee",
      }}>
      <Text color={hexColor} fz="3rem" fw={900}>
        {value}
      </Text>
      <Text py={6}>{trans(title)}</Text>
    </Box>
  );
}
