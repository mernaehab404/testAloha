import { trans } from "@mongez/localization";
import { getLocalizedValue } from "@mongez/moonlight";
import { ChartConfigurations } from "design-system/components/Chart/types";

const overviewChartConfigurations: Record<string, ChartConfigurations> = {
  mostViewedProperties: {
    label: trans("properties"),
    color: "pink",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.property.name),
  },
  mostSearchedProperties: {
    label: trans("searchedProperties"),
    color: "lime",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.property.name),
  },
  mostViewedCities: {
    label: trans("cities"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.city.name),
  },
  mostViewedCompounds: {
    label: trans("compounds"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.compound.name),
  },
  mostViewedDistricts: {
    label: trans("districts"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.district.name),
  },
};

export default overviewChartConfigurations;
