import {
  Box,
  Collapse,
  Flex,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { Link } from "@mongez/react-router";
import { ChevronIcon } from "apps/admin/design-system/components/Icons";
import { BaseLink } from "apps/admin/design-system/components/Link";
import { drawerEvents } from "apps/admin/design-system/layouts/Header/events";
import { SidebarLink } from "apps/admin/design-system/types/Sidebar";
import { useMemo, useState } from "react";
import classes from "./NavbarLinksGroup.module.css";

export type NewLinksGroupProps = {
  icon: React.FC<any>;
  label: string;
  route?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
};

export function SidebarItem({
  icon: Icon,
  label,
  defaultOpen = false,
  children,
  route,
  iconColor = "blue",
}: SidebarLink) {
  const [opened, open] = useState(defaultOpen);

  const [childrenItems, WrapperComponent] = useMemo(() => {
    if (!children) return [null, BaseLink];

    return [
      children.map((child, index) => (
        <Text
          className={classes.link + " sidebar-child"}
          component={Link}
          onClick={() => drawerEvents.close()}
          to={child.route}
          key={index}>
          {child.label}
        </Text>
      )),
      Box,
    ];
  }, [children]);

  const wrapperProps: any = {};

  if (!childrenItems) {
    wrapperProps.to = route;
    wrapperProps.onClick = () => drawerEvents.close();
  }

  return (
    <>
      <UnstyledButton className={classes.control} onClick={() => open(!opened)}>
        <WrapperComponent {...wrapperProps}>
          <Flex align="center" justify="space-between">
            <Flex gap={10} align="center">
              {Icon && (
                <ThemeIcon variant="light" color={iconColor} size={30}>
                  <Icon size={18} />
                </ThemeIcon>
              )}
              <Box>{label}</Box>
            </Flex>
            {children?.length && (
              <ChevronIcon
                className={classes.chevron}
                size={14}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
          </Flex>
        </WrapperComponent>
      </UnstyledButton>
      {children?.length ? (
        <Collapse in={opened}>{childrenItems}</Collapse>
      ) : null}
    </>
  );
}
