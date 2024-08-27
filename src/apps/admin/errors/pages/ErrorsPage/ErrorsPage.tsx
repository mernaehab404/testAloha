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
import { errorsService } from "apps/admin/errors/services/errors-service";
import ErrorForm from "./ErrorForm";

const columns = [idColumn(), textColumn("name"), actionsColumn()];

const filters = [activeFilter()];

export default function ErrorsPage() {
  return (
    <Table
      title="errors"
      name="errors"
      service={errorsService}
      form={ErrorForm}
      filters={filters}
      columns={columns}
    />
  );
}
