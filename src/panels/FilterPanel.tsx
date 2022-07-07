import {
  Panel,
  PanelHeader,
  Group,
} from "@vkontakte/vkui";
import GenreFilter from "../components/GenreFilter";

const FilterPanel = () => {
  return (
    <Panel>
      <PanelHeader />
      <Group>
        <GenreFilter />
      </Group>
    </Panel>
  );
};

export default FilterPanel;
