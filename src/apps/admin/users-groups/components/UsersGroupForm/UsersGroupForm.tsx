import { createReactForm, reactiveInput, textInput } from "@mongez/moonlight";
import usersGroupsService from "apps/admin/administrators/services/usersGroup-service";
import UserGroupsPermissions from "../UserGroupsPermissions";

const singleName = "usersGroup";
const service = usersGroupsService;

const inputs = [
  textInput("name").required().col(12),
  reactiveInput(UserGroupsPermissions).col(12),
];

const UsersGroupsForm = createReactForm(reactiveForm => {
  reactiveForm
    .size("lg")
    .setInputs(inputs)
    .service(service)
    .singleName(singleName);
});

export default UsersGroupsForm;
