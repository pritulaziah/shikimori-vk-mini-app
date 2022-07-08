import { useEffect, useState } from "react";
import { Checkbox, SimpleCell, IconButton, Counter } from "@vkontakte/vkui";
import {
  Icon28ChevronUpOutline,
  Icon28ChevronDownOutline,
} from "@vkontakte/icons";
import useAnimeFilterParams from "../../hooks/useAnimeFilterParams";
import { Params } from "../../types/filterParams";

interface IProps {
  paramName: keyof Params;
  title: string;
  collection: { [key: string]: string };
  children?: React.ReactNode;
}

const AnimeFilter = ({ paramName, title, collection, children }: IProps) => {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const { onChangeParams } = useAnimeFilterParams();

  const onChangeSelected = (event: React.ChangeEvent<HTMLElement>) => {
    const id = event.currentTarget.id;

    setSelected((prevState) => {
      const newState = new Set(prevState);
      const checked = newState.has(id);

      if (checked) {
        newState.delete(id);
      } else {
        newState.add(id);
      }

      return newState;
    });
  };

  useEffect(() => {
    onChangeParams(paramName, [...selected])
  }, [selected])

  const onChangeExpand = () => setExpanded((prevState) => !prevState);

  return (
    <>
      <SimpleCell
        onClick={onChangeExpand}
        after={
          <IconButton>
            {expanded ? (
              <Icon28ChevronUpOutline fill="var(--vkui--color_text_tertiary)" />
            ) : (
              <Icon28ChevronDownOutline fill="var(--vkui--color_text_tertiary)" />
            )}
          </IconButton>
        }
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          {title}
          {selected.size > 0 && (
            <Counter mode="secondary" size="s" style={{ marginLeft: "4px" }}>
              {selected.size}
            </Counter>
          )}
        </span>
      </SimpleCell>
      {expanded && (
        <>
          {children}
          {Object.entries(collection).map(
            ([animeStatusKey, animeStatusValue]) => (
              <Checkbox
                key={animeStatusKey}
                id={String(animeStatusKey)}
                checked={selected.has(animeStatusKey)}
                onChange={onChangeSelected}
              >
                {animeStatusValue}
              </Checkbox>
            )
          )}
        </>
      )}
    </>
  );
};

export default AnimeFilter;
