import { Panel, SplitLayout, SplitCol } from "@vkontakte/vkui";
import FiltersProvider from "../providers/FiltersProvider";
import AnimeFilters from "../components/AnimeFilters";
import ViewAnime from "../components/ViewAnime";
import HeaderButtonBack from "../components/common/HeaderButtonBack";
import { IPanel, Panels } from "../types/panel";

const AnimePanel = ({ id, changePanel }: IPanel) => {
  return (
    <Panel id={id}>
      <FiltersProvider>
        <SplitLayout
          style={{ justifyContent: "center" }}
          header={
            <HeaderButtonBack
              onClick={() => changePanel(Panels.Home)}
              style={{ zIndex: 1000 }}
            >
              Аниме
            </HeaderButtonBack>
          }
        >
          <SplitCol animate={false} width={240} maxWidth={240}>
            <AnimeFilters />
          </SplitCol>
          <SplitCol
            animate={false}
            spaced
            width={"380px"}
            maxWidth={"380px"}
            fixed
          >
            <ViewAnime />
          </SplitCol>
        </SplitLayout>
      </FiltersProvider>
    </Panel>
  );
};

export default AnimePanel;
