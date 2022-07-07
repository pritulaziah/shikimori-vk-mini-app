import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import {
  Checkbox,
  SimpleCell,
  IconButton,
  Search,
  Counter,
} from "@vkontakte/vkui";
import {
  Icon28ChevronUpOutline,
  Icon28ChevronDownOutline,
} from "@vkontakte/icons";
import { useMemo, useState } from "react";

enum GenreKinds {
  Anime = "anime",
  Mange = "manga",
}

interface Genre {
  id: number;
  kind: GenreKinds;
  name: string;
  russian: string;
}

const GenreFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<number>>(new Set());
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(true);
  const { isLoading, error, data } = useQuery<Genre[]>(
    ["genres"],
    queryFn("genres")
  );

  const animeGenres = useMemo(
    () => (data || []).filter((genre) => genre.kind === GenreKinds.Anime && genre.russian.toLowerCase().includes(search.toLowerCase())),
    [data, search]
  );

  const onChangeSelectedGenres = (event: React.ChangeEvent<HTMLElement>) => {
    const id = Number(event.currentTarget.id);

    setSelectedGenres((prevState) => {
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

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <SimpleCell
        onClick={() => setExpanded((prevState) => !prevState)}
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
          Жанр
          {selectedGenres.size > 0 && (
            <Counter mode="secondary" size="s" style={{ marginLeft: "4px" }}>
              {selectedGenres.size}
            </Counter>
          )}
        </span>
      </SimpleCell>
      {expanded && (
        <>
          <Search onChange={onChangeSearch} value={search} />
          <div style={{ height: "300px", overflowY: "auto" }}>
            {animeGenres.map((animeGenre) => (
              <Checkbox
                key={animeGenre.id}
                id={String(animeGenre.id)}
                checked={selectedGenres.has(animeGenre.id)}
                onChange={onChangeSelectedGenres}
              >
                {animeGenre.russian}
              </Checkbox>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default GenreFilter;
