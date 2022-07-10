import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
import AnimeFilter from "./common/AnimeFilter";
import GenreFilter from "./GenreFilter";
import {
  animeStatuses,
  animeKinds,
  animeAgeRatings,
} from "../constants/animeCollections";

const AnimeFilters = () => {
  return (
    <Panel>
      <PanelHeader />
      <Group>
        <GenreFilter />
        <AnimeFilter title="Тип" paramName="kind" collection={animeKinds} />
        <AnimeFilter
          title="Статус"
          paramName="status"
          collection={animeStatuses}
        />
        <AnimeFilter
          title="Рейтинг"
          paramName="rating"
          collection={animeAgeRatings}
        />
      </Group>
    </Panel>
  );
};

export default AnimeFilters;
