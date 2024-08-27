import {
  actionsColumn,
  idColumn,
  localizedColumn,
  Table,
} from "@mongez/moonlight";
import UsersGroupsForm from "../../components/UsersGroupForm";
import { usersGroupsService } from "../../services/users-groups-service";

const usersGroupsColumns = [
  idColumn(),
  localizedColumn("name"),
  actionsColumn(),
];

export default function UsersGroupsPage() {
  return (
    <Table
      title="usersGroups"
      name="usersGroups"
      service={usersGroupsService}
      form={UsersGroupsForm}
      columns={usersGroupsColumns}
    />
  );
}
