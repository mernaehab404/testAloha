import URLS from "apps/admin/utils/urls";
import withTabs from "design-system/components/Tabs/withTabs";

const tabsList = [
  "cities",
  "regions",
  "districts",
  "compounds",
  "streets",
  "currencies",
];

const localizationTabs = withTabs(tabsList, URLS.localization);

export default localizationTabs;
