import React from "react";
import { createReactForm, activeInput, textInput } from "@mongez/moonlight";
import { organizationsService } from "apps/admin/organizations/services/organizations-service";

const singleName = "organization";
const service = organizationsService;

const inputs = [textInput("name"), activeInput()];

const OrganizationForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(OrganizationForm);
