import {
  Panel,
  SplitLayout,
  SplitCol,
  Group,
} from "@vkontakte/vkui";
import FiltersProvider from "../providers/FiltersProvider";
import ViewCard from "../components/ViewCard";
import HeaderButtonBack from "../components/common/HeaderButtonBack";
import { IPanel, Panels } from "../types/panel";
import Filter from "../components/common/Filter";
import GenreFilter from "../components/GenreFilter";
import {
  animeStatuses,
  animeKinds,
  animeAgeRatings,
} from "../constants/animeCollections";
import scoreCollection from "../constants/scoreCollection";

const AnimePanel = ({ id, changePanel }: IPanel) => {
  return (
    <Panel id={id}>
      <HeaderButtonBack
        onClick={() => changePanel(Panels.Home)}
        style={{ zIndex: 1000 }}
        separator={false}
      >
        Случайное Аниме
      </HeaderButtonBack>
      <FiltersProvider>
        <SplitLayout style={{ justifyContent: "center" }}>
          <SplitCol width={240} maxWidth={240} style={{ marginTop: '15px' }}>
            <Panel>
              <Group>
                <GenreFilter type="anime" />
                <Filter title="Тип" paramName="kind" collection={animeKinds} />
                <Filter
                  title="Статус"
                  paramName="status"
                  collection={animeStatuses}
                />
                <Filter
                  title="Оценка"
                  paramName="score"
                  multiple={false}
                  collection={scoreCollection}
                />
                <Filter
                  title="Рейтинг"
                  paramName="rating"
                  collection={animeAgeRatings}
                />
              </Group>
            </Panel>
          </SplitCol>
          <SplitCol
            spaced
            width={"380px"}
            maxWidth={"380px"}
            fixed
            style={{ marginTop: '15px' }}
          >
            <Panel>
              <ViewCard type="animes" />
            </Panel>
          </SplitCol>
        </SplitLayout>
      </FiltersProvider>
    </Panel>
  );
};

export default AnimePanel;
