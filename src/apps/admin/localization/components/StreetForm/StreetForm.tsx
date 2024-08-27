import {
  activeInput,
  createSimpleReactiveForm,
  multiLingualInput,
  selectInput,
  textInput,
} from "@mongez/moonlight";
import streetsService from "app/localization/services/streets-service";
import { sortOrderInput } from "apps/admin/design-system/reactive-form/sort-order-input";
import citiesService from "apps/admin/localization/services/cities-service";
import districtsService from "../../services/districts-service";

const singleName = "street";
const service = streetsService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  selectInput("city").service(citiesService),
  selectInput("district").service(districtsService),
  sortOrderInput(),
  activeInput(),
];

const CompoundForm = createSimpleReactiveForm(singleName, service, inputs);

export default CompoundForm;
