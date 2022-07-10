import {
  Panel,
  SplitLayout,
  SplitCol,
  PanelHeader,
  Group,
} from "@vkontakte/vkui";
import FiltersProvider from "../providers/FiltersProvider";
import ViewCard from "../components/ViewCard";
import HeaderButtonBack from "../components/common/HeaderButtonBack";
import { IPanel, Panels } from "../types/panel";
import Filter from "../components/common/Filter";
import GenreFilter from "../components/GenreFilter";
import { mangaStatuses, mangaKinds } from "../constants/mangaCollections";
import scoreCollection from '../constants/scoreCollection'

const MangaPanel = ({ id, changePanel }: IPanel) => {
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
              Случайная манга
            </HeaderButtonBack>
          }
        >
          <SplitCol animate={false} width={240} maxWidth={240}>
            <Panel>
              <PanelHeader />
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
            animate={false}
            spaced
            width={"380px"}
            maxWidth={"380px"}
            fixed
          >
            <ViewCard type="mangas" />
          </SplitCol>
        </SplitLayout>
      </FiltersProvider>
    </Panel>
  );
};

export default MangaPanel;
