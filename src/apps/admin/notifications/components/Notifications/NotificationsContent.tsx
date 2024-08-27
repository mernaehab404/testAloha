import { Box, Button, Flex, ScrollArea, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { toastSuccess } from "@mongez/moonlight";
import { IconChecks, IconTrash } from "@tabler/icons-react";
import { notificationsAtom } from "../../atom/notifications-counter";
import {
  deleteNotifications,
  makeReadNotifications,
} from "../../services/notifications-service";
import { OneNotification } from "./OneNotification";

export default function NotificationsContent() {
  const notificationsList = notificationsAtom.use("notifications");

  const unseenNotifications = notificationsList.length;

  const removeNotifications = () => {
    deleteNotifications().then(() => {
      toastSuccess(trans("success"));
      notificationsAtom.reset();
    });
  };

  const checkAsSeenNotifications = () => {
    makeReadNotifications().then(() => {
      toastSuccess(trans("makeSeen"));
    });
  };

  return (
    <>
      <ScrollArea type="auto" h={400}>
        <Flex align="center" pb=".7rem" justify="space-between">
          <Text>
            {trans("youHave")}
            <span
              style={{
                fontWeight: "bold",
                padding: "0 0.3rem",
                color: unseenNotifications ? "#00ab55" : "red",
              }}>
              {unseenNotifications}
            </span>
            {trans("unreadNotifications")}
          </Text>
        </Flex>

        <Box>
          {notificationsList.map((notification: any, index: number) => {
            return <OneNotification key={index} notification={notification} />;
          })}
        </Box>
      </ScrollArea>
      <Flex justify="center" gap="md" pt={10}>
        <Button
          onClick={removeNotifications}
          variant="light"
          size="xs"
          color="red"
          rightSection={<IconTrash cursor="pointer" size="1rem" color="red" />}>
          {trans("deleteAll")}
        </Button>
        <Button
          onClick={checkAsSeenNotifications}
          variant="light"
          size="xs"
          rightSection={
            <IconChecks cursor="pointer" size="1rem" color="green" />
          }>
          {trans("readAll")}
        </Button>
      </Flex>
    </>
  );
}
