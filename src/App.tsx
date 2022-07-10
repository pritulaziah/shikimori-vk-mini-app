import { useState, useEffect } from "react";
import {
  AppRoot,
  AdaptivityProvider,
  ConfigProvider,
  Appearance,
  View,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import AnimePanel from "./panels/AnimePanel";
import HomePanel from "./panels/HomePanel";
import SettingsPanel from "./panels/SettingsPanel";
import { Panels } from "./types/panel";

const App = () => {
  const [activePanel, setActivePanel] = useState<Panels>(Panels.Home);
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
          <View activePanel={activePanel}>
            <HomePanel id={Panels.Home} changePanel={setActivePanel} />
            <AnimePanel id={Panels.Anime} changePanel={setActivePanel} />
            <SettingsPanel id={Panels.Settings} changePanel={setActivePanel} />
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
