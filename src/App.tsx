import { useState } from "react";
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  FormItem,
  Checkbox,
  usePlatform,
  Separator,
  Cell,
  Avatar,
  Placeholder,
  Button,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import GenreFilterPanel from "./panels/GenreFilterPanel";
import MainPanel from "./panels/Main";

const App = () => {
  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.TABLET;

  return (
    <AppRoot>
      <SplitLayout
        style={{ justifyContent: "center" }}
        header={<PanelHeader separator={false} />}
      >
        <SplitCol width={280} maxWidth={280}>
          <GenreFilterPanel />
        </SplitCol>
        <SplitCol
          spaced={isDesktop}
          width={isDesktop ? "380px" : "100%"}
          maxWidth={isDesktop ? "380px" : "100%"}
        >
          <MainPanel />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
