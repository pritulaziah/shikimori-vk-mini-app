import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  PanelHeader,
} from "@vkontakte/vkui";
import './index.css'
import "@vkontakte/vkui/dist/vkui.css";
import FilterPanel from "./panels/FilterPanel";
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
          <FilterPanel />
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
