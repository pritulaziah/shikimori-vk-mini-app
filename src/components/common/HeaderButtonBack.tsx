import {
  PanelHeader,
  PanelHeaderProps,
  PanelHeaderBack,
} from "@vkontakte/vkui";

interface IProps extends PanelHeaderProps {
  children: React.ReactNode;
}

const HeaderButtonBack = ({ children, onClick, style }: IProps) => {
  return (
    <PanelHeader
      separator={false}
      before={<PanelHeaderBack onClick={onClick} />}
      style={style}
    >
      {children}
    </PanelHeader>
  );
};

export default HeaderButtonBack;
