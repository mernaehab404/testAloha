import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  IconChevronDown,
  IconLock,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { performLogout } from "apps/admin/account/helpers/accountFormSubmit";
import { useState } from "react";
import user from "user";
import ChangePassword from "./ChangePassword";
import UpdateProfile from "./UpdateProfile";
import { changePasswordEvents, updateProfileEvents } from "./events";

export default function ProfileDropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Group>
      <Menu
        opened={opened}
        onChange={setOpened}
        width={200}
        transitionProps={{
          transition: "pop-top-right",
        }}
        position="bottom-end">
        <Menu.Target>
          <UnstyledButton>
            <Group gap={10}>
              <Avatar
                src={user.get("image.url")}
                alt="user"
                radius="xl"
                size={30}
              />
              <Text size="sm" mr={3}>
                {user.get("name")}
              </Text>
              <IconChevronDown size={12} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{trans("settings")}</Menu.Label>

          <Menu.Item
            onClick={updateProfileEvents.open}
            leftSection={<IconSettings size={14} stroke={1.5} />}>
            {trans("accountSettings")}
          </Menu.Item>

          <Menu.Item
            leftSection={<IconLock size={14} stroke={1.5} />}
            onClick={changePasswordEvents.open}>
            {trans("changePassword")}
          </Menu.Item>
          <Menu.Item
            onClick={performLogout}
            color="red"
            leftSection={<IconLogout size={14} stroke={1.5} />}>
            {trans("logout")}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <UpdateProfile />
      <ChangePassword />
    </Group>
  );
}
