import {
  actionsColumn,
  idColumn,
  localizedColumn,
  statusColumn,
} from "@mongez/moonlight";

export const compoundsColumns = [
  idColumn(),
  localizedColumn("name"),
  localizedColumn("region.name", "region"),
  statusColumn("status", "status", {
    enabled: "green",
    disabled: "red",
  }),
  actionsColumn(),
];
