import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Random } from "@mongez/reinforcements";
import settingsService from "app/settings/services/settings-service";
import SettingsForm from "../../components/SettingsForm";

const mapSettingsData = response => {
  const settingsList = {
    id: Random.id(),
    settings: {},
  };

  const groups = response.data.settings;

  for (const group in groups) {
    if (!settingsList.settings[group]) {
      settingsList.settings[group] = {};
    }

    for (const setting in groups[group]) {
      settingsList.settings[group][setting] = {
        value: groups[group][setting],
      };
    }
  }

  return settingsList;
};

export default function SettingsPage() {
  return (
    <>
      <Helmet title={trans("settings")} />
      <SettingsForm
        mapLoadedData={mapSettingsData}
        initialLoad={() =>
          settingsService.list({
            paginate: false,
          })
        }
      />
    </>
  );
}
