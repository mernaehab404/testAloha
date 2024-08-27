import events from "@mongez/events";

function createToggledEvent(eventName: string) {
  return {
    onClose(callback: any) {
      return events.subscribe(eventName + ".close", callback);
    },
    close() {
      return events.trigger(eventName + ".close");
    },
    open() {
      return events.trigger(eventName + ".open");
    },
    onOpen(callback: any) {
      return events.subscribe(eventName + ".open", callback);
    },
  };
}

function quickCreateEvent(eventName: string) {
  return {
    onCreate(callback: any) {
      return events.subscribe(eventName + ".create", callback);
    },
    create(response: any) {
      return events.trigger(eventName + ".create", response);
    },
  };
}
export const drawerEvents = createToggledEvent("sidebar");

export const updateProfileEvents = createToggledEvent("update-profile");
export const changePasswordEvents = createToggledEvent("change-password");
export const quickCreatePropertyEvents = createToggledEvent("create-property");

export const quickCreateEvents = quickCreateEvent("create");
