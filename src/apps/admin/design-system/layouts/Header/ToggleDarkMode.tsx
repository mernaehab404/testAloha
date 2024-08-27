import { ActionIcon, Box, Tooltip, useMantineColorScheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { trans } from "@mongez/localization";
import { modButtons } from "@mongez/moonlight";
import Is from "@mongez/supportive-is";
import { IconMoonFilled, IconSun } from "@tabler/icons-react";

const shortcut = Is.desktop() ? modButtons(["j"]) : "";

export default function ToggleDarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // useHotkeys([["mod", "j"], () => toggleColorScheme()]);
  useHotkeys([["mod+J", toggleColorScheme]]);

  const Icon = colorScheme === "light" ? IconSun : IconMoonFilled;

  return (
    <Box>
      <Tooltip
        position="bottom"
        withArrow
        label={
          <>
            {trans("switchToStyleMode", {
              mode: colorScheme === "dark" ? "light" : "dark",
            })}
            {shortcut}
          </>
        }>
        <ActionIcon
          onClick={toggleColorScheme}
          variant="transparent"
          color={colorScheme === "dark" ? "white" : "yellow.7"}>
          <Icon
            style={{
              marginTop: "6px",
            }}
            cursor="pointer"
          />
        </ActionIcon>
      </Tooltip>
    </Box>
  );
}
