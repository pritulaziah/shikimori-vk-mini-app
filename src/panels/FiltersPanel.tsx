import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
import AnimeFilter from "../components/common/AnimeFilter";
import GenreFilter from "../components/GenreFilter";
import { animeStatuses, animeKinds, animeAgeRatings } from "../constants/animeDicts";

const FiltersPanel = () => {
  return (
    <Panel>
      <PanelHeader />
      <Group>
        <GenreFilter />
        <AnimeFilter title="Тип" paramName="kind" collection={animeKinds} />
        <AnimeFilter title="Статус" paramName="status" collection={animeStatuses} />
        <AnimeFilter title="Рейтинг" paramName="rating" collection={animeAgeRatings} />
      </Group>
    </Panel>
  );
};

export default FiltersPanel;
