import { trans } from "@mongez/localization";
import { getLocalizedValue } from "@mongez/moonlight";
import { ChartConfigurations } from "design-system/components/Chart/types";

const homeChartConfigurations: Record<string, ChartConfigurations> = {
  mostViewedPropertiesToday: {
    label: trans("properties"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.property.name),
  },
  mostSearchedCitiesToday: {
    label: trans("cities"),
    color: "pink",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.city.name),
  },
  mostSearchedCompoundsToday: {
    label: trans("compounds"),
    color: "lime",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.compound.name),
  },
  mostSearchedDistrictsToday: {
    label: trans("districts"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.district.name),
  },
  mostSearchedRegionsToday: {
    label: trans("regions"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.region.name),
  },
  mostSearchedTypesToday: {
    label: trans("searchedTypes"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.type.name),
  },
  mostViewedPostsToday: {
    label: trans("posts"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.post.name),
  },

  mostSearchedPropertiesToday: {
    label: trans("searchedProperties"),
    color: "yellow",
    dataExtractor: data => data.map(item => item.total),
    labelExtractor: item => getLocalizedValue(item.property.name),
  },
};

export default homeChartConfigurations;
