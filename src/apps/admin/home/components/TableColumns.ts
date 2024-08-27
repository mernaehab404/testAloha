import {
  actionsColumn,
  avatarColumn,
  emailColumn,
  idColumn,
  statusColumn,
  textColumn,
} from "@mongez/moonlight";
import { TableColumn } from "@mongez/moonlight/cjs/components/Table/TableProps";

export const columns: TableColumn[] = [
  idColumn(),
  avatarColumn("user", "image.url"),
  textColumn("phoneNumber"),
  emailColumn(),
  statusColumn("status", "status", {
    active: "green",
    suspended: "red",
  }),
  actionsColumn(),
];
