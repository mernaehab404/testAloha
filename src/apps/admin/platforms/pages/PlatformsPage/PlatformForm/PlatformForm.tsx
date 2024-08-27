import React from "react";
import { createReactForm, activeInput, textInput } from "@mongez/moonlight";
import { platformsService } from "apps/admin/platforms/services/platforms-service";

const singleName = "platform";
const service = platformsService;

const inputs = [textInput("name"), activeInput()];

const PlatformForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(PlatformForm);
