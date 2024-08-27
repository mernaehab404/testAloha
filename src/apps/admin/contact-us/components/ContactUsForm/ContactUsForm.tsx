import {
  activeInput,
  createSimpleReactiveForm,
  imageInput,
  multiLingualInput,
  textInput,
  textareaInput,
} from "@mongez/moonlight";
import contactUsUsService from "../../services/contact-us-service";

const singleName = "contactUs";
const service = contactUsUsService;

const inputs = [
  multiLingualInput(textInput("name").required().autoFocus()),
  multiLingualInput(textareaInput("shortDescription")),
  imageInput("logo").required(),
  activeInput(),
];

const ContactUsForm = createSimpleReactiveForm(singleName, service, inputs);

export default ContactUsForm;
