import cache from "@mongez/cache";
import { Attachment, setMoonlightConfigurations } from "@mongez/moonlight";
import { atom } from "@mongez/react-atom";

export type SettingsState = {
  state: "initial" | "loading" | "loaded";
  general: {
    appName: string;
    description: string;
    primaryColor: string;
    about: string;
    brief: string;
    baseCurrency: {
      symbol: string;
      code: string;
      id: number;
      value: number;
      published: boolean;
      name: string;
    };
    defaultCurrency: {
      symbol: string;
      code: string;
      id: number;
      value: number;
      published: boolean;
      name: string;
    };
    maintenanceMode: boolean;
    watermarkPosition: string;
    watermarkOpacity: number;
    logo: Attachment;
    watermarkImage: Attachment;
    favIcon: Attachment;
    placeholderImage: Attachment;
  };
  contact: {
    address: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
    workingDays: string;
    location: {
      lat: number;
      lng: number;
    };
  };
};

function setupSettings(settings: SettingsState) {
  return settings;
}

export const settingsAtom = atom<SettingsState>({
  key: "settings",
  beforeUpdate(settings) {
    settings.state = "loaded";
    setupSettings(settings);
    cache.set("ss", settings);

    setMoonlightConfigurations({
      google: {
        map: {
          apiKey: (settings as any).integrations?.googleMap,
          country: (settings as any).integrations?.googleMapCountry,
        },
      },
    } as any);
    return settings;
  },
  default: {
    ...setupSettings(
      cache.get("ss", {
        state: "initial",
        general: {} as any,
      }),
    ),
    state: "initial", // force get updated settings
  },
});
