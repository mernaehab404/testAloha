import { atom } from "@mongez/react-atom";

export const notificationsAtom = atom({
  key: "notifications",
  default: {
    notifications: [],
    opened: false,
    open() {
      notificationsAtom.change("opened", true);
    },
    close() {
      notificationsAtom.change("opened", false);
    },
  },
});
