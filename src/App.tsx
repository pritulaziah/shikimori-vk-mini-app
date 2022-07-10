import { useState, useEffect } from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
  AdaptivityProvider,
  ConfigProvider,
  Appearance,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import FiltersPanel from "./panels/FiltersPanel";
import AnimePanel from "./panels/AnimePanel";
import AnimeFiltersProvider from "./providers/AnimeFiltersProvider";

const App = () => {
  const [scheme, setScheme] = useState(Appearance.LIGHT);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        setScheme(
          (data as { scheme: string }).scheme === "vkcom_dark"
            ? Appearance.DARK
            : Appearance.LIGHT
        );
      }
    });
  }, []);

  return (
    <ConfigProvider appearance={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <AnimeFiltersProvider>
            <SplitLayout
              style={{ justifyContent: "center" }}
              header={<PanelHeader separator={false} />}
            >
              <SplitCol width={240} maxWidth={240}>
                <FiltersPanel />
              </SplitCol>
              <SplitCol animate spaced width={"380px"} maxWidth={"380px"} fixed>
                <AnimePanel />
              </SplitCol>
            </SplitLayout>
          </AnimeFiltersProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
