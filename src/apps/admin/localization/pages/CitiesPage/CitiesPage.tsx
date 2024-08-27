import {
  Table,
  actionsColumn,
  activeColumn,
  idColumn,
  localizedColumn,
  selectLazyRequestFilter,
  textFilter,
} from "@mongez/moonlight";
import withLocalizationTabs from "app/localization/components/withLocalizationTabs";
import citiesService from "app/localization/services/cities-service";
import CityForm from "apps/admin/localization/components/CityForm";
import regionsService from "../../services/regions-service";

export const citiesColumns = [
  idColumn(),
  localizedColumn("name").sortable(),
  localizedColumn("region.name", "region").sortable(),
  activeColumn(),
  actionsColumn(),
];

const filters = [
  textFilter("id"),
  textFilter("name"),
  selectLazyRequestFilter("regions", () => regionsService.list()),
];

function CitiesPage() {
  return (
    <Table
      title="cities"
      name="cities"
      service={citiesService}
      form={CityForm}
      columns={citiesColumns}
      filters={filters}
    />
  );
}

export default withLocalizationTabs(CitiesPage, "cities");
