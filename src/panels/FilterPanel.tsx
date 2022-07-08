import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
import AnimeFilter from "../components/common/AnimeFilter";
import GenreFilter from "../components/GenreFilter";
import { animeStatuses, animeKinds, animeAgeRatings } from "../constants/animeDicts";

const FilterPanel = () => {
  return (
    <Panel>
      <PanelHeader />
      <Group>
        <AnimeFilter filterName="Тип" collection={animeKinds} />
        <AnimeFilter filterName="Статус" collection={animeStatuses} />
        <AnimeFilter filterName="Рейтинг" collection={animeAgeRatings} />
        <GenreFilter />
      </Group>
    </Panel>
  );
};

export default FilterPanel;
