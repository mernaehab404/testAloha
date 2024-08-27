import {
  activeInput,
  createReactiveForm,
  imageInput,
  multiLingualInput,
  nonPaginatedRequest,
  selectInput,
  textInput,
  textareaInput,
} from "@mongez/moonlight";
import compoundsService from "app/localization/services/compounds-service";
import { sortOrderInput } from "apps/admin/design-system/reactive-form/sort-order-input";
import citiesService from "apps/admin/localization/services/cities-service";
import districtsService from "../../services/districts-service";

const singleName = "compound";
const service = compoundsService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  multiLingualInput(textInput("saleTitle")),
  multiLingualInput(textInput("rentTitle")),
  multiLingualInput(textareaInput("description")),
  multiLingualInput(textareaInput("saleShortDescription")),
  multiLingualInput(textareaInput("rentShortDescription")),
  selectInput("city").request(nonPaginatedRequest(citiesService)),
  selectInput("district").request(nonPaginatedRequest(districtsService)),
  sortOrderInput(),
  activeInput(),
  imageInput("banner"),
];

const CompoundForm = createReactiveForm(reactiveForm => {
  reactiveForm
    .setInputs(inputs)
    .singleName(singleName)
    .service(service)
    .size("xl");
});

export default CompoundForm;
