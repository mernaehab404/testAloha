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
import { platformsService } from "apps/admin/platforms/services/platforms-service";
import PlatformForm from "./PlatformForm";

const columns = [idColumn(), textColumn("name"), actionsColumn()];

const filters = [activeFilter()];

export default function PlatformsPage() {
  return (
    <Table
      title="platforms"
      name="platforms"
      service={platformsService}
      form={PlatformForm}
      filters={filters}
      columns={columns}
    />
  );
}
