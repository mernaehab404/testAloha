import { Box, Flex, Text, ThemeIcon, Tooltip } from "@mantine/core";
import { trans } from "@mongez/localization";
import { toastSuccess } from "@mongez/moonlight";
import {
  IconChecks,
  IconMail,
  IconReport,
  IconTrash,
} from "@tabler/icons-react";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";
import URLS from "apps/admin/utils/urls";
import { notificationsAtom } from "../../atom/notifications-counter";
import {
  deleteNotification,
  makeReadNotification,
} from "../../services/notifications-service";

export type NotificationProps = {
  id: number;
  createdAt: {
    humanTime: string;
    format: string;
  };
  message: string;
  type: string;
  seen?: boolean;
  placeholders: {
    id: number;
  };
};

export function OneNotification({
  notification,
}: {
  notification: NotificationProps;
}) {
  const { message, type, createdAt, seen, id } = notification;
  const close = notificationsAtom.get("close");

  const removeNotification = () => {
    deleteNotification(id).then(() => {
      toastSuccess(trans("success"));
    });
  };
  const checkAsSeenNotification = e => {
    e.stopPropagation();
    makeReadNotification(id).then(() => {
      toastSuccess(trans("makeSeen"));
    });
  };
  return (
    <>
      <Box my=".5rem" p=".3rem">
        <Flex align="center" gap="md">
          <ThemeIcon
            variant="light"
            size={30}
            color={
              type == "contactMessage"
                ? "gray"
                : type == "newOrder"
                  ? "green"
                  : "red"
            }>
            {type == "contactMessage" ? (
              <IconMail />
            ) : type == "newOrder" ? (
              <IconReport />
            ) : (
              <IconReport />
            )}
          </ThemeIcon>
          <Flex direction="column" gap=".5rem" w="90%">
            <UnStyledLink
              onClick={close}
              to={type == "contactMessage" ? URLS.contactUs : URLS.contactUs}>
              <Box>
                <Text fw={seen ? undefined : "800"}>{message}</Text>
              </Box>
            </UnStyledLink>
            <Flex justify="space-between" align="center">
              <Tooltip zIndex={310} withArrow label={createdAt.format}>
                <Text size="xs" c="dimmed">
                  {createdAt.humanTime}
                </Text>
              </Tooltip>
              <Flex align="center" gap="md">
                <Tooltip withArrow label={trans("delete")} color="red">
                  <IconTrash
                    onClick={removeNotification}
                    cursor="pointer"
                    size="1.3rem"
                    color="red"
                  />
                </Tooltip>
                {!seen && (
                  <Tooltip withArrow label={trans("makeAsRead")} color="green">
                    <IconChecks
                      onClick={e => checkAsSeenNotification(e)}
                      cursor="pointer"
                      size="1.3rem"
                      color="green"
                    />
                  </Tooltip>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
