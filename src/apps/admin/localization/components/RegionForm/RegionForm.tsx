import {
  activeInput,
  createReactiveForm,
  imageInput,
  multiLingualInput,
  textInput,
  textareaInput,
} from "@mongez/moonlight";
import regionsService from "app/localization/services/regions-service";
import { sortOrderInput } from "apps/admin/design-system/reactive-form/sort-order-input";

const singleName = "region";
const service = regionsService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  multiLingualInput(textInput("saleTitle")),
  multiLingualInput(textInput("rentTitle")),
  multiLingualInput(textareaInput("description")),
  multiLingualInput(textareaInput("saleShortDescription")),
  multiLingualInput(textareaInput("rentShortDescription")),
  sortOrderInput(),
  activeInput(),
  imageInput("banner"),
];

const RegionForm = createReactiveForm(reactiveForm => {
  reactiveForm
    .setInputs(inputs)
    .singleName(singleName)
    .service(service)
    .size("xl");
});

export default RegionForm;
