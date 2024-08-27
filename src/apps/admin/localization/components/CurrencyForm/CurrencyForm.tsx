import {
  activeInput,
  createSimpleReactiveForm,
  multiLingualInput,
  numberInput,
  textInput,
} from "@mongez/moonlight";
import currenciesService from "app/localization/services/currencies-service ";

const singleName = "currency";
const service = currenciesService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  textInput("symbol").label("currencySymbol").required(),
  numberInput("value").label("currencyValue").required().precision(6).step(1),
  textInput("code").label("currencyCode").required(),
  activeInput(),
];

const CurrencyForm = createSimpleReactiveForm(singleName, service, inputs);

export default CurrencyForm;
