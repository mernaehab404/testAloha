import { Box, Burger, Flex, Group } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { trans } from "@mongez/localization";
import { Tooltip } from "@mongez/moonlight";
import { Link } from "@mongez/react-router";
import { SidebarToggleAtom } from "apps/admin/design-system/atoms/sidebar-toggle-atom";
import Notifications from "apps/admin/notifications/components/Notifications";
import DirectionSettings from "../DashboardSettings/DirectionSettings";
import Drawer from "./Drawer";
import FullScreen from "./FullScreen";
import ProfileDropdown from "./ProfileDropdown";
import Refresh from "./Refresh";
import ToggleDarkMode from "./ToggleDarkMode";

export default function Header() {
  const opened = SidebarToggleAtom.use("opened");
  const label = opened ? "Close navigation" : "Open navigation";

  useHotkeys([["tab", SidebarToggleAtom.toggle]]);

  return (
    <>
      <Group>
        <Box visibleFrom="lg">
          <Link to="https://mentoor.io" newTab title="Mentoor">
            <img src="https://mentoor.io/logo.svg" alt="mentoor" width={50} />
          </Link>
        </Box>
        <Tooltip
          label={<>{trans(opened ? "closeSidebar" : "openSidebar")} (Tab)</>}>
          <Box visibleFrom="lg">
            <Burger
              opened={opened}
              onClick={SidebarToggleAtom.toggle}
              aria-label={label}
            />
          </Box>
        </Tooltip>

        <Drawer />
      </Group>
      <Flex gap={10} align="center">
        <ToggleDarkMode />
        <DirectionSettings />
        <Box visibleFrom="md">
          <Refresh />
        </Box>
        <Box visibleFrom="md">
          <FullScreen />
        </Box>
        <Notifications />
        <ProfileDropdown />
      </Flex>
    </>
  );
}
