import {
  Panel,
  Group,
  SimpleCell,
  Switch,
  Footer,
  Link,
  Header,
} from "@vkontakte/vkui";
import HeaderButtonBack from "components/common/HeaderButtonBack";
import useAdult from "hooks/useAdult";
import { IPanel, Panels } from "types/panel";

const SettingsPanel = ({ id, changePanel }: IPanel) => {
  const { adult, onChangeAdult } = useAdult();

  return (
    <Panel id={id}>
      <HeaderButtonBack onClick={() => changePanel(Panels.Home)}>
        Настройки
      </HeaderButtonBack>
      <Group>
        <Header mode="secondary">Основные</Header>
        <SimpleCell
          Component="label"
          after={<Switch checked={adult} onChange={() => onChangeAdult()} />}
        >
          Показывать 18+ контент
        </SimpleCell>
      </Group>
      <Footer>
        Нашли баг или есть идеи? Пишите мне в{" "}
        <Link href="https://t.me/Hzerz">телеграмм</Link>
      </Footer>
    </Panel>
  );
};

export default SettingsPanel;
