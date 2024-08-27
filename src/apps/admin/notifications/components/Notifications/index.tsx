import {
  Indicator,
  LoadingOverlay,
  Popover,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { trans } from "@mongez/localization";
import { catchError } from "@mongez/moonlight";
import { IconBellRinging } from "@tabler/icons-react";
import { notificationsAtom } from "apps/admin/notifications/atom/notifications-counter";
import { useState } from "react";
import { getNotificationsList } from "../../services/notifications-service";
import NotificationsContent from "./NotificationsContent";

export default function Notifications() {
  const notificationsList = notificationsAtom.useValue().notifications;
  // console.log(notificationsList);
  const unseenNotifications = notificationsList.length;
  const [loading, setLoading] = useState(false);
  const opened = notificationsAtom.use("opened");
  const open = notificationsAtom.get("open");
  const close = notificationsAtom.get("close");

  const getNotifications = () => {
    if (opened) {
      close();
    } else {
      open();
    }
    setLoading(true);
    getNotificationsList()
      .then(response => {
        setLoading(false);
        notificationsAtom.update({
          ...notificationsAtom.value,
          notifications: response.data.notifications,
        });
      })
      .catch(catchError);
  };

  return (
    <Popover
      opened={opened}
      // onChange={close}
      width={400}
      position="bottom"
      transitionProps={{
        transition: "pop",
        duration: 400,
      }}
      withArrow
      shadow="md">
      <Popover.Target>
        <Tooltip zIndex={310} withArrow label={trans("notifications")}>
          <UnstyledButton>
            <Indicator
              inline
              color="green"
              size={16}
              label={unseenNotifications}
              disabled={unseenNotifications == 0}>
              <IconBellRinging
                style={{
                  marginTop: "6px",
                }}
                cursor="pointer"
                size={20}
                onClick={getNotifications}
              />
            </Indicator>
          </UnstyledButton>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        {loading && <LoadingOverlay visible={loading} />}
        <NotificationsContent />
      </Popover.Dropdown>
    </Popover>
  );
}
