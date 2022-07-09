import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
} from "@vkontakte/vkui";
import "./index.css";
import "@vkontakte/vkui/dist/vkui.css";
import FiltersPanel from "./panels/FiltersPanel";
import AnimePanel from "./panels/AnimePanel";
import AnimeFiltersProvider from "./providers/AnimeFiltersProvider";

const App = () => {
  return (
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
  );
};

export default App;
