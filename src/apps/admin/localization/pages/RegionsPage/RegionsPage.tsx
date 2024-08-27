import {
  Table,
  actionsColumn,
  activeColumn,
  activeFilter,
  idColumn,
  imageColumn,
  localizedColumn,
  selectLazyRequestFilter,
  textFilter,
} from "@mongez/moonlight";
import withLocalizationTabs from "app/localization/components/withLocalizationTabs";
import regionsService from "app/localization/services/regions-service";
import RegionForm from "apps/admin/localization/components/RegionForm";

export const regionsColumns = [
  idColumn(),
  localizedColumn("name").sortable(),
  imageColumn("banner").sortable(),
  activeColumn(),
  actionsColumn(),
];

const filters = [
  textFilter("id"),
  textFilter("name"),
  selectLazyRequestFilter(
    "parent",
    () => regionsService.parents(),
    "parentRegion",
  ),
  activeFilter(),
];

function RegionsPage() {
  return (
    <Table
      title="regions"
      name="regions"
      service={regionsService}
      filters={filters}
      form={RegionForm}
      columns={regionsColumns}
    />
  );
}

export default withLocalizationTabs(RegionsPage, "regions");
