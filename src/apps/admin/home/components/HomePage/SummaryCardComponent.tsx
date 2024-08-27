import {
  Anchor,
  Flex,
  Group,
  Paper,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconChevronsRight,
} from "@tabler/icons-react";
import { useMemo } from "react";
import { SummaryCard } from "./SummaryCards";

export function SummaryCardComponent({
  title,
  value,
  icon: Icon,
  content,
  color = "dark",
  valueSuffix,
  valuePrefix,
  previousValue,
  filled,
  link,
  iconBG = "gray",
  linkText = trans("readMore"),
  percentageLabel,
}: SummaryCard) {
  const diff =
    previousValue && value
      ? Math.round(((value - previousValue) / previousValue) * 100)
      : undefined;

  const theme = useMantineTheme();
  const renderedIcon = useMemo(() => {
    if (Icon) {
      return (
        <ThemeIcon
          color={iconBG}
          variant="light"
          style={{
            color: theme.colors[color][6],
          }}
          size={38}
          radius="md">
          <Icon size="1.8rem" stroke={1.5} />
        </ThemeIcon>
      );
    }

    if (diff === undefined) return null;

    const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <ThemeIcon
        color={iconBG}
        variant="light"
        style={{
          color: diff > 0 ? theme.colors.teal[6] : theme.colors.red[6],
        }}
        size={38}
        radius="md">
        <DiffIcon size="1.8rem" stroke={1.5} />
      </ThemeIcon>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardContent = useMemo(() => {
    let cardContent = content;
    let linkContent: React.ReactNode = "";

    if (link) {
      linkContent = (
        <Anchor
          component={Link}
          to={link}
          color={filled ? color + ".2" : undefined}>
          <Flex>
            <span>{linkText}</span>
            <Text mt={2}>
              <IconChevronsRight />
            </Text>
          </Flex>
        </Anchor>
      );
    }

    if (content && typeof content === "string") {
      cardContent = (
        <Text
          c={filled ? color + ".2" : "dimmed"}
          fz="sm"
          mt={link ? undefined : "sm"}>
          <span>{content}</span>
        </Text>
      );
    }

    if (cardContent) {
      if (link) {
        return (
          <Flex justify={"space-between"} mt="sm">
            <div>{cardContent}</div>
            {linkContent}
          </Flex>
        );
      }
      return cardContent;
    }

    if (diff === undefined) return null;

    let diffColor = diff > 0 ? "teal" : "red";

    if (filled) {
      diffColor = diff > 0 ? "teal.2" : "red.2";
    }

    const diffContent = (
      <Text
        c={filled ? color + ".2" : "dimmed"}
        fz="sm"
        mt={link ? undefined : "sm"}>
        <Text component="span" c={diffColor} fw={700}>
          {diff}%
        </Text>{" "}
        {diff > 0 ? "increase" : "decrease"} {percentageLabel}
      </Text>
    );

    if (link) {
      return (
        <Flex justify={"space-between"} mt="sm">
          <div>{diffContent}</div>
          {linkContent}
        </Flex>
      );
    }

    return diffContent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      bg={filled ? color : undefined}
      variant="light">
      <Group justify="apart">
        <div>
          <Text
            c={filled ? color + ".2" : "dimmed"}
            tt="uppercase"
            fw={700}
            fz="xs">
            {title}
          </Text>
          <Text fw={700} fz="xl" color={filled ? "white" : undefined}>
            {valuePrefix}
            {value.toLocaleString()}
            {valueSuffix}
          </Text>
        </div>
        {renderedIcon}
      </Group>

      {cardContent}
    </Paper>
  );
}
