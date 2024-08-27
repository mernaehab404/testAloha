import {
  Table,
  actionsColumn,
  activeColumn,
  activeFilter,
  idColumn,
  localizedColumn,
  selectLazyRequestFilter,
  textFilter,
} from "@mongez/moonlight";
import withLocalizationTabs from "app/localization/components/withLocalizationTabs";
import streetsService from "app/localization/services/streets-service";
import StreetForm from "apps/admin/localization/components/StreetForm";
import citiesService from "apps/admin/localization/services/cities-service";
import districtsService from "apps/admin/localization/services/districts-service";

export const streetsColumns = [
  idColumn(),
  localizedColumn("name"),
  localizedColumn("city.name", "city"),
  localizedColumn("district.name", "district"),
  activeColumn(),
  actionsColumn(),
];

const filters = [
  textFilter("id"),
  textFilter("name"),
  selectLazyRequestFilter("city", () =>
    citiesService.list({
      paginate: false,
    }),
  ),
  selectLazyRequestFilter("district", () =>
    districtsService.list({
      paginate: false,
    }),
  ),
  activeFilter(),
];

function StreetsPage() {
  return (
    <Table
      title="streets"
      name="streets"
      service={streetsService}
      form={StreetForm}
      filters={filters}
      columns={streetsColumns}
    />
  );
}

export default withLocalizationTabs(StreetsPage, "streets");
