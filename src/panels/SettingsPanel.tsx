import { Panel, Group, SimpleCell, Switch } from "@vkontakte/vkui";
import HeaderButtonBack from "../components/common/HeaderButtonBack";
import { IPanel, Panels } from "../types/panel";

const SettingsPanel = ({ id, changePanel }: IPanel) => {
  return (
    <Panel id={id}>
      <HeaderButtonBack onClick={() => changePanel(Panels.Home)}>Настройки</HeaderButtonBack>
      <Group>
        <SimpleCell Component="label" after={<Switch />}>
          Показывать 18+ конент
        </SimpleCell>
      </Group>
    </Panel>
  );
};

export default SettingsPanel;
