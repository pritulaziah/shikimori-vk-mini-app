import { Panel, SplitLayout, SplitCol, Group } from "@vkontakte/vkui";
import FiltersProvider from "../providers/FiltersProvider";
import ViewCard from "../components/ViewCard";
import HeaderButtonBack from "../components/common/HeaderButtonBack";
import { IPanel, Panels } from "../types/panel";
import Filter from "../components/common/Filter";
import GenreFilter from "../components/GenreFilter";
import { mangaStatuses, mangaKinds } from "../constants/mangaCollections";
import scoreCollection from "../constants/scoreCollection";

const MangaPanel = ({ id, changePanel }: IPanel) => {
  return (
    <Panel id={id}>
      <HeaderButtonBack
        onClick={() => changePanel(Panels.Home)}
        style={{ zIndex: 1000 }}
      >
        Случайная манга
      </HeaderButtonBack>
      <FiltersProvider>
        <SplitLayout style={{ justifyContent: "center" }}>
          <SplitCol width={240} maxWidth={240} style={{ marginTop: "15px" }}>
            <Panel>
              <Group>
                <GenreFilter type="manga" />
                <Filter title="Тип" paramName="kind" collection={mangaKinds} />
                <Filter
                  title="Статус"
                  paramName="status"
                  collection={mangaStatuses}
                />
                <Filter
                  title="Оценка"
                  paramName="score"
                  multiple={false}
                  collection={scoreCollection}
                />
              </Group>
            </Panel>
          </SplitCol>
          <SplitCol
            spaced
            width={"380px"}
            maxWidth={"380px"}
            fixed
            style={{ marginTop: "15px" }}
          >
            <Panel>
              <ViewCard type="mangas" />
            </Panel>
          </SplitCol>
        </SplitLayout>
      </FiltersProvider>
    </Panel>
  );
};

export default MangaPanel;
