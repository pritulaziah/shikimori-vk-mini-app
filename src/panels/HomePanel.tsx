import { PanelHeader, Panel, Group, Cell } from "@vkontakte/vkui";
import { IPanel, Panels } from "../types/panel";

const HomePanel = ({ id, changePanel }: IPanel) => {
  return (
    <Panel id={id}>
      <PanelHeader>Случайное аниме и манга</PanelHeader>
      <Group>
        <Cell expandable onClick={() => changePanel(Panels.Anime)}>
          Аниме
        </Cell>
        <Cell expandable onClick={() => changePanel(Panels.Mange)}>
          Манга
        </Cell>
        <Cell expandable onClick={() => changePanel(Panels.Settings)}>
          Настройки
        </Cell>
      </Group>
    </Panel>
  );
};

export default HomePanel;
