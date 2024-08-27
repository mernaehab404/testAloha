import {
  actionsColumn,
  activeColumn,
  idColumn,
  localizedColumn,
} from "@mongez/moonlight";

export const citiesColumns = [
  idColumn(),
  localizedColumn("name"),
  activeColumn(),
  actionsColumn(),
];
