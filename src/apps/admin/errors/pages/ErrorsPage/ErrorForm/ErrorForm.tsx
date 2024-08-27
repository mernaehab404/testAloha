import React from "react";
import { createReactForm, activeInput, textInput } from "@mongez/moonlight";
import { errorsService } from "apps/admin/errors/services/errors-service";

const singleName = "error";
const service = errorsService;

const inputs = [textInput("name"), activeInput()];

const ErrorForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(ErrorForm);
