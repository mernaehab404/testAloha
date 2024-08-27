import React from "react";
import { createReactForm, activeInput, textInput } from "@mongez/moonlight";
import { reasonsService } from "apps/admin/reasons/services/reasons-service";

const singleName = "reason";
const service = reasonsService;

const inputs = [textInput("name"), activeInput()];

const ReasonForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(ReasonForm);
