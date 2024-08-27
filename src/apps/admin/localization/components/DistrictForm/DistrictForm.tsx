import {
  activeInput,
  createReactiveForm,
  imageInput,
  multiLingualInput,
  selectInput,
  textInput,
  textareaInput,
} from "@mongez/moonlight";
import { sortOrderInput } from "apps/admin/design-system/reactive-form/sort-order-input";
import citiesService from "apps/admin/localization/services/cities-service";
import districtsService from "apps/admin/localization/services/districts-service";

const singleName = "district";
const service = districtsService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  multiLingualInput(textInput("saleTitle")),
  multiLingualInput(textInput("rentTitle")),
  multiLingualInput(textareaInput("description")),
  multiLingualInput(textareaInput("saleShortDescription")),
  multiLingualInput(textareaInput("rentShortDescription")),
  selectInput("city").service(citiesService).required(),
  sortOrderInput(),
  activeInput(),
  imageInput("banner"),
];

const DistrictForm = createReactiveForm(reactiveForm => {
  reactiveForm
    .setInputs(inputs)
    .singleName(singleName)
    .service(service)
    .size("xl");
});

export default DistrictForm;
