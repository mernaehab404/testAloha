import {
  activeInput,
  createReactForm,
  emailInput,
  multiSelectInput,
  nonPaginatedRequest,
  passwordInput,
  switchInput,
  textInput,
} from "@mongez/moonlight";
import { usersService } from "apps/admin/users/services/users-service";
import React from "react";
import { organizationsService } from "../../../../organizations/services/organizations-service";

const singleName = "user";
const service = usersService;

const inputs = [
  textInput("name").required(),
  emailInput("email").required(),
  passwordInput("password").requiredIfNotExists("id"),
  multiSelectInput("organizations").request(
    nonPaginatedRequest(organizationsService),
  ),
  switchInput("isAdmin"),
  activeInput(),
];

const UserForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(UserForm);
