import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import { Search } from "@vkontakte/vkui";
import AnimeFilter from "./common/AnimeFilter";

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
  const [search, setSearch] = useState("");
  const { data } = useQuery<Genre[]>(
    ["genres"],
    queryFn("genres")
  );

  const animeGenres = useMemo(
    () =>
      (data || [])
        .filter(
          (genre) =>
            genre.kind === GenreKinds.Anime &&
            genre.russian.toLowerCase().includes(search.toLowerCase())
        )
        .reduce<{ [key: string]: string }>((acc, item) => {
          acc[item.id] = item.russian;
          return acc;
        }, {}),
    [data, search]
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <AnimeFilter filterName="Жанр" collection={animeGenres}>
      <Search onChange={onChangeSearch} value={search} />
    </AnimeFilter>
  );
};

export default GenreFilter;
