import { MantineColor } from "@mantine/core";
import { IconMoneybag } from "@tabler/icons-react";
import React from "react";
import { SummaryCardComponent } from "./SummaryCardComponent";

export type SummaryCard = {
  value: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
  color: MantineColor;
  link: string;
  linkText: React.ReactNode;
  previousValue?: number;
  percentageLabel?: React.ReactNode;
  filled?: boolean;
  valueSuffix?: React.ReactNode;
  valuePrefix?: React.ReactNode;
  iconBG?: MantineColor;
};

// class SummaryCardsGenerator {

//   protected cards: SummaryCard[] = [];
// }

class SummaryCardGenerator {
  /**
   * Constructor
   */
  public constructor(protected data: Partial<SummaryCard> = {}) {
    //
  }

  /**
   * Set card title
   */
  public title(title: React.ReactNode) {
    this.data.title = title;

    return this;
  }

  /**
   * Set card subtitle
   */
  public subtitle(subtitle: React.ReactNode) {
    this.data.subtitle = subtitle;

    return this;
  }

  /**
   * Set card icon
   */
  public icon(icon: React.ComponentType<any>) {
    this.data.icon = icon;

    return this;
  }

  /**
   * Set card value suffix
   */
  public valueSuffix(valueSuffix: React.ReactNode) {
    this.data.valueSuffix = valueSuffix;

    return this;
  }

  /**
   * Set card value prefix
   */
  public valuePrefix(valuePrefix: React.ReactNode) {
    this.data.valuePrefix = valuePrefix;

    return this;
  }

  /**
   * Set card content
   */
  public content(content: React.ReactNode) {
    this.data.content = content;
  }

  /**
   * Set card color
   */
  public color(color: MantineColor) {
    this.data.color = color;

    return this;
  }

  /**
   * Icon background color
   */
  public iconBG(iconBG: MantineColor) {
    this.data.iconBG = iconBG;

    return this;
  }

  /**
   * Set card link
   */
  public link(link: string) {
    this.data.link = link;

    return this;
  }

  /**
   * Set card link text
   */
  public linkText(linkText: React.ReactNode) {
    this.data.linkText = linkText;

    return this;
  }

  /**
   * Set card value
   */
  public value(value: number) {
    this.data.value = value;

    return this;
  }

  /**
   * Set card previous value
   */
  public previousValue(previousValue: number) {
    this.data.previousValue = previousValue;

    return this;
  }

  /**
   * Set card percentage label
   */
  public percentageLabel(percentageLabel: React.ReactNode) {
    this.data.percentageLabel = percentageLabel;

    return this;
  }

  /**
   * Set card filled
   * If true, then the color will be applied as background
   */
  public filled(filled = true) {
    this.data.filled = filled;

    return this;
  }

  /**
   * Return summary card as component
   */
  public asComponent() {
    function Component(Props: SummaryCard) {
      return <SummaryCardComponent {...Props} />;
    }

    Component.defaultProps = this.data;

    return React.memo(Component);
  }
}

export function summaryCard(title: React.ReactNode) {
  return new SummaryCardGenerator().title(title);
}

export const SummaryCardC = summaryCard("Revenues")
  .color("green")
  .percentageLabel("compared to last week")
  .icon(IconMoneybag)
  //   .filled()
  .valuePrefix("$")
  .asComponent();
