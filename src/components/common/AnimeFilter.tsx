import { useEffect, useState } from "react";
import { Checkbox, SimpleCell, IconButton, Counter } from "@vkontakte/vkui";
import {
  Icon28ChevronUpOutline,
  Icon28ChevronDownOutline,
} from "@vkontakte/icons";
import useFilter from "../../hooks/useFilter";
import { Params } from "../../types/filter";
import { AnimeCollection } from "../../constants/animeCollections";

interface IProps {
  paramName: keyof Params;
  title: string;
  collection: AnimeCollection[];
  beforeSlot?: React.ReactNode;
  afterSlot?: React.ReactNode;
  expanded?: boolean;
}

const AnimeFilter = ({
  paramName,
  title,
  collection,
  beforeSlot,
  afterSlot,
  expanded: defaultExpanded = true,
}: IProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const { onChangeParams } = useFilter();

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
    onChangeParams(paramName, [...selected]);
  }, [selected]);

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
          {beforeSlot}
          {collection.map(({ value, label }) => (
            <Checkbox
              key={value}
              id={String(value)}
              checked={selected.has(value)}
              onChange={onChangeSelected}
            >
              {label}
            </Checkbox>
          ))}
          {afterSlot}
        </>
      )}
    </>
  );
};

export default AnimeFilter;
