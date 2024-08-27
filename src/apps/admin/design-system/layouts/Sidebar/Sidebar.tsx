import { ScrollArea } from "@mantine/core";
import user from "apps/admin/account/user";
import { sidebarLinks } from "apps/admin/data/sidebar-list";
import { SidebarItem } from "apps/admin/design-system/layouts/Sidebar/SidebarItem";
import { useMemo } from "react";
import { SidebarLink } from "../../types/Sidebar";
import classes from "./NavbarNested.module.css";

export default function Sidebar() {
  const sidebarItems = sidebarLinks();

  const itemsList = useMemo(() => {
    const finalSidebarItems: SidebarLink[] = [];

    for (const item of sidebarItems) {
      if (item.permission) {
        if (user.can(item.permission)) {
          finalSidebarItems.push(item);
        }
      } else if (item.children) {
        const children = item.children.filter(child => {
          if (child.permission) {
            return user.can(child.permission);
          }

          return true;
        });

        if (children.length > 0) {
          finalSidebarItems.push({ ...item, children });
        }
      } else {
        finalSidebarItems.push(item);
      }
    }

    return finalSidebarItems.map((item, index) => (
      <SidebarItem {...item} key={index} />
    ));
  }, [sidebarItems]);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{itemsList}</div>
      </ScrollArea>
    </nav>
  );
}
