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
import { projectsService } from "apps/admin/projects/services/projects-service";
import ProjectForm from "./ProjectForm";

const columns = [idColumn(), textColumn("name"), actionsColumn()];

const filters = [activeFilter()];

export default function ProjectsPage() {
  return (
    <Table
      title="projects"
      name="projects"
      service={projectsService}
      form={ProjectForm}
      filters={filters}
      columns={columns}
    />
  );
}
