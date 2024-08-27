import { Box, Grid, Text, useMantineTheme } from "@mantine/core";
import { trans } from "@mongez/localization";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";

export type SummaryCrd = {
  title: string;
  value: number;
  link?: string;
  color?: string;
};

export default function CounterCard({ title, value, color, link }: SummaryCrd) {
  const theme = useMantineTheme();
  const hexColor = color ? theme.colors[color][5] : "";

  return (
    <Grid.Col
      span={{
        base: 12,
        lg: 4,
        md: 6,
      }}>
      <UnStyledLink to={link}>
        <Box
          ta="center"
          p={20}
          style={{
            borderRadius: "10px",
            border: `2px solid ${hexColor}`,
          }}>
          <Text c={hexColor} fz="3rem" fw={900}>
            {value}
          </Text>
          <Text py={6} c={color + ".8"} fw="bolder">
            {trans(title)}
          </Text>
        </Box>
      </UnStyledLink>
    </Grid.Col>
  );
}
