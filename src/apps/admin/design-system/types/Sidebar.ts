import { MantineColor } from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

export type LinksGroupProps = {
  icon: TablerIconsProps;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
};

export type SidebarLink = {
  label: React.ReactNode;
  route?: string;
  icon?: React.ElementType;
  defaultOpen?: boolean;
  children?: SidebarLink[];
  iconColor?: MantineColor;
  permission?: string;
};
