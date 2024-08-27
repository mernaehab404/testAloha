import {
  Table,
  actionsColumn,
  activeColumn,
  activeFilter,
  idColumn,
  imageColumn,
  localizedColumn,
  textColumn,
  textFilter,
} from "@mongez/moonlight";
import withLocalizationTabs from "app/localization/components/withLocalizationTabs";
import countriesService from "apps/admin/localization/services/countries-service";
import CountriesForm from "../../components/CountriesForm";

const countriesColumns = [
  idColumn(),
  localizedColumn("name"),
  localizedColumn("defaultCurrency.name", "currency"),
  textColumn("code"),
  textColumn("phoneCode"),
  imageColumn("flag.url", "flag"),
  activeColumn(),
  actionsColumn(),
];

const filters = [textFilter("name"), activeFilter()];

function CountriesPage() {
  return (
    <Table
      title="countries"
      name="countries"
      service={countriesService}
      form={CountriesForm}
      columns={countriesColumns}
      filters={filters}
    />
  );
}

export default withLocalizationTabs(CountriesPage, "countries");
