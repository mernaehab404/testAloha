import React from "react";
import { createReactForm, activeInput, textInput } from "@mongez/moonlight";
import { projectsService } from "apps/admin/projects/services/projects-service";

const singleName = "project";
const service = projectsService;

const inputs = [textInput("name"), activeInput()];

const ProjectForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(ProjectForm);
