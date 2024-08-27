import { CacheProvider } from "@emotion/react";
import {
  CSSVariablesResolver,
  DirectionProvider,
  MantineColorScheme,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import { ModalsProvider } from "@mantine/modals";
import cache from "@mongez/cache";
import { InjectThemeAtom, ToastContainer } from "@mongez/moonlight";
import { current } from "@mongez/react";
import { useEvent } from "@mongez/react-hooks";
import { routerEvents } from "@mongez/react-router";
import { useState } from "react";
import { cacheValue, styleCaches } from "../BaseLayout/LayoutSettings";

const resolver: CSSVariablesResolver = theme => ({
  light: {
    "--mantine-color-text": "#31343C",
  },
  dark: {
    "--mantine-color-text": theme.colors.gray[4],
  },
  variables: {
    "--mantine-color-text": theme.colors.dark[0],
  },
});

export default function App({ children }: any) {
  const [cacheProvider, setCacheProvider] = useState(cacheValue);

  const [colorScheme] = useState<MantineColorScheme>(
    cache.get("colorScheme", "light"),
  );

  useEvent(() =>
    routerEvents.onLocaleChanging(localeCode => {
      setCacheProvider(styleCaches[localeCode]);
    }),
  );

  const localeCode = current("localeCode");

  return (
    <CacheProvider value={cacheProvider}>
      <DirectionProvider>
        <MantineProvider
          defaultColorScheme={colorScheme}
          cssVariablesResolver={resolver}
          theme={{
            fontFamily:
              localeCode === "ar"
                ? "Cairo"
                : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          }}>
          <ModalsProvider>
            <ToastContainer />
            <InjectThemeAtom />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </DirectionProvider>
    </CacheProvider>
  );
}
