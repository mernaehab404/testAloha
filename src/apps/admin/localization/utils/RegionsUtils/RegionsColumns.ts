import {
  actionsColumn,
  idColumn,
  localizedColumn,
  statusColumn,
} from "@mongez/moonlight";

export const regionsColumns = [
  idColumn(),
  localizedColumn("name"),
  localizedColumn("city.name", "city"),
  statusColumn("status", "status", {
    enabled: "green",
    disabled: "red",
  }),
  actionsColumn(),
];
