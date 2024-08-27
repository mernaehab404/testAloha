import URLS from "app/utils/urls";
import { guardedRoutes } from "../utils/router";
import CitiesPage from "./pages/CitiesPage";
import CompoundsPage from "./pages/CompoundsPage";
import CountriesPage from "./pages/CountriesPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import DistrictsPage from "./pages/DistrictsPage";
import RegionsPage from "./pages/RegionsPage";
import StreetsPage from "./pages/StreetsPage";

guardedRoutes([
  {
    path: URLS.localization.cities,
    component: CitiesPage,
  },
  {
    path: URLS.localization.regions,
    component: RegionsPage,
  },
  {
    path: URLS.localization.compounds,
    component: CompoundsPage,
  },
  {
    path: URLS.localization.currencies,
    component: CurrenciesPage,
  },
  {
    path: URLS.localization.streets,
    component: StreetsPage,
  },
  {
    path: URLS.localization.countries,
    component: CountriesPage,
  },
  {
    path: URLS.localization.districts,
    component: DistrictsPage,
  },
]);
