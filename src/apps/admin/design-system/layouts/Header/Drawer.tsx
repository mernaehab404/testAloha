import {
  Drawer as BaseDrawer,
  Box,
  Burger,
  Divider,
  Flex,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { useEvent } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { drawerEvents } from "./events";

const directionIs = (direction: "ltr" | "rtl") =>
  current("direction") === direction;

export default function Drawer() {
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  useEvent(() => drawerEvents.onClose(() => setOpened(false)));

  return (
    <>
      <Box hiddenFrom="lg">
        <Burger
          fw={700}
          opened={opened}
          onClick={() => setOpened(true)}
          title={title}
        />
      </Box>
      <BaseDrawer
        title={
          <Box>
            <Flex gap={15} align="center">
              <Link to="https://mentoor.io" newTab title="Mentoor">
                <img
                  src="https://mentoor.io/logo.svg"
                  alt="mentoor"
                  width={50}
                />
              </Link>
              <Title>{trans("mentoor")}</Title>
            </Flex>
          </Box>
        }
        size="sm"
        padding="sm"
        opened={opened}
        overlayProps={{
          blur: 3,
          opacity: 0.55,
          color: isDarkMode
            ? "var(--mantine-color-dark-9)"
            : "var(--mantine-color-gray-2)",
        }}
        transitionProps={{
          exitDuration: 300,
          duration: 300,
          transition: directionIs("ltr") ? "skew-up" : "skew-down",
        }}
        onClose={() => setOpened(false)}
        dir={directionIs("ltr") ? "left" : "right"}>
        <Divider />
        <Sidebar />
      </BaseDrawer>
    </>
  );
}
