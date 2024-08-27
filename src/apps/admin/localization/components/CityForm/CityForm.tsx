import {
  activeInput,
  createReactiveForm,
  imageInput,
  multiLingualInput,
  selectInput,
  textInput,
  textareaInput,
} from "@mongez/moonlight";
import citiesService from "app/localization/services/cities-service";
import { sortOrderInput } from "apps/admin/design-system/reactive-form/sort-order-input";
import regionsService from "apps/admin/localization/services/regions-service";

const singleName = "city";
const service = citiesService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  multiLingualInput(textInput("saleTitle")),
  multiLingualInput(textInput("rentTitle")),
  multiLingualInput(textareaInput("description")),
  multiLingualInput(textareaInput("saleShortDescription")),
  multiLingualInput(textareaInput("rentShortDescription")),
  selectInput("region").service(regionsService),
  sortOrderInput(),
  imageInput("banner"),
  activeInput(),
];

const CityForm = createReactiveForm(reactiveForm => {
  reactiveForm
    .setInputs(inputs)
    .singleName(singleName)
    .service(service)
    .size("xl");
});

export default CityForm;
