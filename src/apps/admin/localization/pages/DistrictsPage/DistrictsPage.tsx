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
import districtsService from "apps/admin/localization/services/districts-service";
import DistrictForm from "../../components/DistrictForm/DistrictForm";
import citiesService from "../../services/cities-service";

export const Columns = [
  idColumn(),
  localizedColumn("name").sortable(),
  localizedColumn("city.name", "city").sortable(),
  activeColumn(),
  actionsColumn(),
];

export const filters = [
  textFilter("id"),
  textFilter("name"),
  selectLazyRequestFilter("city", () => citiesService.list()),
];

function DistrictsPage() {
  return (
    <Table
      title="districts"
      name="districts"
      service={districtsService}
      form={DistrictForm}
      columns={Columns}
      filters={filters}
    />
  );
}

export default withLocalizationTabs(DistrictsPage, "districts");
