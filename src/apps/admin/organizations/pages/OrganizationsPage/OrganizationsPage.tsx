import {
  Table,
  actionsColumn,
  activeFilter,
  activeInputColumn,
  idColumn,
  textColumn,
} from "@mongez/moonlight";
import { organizationsService } from "apps/admin/organizations/services/organizations-service";
import OrganizationForm from "./OrganizationForm";

const columns = [
  idColumn(),
  textColumn("name"),
  activeInputColumn(),
  actionsColumn(),
];

const filters = [activeFilter()];

export default function OrganizationsPage() {
  return (
    <Table
      title="organizations"
      name="organizations"
      service={organizationsService}
      form={OrganizationForm}
      filters={filters}
      columns={columns}
    />
  );
}
