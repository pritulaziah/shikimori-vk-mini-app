import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  PanelHeader,
} from "@vkontakte/vkui";
import "./index.css";
import "@vkontakte/vkui/dist/vkui.css";
import FiltersPanel from "./panels/FiltersPanel";
import AnimePanel from "./panels/AnimePanel";
import AnimeFiltersProvider from "./providers/AnimeFiltersProvider";

const App = () => {
  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.TABLET;

  return (
    <AppRoot>
      <AnimeFiltersProvider>
        <SplitLayout
          style={{ justifyContent: "center" }}
          header={<PanelHeader separator={false} />}
        >
          <SplitCol width={280} maxWidth={280}>
            <FiltersPanel />
          </SplitCol>
          <SplitCol
            spaced={isDesktop}
            width={isDesktop ? "380px" : "100%"}
            maxWidth={isDesktop ? "380px" : "100%"}
            fixed
          >
            <AnimePanel />
          </SplitCol>
        </SplitLayout>
      </AnimeFiltersProvider>
    </AppRoot>
  );
};

export default App;
