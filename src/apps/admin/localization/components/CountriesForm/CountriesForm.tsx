import {
  activeInput,
  createSimpleReactiveForm,
  imageInput,
  multiLingualInput,
  selectInput,
  textInput,
} from "@mongez/moonlight";
import countriesService from "apps/admin/localization/services/countries-service";
import currenciesService from "apps/admin/localization/services/currencies-service ";

const singleName = "country";
const service = countriesService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  textInput("code").required(),
  textInput("phoneCode").required(),
  selectInput("defaultCurrency").service(currenciesService),
  imageInput("flag"),
  activeInput(),
];

const CountriesForm = createSimpleReactiveForm(singleName, service, inputs);

export default CountriesForm;
