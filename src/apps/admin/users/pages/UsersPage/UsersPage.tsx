import {
  Table,
  actionsColumn,
  activeFilter,
  activeInputColumn,
  booleanInputColumn,
  dateColumn,
  emailColumn,
  idColumn,
  textColumn,
} from "@mongez/moonlight";
import { usersService } from "apps/admin/users/services/users-service";
import UserForm from "./UserForm";

const columns = [
  idColumn(),
  textColumn("name"),
  emailColumn("email"),
  textColumn("organizations.0.name", "organization"),
  dateColumn("createdAt"),
  booleanInputColumn("isAdmin"),
  activeInputColumn(),
  actionsColumn(),
];

const filters = [activeFilter()];

export default function UsersPage() {
  return (
    <Table
      title="users"
      name="users"
      service={usersService}
      form={UserForm}
      filters={filters}
      columns={columns}
    />
  );
}
