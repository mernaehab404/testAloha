import {
  Table,
  actionsColumn,
  activeColumn,
  idColumn,
  localizedColumn,
  textColumn,
  textFilter,
} from "@mongez/moonlight";
import withLocalizationTabs from "app/localization/components/withLocalizationTabs";
import currenciesService from "app/localization/services/currencies-service ";
import CurrencyForm from "../../components/CurrencyForm";

export const currenciesColumns = [
  idColumn(),
  localizedColumn("name"),
  textColumn("symbol", "currencySymbol"),
  textColumn("value", "currencyValue"),
  textColumn("code", "currencyCode"),
  activeColumn(),
  actionsColumn(),
];

const filters = [textFilter("id"), textFilter("name")];

function CurrenciesPage() {
  return (
    <Table
      title="currencies"
      name="currencies"
      service={currenciesService}
      filters={filters}
      form={CurrencyForm}
      columns={currenciesColumns}
    />
  );
}

export default withLocalizationTabs(CurrenciesPage, "currencies");
