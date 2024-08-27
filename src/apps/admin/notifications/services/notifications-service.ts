import endpoint from "shared/endpoint";

/**
 * Get Notifications list
 */
export function getNotificationsList(params: any = {}) {
  return endpoint.get("/notifications", {
    params,
  });
}

/**
 * delete one notification
 */
export function deleteNotification(id: string | number) {
  return endpoint.delete(`/notifications/${id}`);
}

/**
 * delete all notifications
 */
export function deleteNotifications() {
  return endpoint.delete(`/notifications`);
}

/**
 * make read one notification
 */
export function makeReadNotification(id: string | number) {
  return endpoint.patch(`/notifications/${id}/seen`);
}

/**
 * make read all notifications
 */
export function makeReadNotifications() {
  return endpoint.patch(`/notifications/seen`);
}
