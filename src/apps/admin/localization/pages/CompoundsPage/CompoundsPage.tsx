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
import compoundsService from "app/localization/services/compounds-service";
import CompoundForm from "apps/admin/localization/components/CompoundForm";
import citiesService from "apps/admin/localization/services/cities-service";
import districtsService from "../../services/districts-service";

export const compoundsColumns = [
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

function CompoundsPage() {
  return (
    <Table
      title="compounds"
      name="compounds"
      service={compoundsService}
      form={CompoundForm}
      columns={compoundsColumns}
      filters={filters}
    />
  );
}

export default withLocalizationTabs(CompoundsPage, "compounds");
