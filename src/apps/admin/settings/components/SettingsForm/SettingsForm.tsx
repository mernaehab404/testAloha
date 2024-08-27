import { trans } from "@mongez/localization";
import {
  InputBuilder,
  createReactForm,
  emailInput,
  formTab,
  googleMapInput,
  hiddenInput,
  imageInput,
  integerInput,
  multiLingualInput,
  parseError,
  selectInput,
  selectInputOptions,
  switchInput,
  textInput,
  textareaInput,
  toastLoading,
  urlInput,
} from "@mongez/moonlight";
import settingsService from "app/settings/services/settings-service";
import currenciesService from "apps/admin/localization/services/currencies-service ";

const socialTypes = [
  "facebook",
  "twitter",
  "instagram",
  "youtube",
  "linkedin",
  "pinterest",
  "snapchat",
];

const socialInputs: InputBuilder[] = [];
socialTypes.forEach(type => {
  socialInputs.push(hiddenInput(`settings.social.${type}.type`, "text"));
  socialInputs.push(
    urlInput("settings.social." + type + ".value")
      .label(type)
      .placeholder(type),
  );
});

const inputs = [
  hiddenInput("settings.general.projectName.type", "localization"),
  multiLingualInput(
    textInput("settings.general.projectName.value")
      .placeholder("projectName")
      .label("projectName")
      .required()
      .autoFocus(),
  ).description("appNameHint"),

  hiddenInput("settings.general.description.type", "localization"),
  multiLingualInput(
    textareaInput("settings.general.description.value")
      .placeholder("description")
      .label("description")
      .minRows(8)
      .required(),
  ).description("metaDescriptionHint"),

  hiddenInput("settings.general.about.type", "localization"),

  multiLingualInput(
    textareaInput("settings.general.about.value")
      .placeholder("about")
      .label("about")
      .minRows(8),
  ).description("aboutHint"),

  hiddenInput("settings.general.brief.type", "localization"),

  multiLingualInput(
    textareaInput("settings.general.brief.value")
      .placeholder("brief")
      .label("brief")
      .minRows(8),
  ).description("briefHint"),

  // default currency
  hiddenInput("settings.general.defaultCurrency.type", "integer"),
  selectInput("settings.general.defaultCurrency.value")
    .service(currenciesService)
    .label("defaultCurrency")
    .placeholder("defaultCurrency")
    .description("defaultCurrencyHint")
    .required(),
  hiddenInput("settings.general.baseCurrency.type", "integer"),
  selectInput("settings.general.baseCurrency.value")
    .service(currenciesService)
    .label("baseCurrency")
    .placeholder("baseCurrency")
    .description("baseCurrencyHint")
    .required(),

  // maintenance mode
  hiddenInput("settings.general.maintenanceMode.type", "boolean"),
  switchInput("settings.general.maintenanceMode.value")
    .label("maintenance")
    .description("maintenanceModeHint"),

  // logo
  hiddenInput("settings.general.logo.type", "file"),
  imageInput("settings.general.logo.value").label("logo").required(),
  // footer logo
  hiddenInput("settings.general.footerLogo.type", "file"),
  imageInput("settings.general.footerLogo.value").label("footerLogo"),

  // logo and favicon

  // favicon
  hiddenInput("settings.general.favIcon.type", "file"),
  imageInput("settings.general.favIcon.value")
    .label("favIcon")
    .hint("favIconHint"),

  // hiddenInput("settings.general.placeholderImage.type", "file"),
  // imageInput("settings.general.placeholderImage.value")
  //   .label("placeholderImage")
  //   .description("placeholderImageHint"),

  // primary color
  hiddenInput("settings.general.primaryColor.type", "string"),
  hiddenInput("settings.general.primaryColor.value", "green"),
  // reactiveInput(
  //   PrimaryColorSelector,
  //   "settings.general.primaryColor.value",
  // ).col(12),
];

const contactSettingsInputs = [
  hiddenInput("settings.contact.email.type", "text"),
  emailInput("settings.contact.email.value")
    .label("email")
    .placeholder("email")
    .description("contactHint"),

  hiddenInput("settings.contact.phoneNumber.type", "text"),
  textInput("settings.contact.phoneNumber.value")
    .label("phoneNumber")
    .description("contactHint")
    .placeholder("phoneNumber"),

  hiddenInput("settings.contact.address.type", "localization"),
  multiLingualInput(
    textareaInput("settings.contact.address.value")
      .rows(2)
      .label("address")
      .placeholder("address"),
  ).description("contactHint"),

  hiddenInput("settings.contact.workingDays.type", "localization"),
  multiLingualInput(
    textareaInput("settings.contact.workingDays.value")
      .label("workingDays")
      .rows(2)
      .placeholder("workingDays"),
  ),

  // location
  hiddenInput("settings.contact.location.type", "location"),
  googleMapInput("settings.contact.location.value")
    .placeholder("googleLocation")
    .label("googleLocation"),
];

const integrationsInputs = [
  hiddenInput("settings.integrations.googleMap.type", "text"),
  textInput("settings.integrations.googleMap.value")
    .label("googleMapApi")
    .placeholder("googleMapApi")
    .description("googleMapApiHint")
    .hint("googleMapApiHintUsage"),

  hiddenInput("settings.integrations.googleAnalytics.type", "text"),
  textInput("settings.integrations.googleAnalytics.value")
    .label("googleAnalytics")
    .placeholder("googleAnalytics")
    .description("googleAnalyticsHint"),

  hiddenInput("settings.integrations.googleMapCountry.type", "text"),
  textInput("settings.integrations.googleMapCountry.value")
    .label("googleMapCountry")
    .placeholder("googleMapCountry")
    .description("googleMapCountryHint")
    .hint("googleMapCountryHintUsage"),

  // hiddenInput("settings.integrations.googleTagManager.type", "text"),
  // textInput("settings.integrations.googleTagManager.value")
  //   .label("googleTagManager")
  //   .placeholder("googleTagManager")
  //   .description("googleTagManagerHint"),

  // facebook app id
  hiddenInput("settings.integrations.facebookAppId.type", "text"),
  textInput("settings.integrations.facebookAppId.value")
    .label("facebookAppId")
    .placeholder("facebookAppId")
    .description("facebookAppIdHint"),

  hiddenInput("settings.integrations.facebookPixel.type", "text"),
  textInput("settings.integrations.facebookPixel.value")
    .label("facebookPixel")
    .placeholder("facebookPixel")
    .description("facebookPixelHint"),
];

const _awsInputs = [
  hiddenInput("settings.aws.provider.type", "text"),
  textInput("settings.aws.provider.value")
    .label("provider")
    .placeholder("provider"),
  hiddenInput("settings.aws.accessKey.type", "text"),
  textInput("settings.aws.accessKey.value")
    .label("accessKey")
    .placeholder("accessKey"),
  hiddenInput("settings.aws.secretKey.type", "text"),
  textInput("settings.aws.secretKey.value")
    .label("secretKey")
    .placeholder("secretKey"),
  hiddenInput("settings.aws.bucketName.type", "text"),
  textInput("settings.aws.bucketName.value")
    .label("bucketName")
    .placeholder("bucketName"),
  hiddenInput("settings.aws.region.type", "text"),
  textInput("settings.aws.region.value").label("region").placeholder("region"),
  hiddenInput("settings.aws.url.type", "text"),
  textInput("settings.aws.url.value").label("url").placeholder("url"),
  hiddenInput("settings.aws.cloudFrontUrl.type", "text"),
  textInput("settings.aws.cloudFrontUrl.value")
    .label("cloudFrontUrl")
    .placeholder("cloudFrontUrl"),
];

const propertiesInputs = [
  hiddenInput("settings.properties.displayAgentOnCard.type", "boolean"),
  switchInput("settings.properties.displayAgentOnCard.value")
    .label("displayAgentOnCard")
    .placeholder("displayAgentOnCard"),
];

const accountInputs = [
  hiddenInput("settings.account.autoActivate.type", "boolean"),
  switchInput("settings.account.autoActivate.value")
    .label("autoActivateAccount")
    .placeholder("autoActivateAccount"),
];

const watermarkInputs = [
  // watermark image
  // watermark position

  hiddenInput("settings.watermark.position.type", "string"),
  selectInputOptions("settings.watermark.position.value", [
    "left",
    "right",
    "center",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "topCenter",
    "bottomCenter",
  ])
    .label("watermarkPosition")
    .placeholder("watermarkPosition"),

  hiddenInput("settings.watermark.maxSize.type", "int"),
  integerInput("settings.watermark.maxSize.value")
    .label("watermarkMaxSize")
    .placeholder("watermarkMaxSize")
    .min(1)
    .max(100),

  hiddenInput("settings.watermark.addDomain.type", "boolean"),
  switchInput("settings.watermark.addDomain.value")
    .label("addDomain")
    .description("addDomainHint"),

  hiddenInput("settings.watermark.image.type", "file"),
  imageInput("settings.watermark.image.value")
    .label("watermarkImage")
    .description("watermarkImageHint"),

  // watermark opacity
  // hiddenInput("settings.general.watermarkOpacity.type", "float"),
  // integerInput("settings.general.watermarkOpacity.value")
  //   .label("watermarkOpacity")
  //   .placeholder("watermarkOpacity")
  //   .description("watermarkOpacityHint")
  //   .step(10)
  //   .max(100)
  //   .min(0),
];

const tabs = [
  formTab("general").setInputs(inputs),
  formTab("socialMedia").setInputs(socialInputs),
  formTab("watermark").setInputs(watermarkInputs),
  formTab("properties").setInputs(propertiesInputs),
  // formTab("aws").setInputs(awsInputs),
  formTab("account").setInputs(accountInputs),
  formTab("contactSettings").setInputs(contactSettingsInputs),
  formTab("integrations").setInputs(integrationsInputs),
];

const SettingsForm = createReactForm(reactiveForm => {
  reactiveForm
    .inModal(false)
    .setTabs(tabs)
    .heading(trans("settings"))
    .onSubmit(async ({ values, form, setIslLoading }) => {
      const loading = toastLoading(trans("savingSettings"));

      settingsService
        .updateSettings(values)
        .then(() => {
          loading.success(trans("settingsSaved"));
        })
        .catch(error => {
          loading.error(parseError(error));
        })
        .finally(() => {
          form.submitting(false);
          setIslLoading(false);
        });
    });
});

export default SettingsForm;
