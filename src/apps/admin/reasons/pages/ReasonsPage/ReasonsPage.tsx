import React from "react";
import {
  Table,
  actionsColumn,
  activeFilter,
  circleImage,
  idColumn,
  localizedColumn,
  activeColumn,
  textFilter,
  textColumn,
} from "@mongez/moonlight";
import { reasonsService } from "apps/admin/reasons/services/reasons-service";
import ReasonForm from "./ReasonForm";

const columns = [idColumn(), textColumn("name"), actionsColumn()];

const filters = [activeFilter()];

export default function ReasonsPage() {
  return (
    <Table
      title="reasons"
      name="reasons"
      service={reasonsService}
      form={ReasonForm}
      filters={filters}
      columns={columns}
    />
  );
}
