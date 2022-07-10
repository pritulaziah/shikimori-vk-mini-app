import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import { Search, Footer } from "@vkontakte/vkui";
import AnimeFilter from "./common/AnimeFilter";
import { AnimeCollection } from "../constants/animeCollections";

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

const adultGenres = [33, 34, 12, 539];

const GenreFilter = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery<Genre[]>(["genres"], queryFn("genres"));

  const collection = useMemo(
    () =>
      (data || [])
        .filter(
          (genre) =>
            genre.kind === GenreKinds.Anime &&
            genre.russian.toLowerCase().includes(search.toLowerCase())
        )
        .map<AnimeCollection>((genre) => ({
          label: genre.russian,
          value: String(genre.id),
          adult: adultGenres.includes(genre.id),
        })),
    [data, search]
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <AnimeFilter
      title="Жанр"
      paramName="genre"
      collection={collection}
      expanded={false}
      beforeSlot={<Search onChange={onChangeSearch} value={search} />}
      afterSlot={collection.length === 0 && <Footer>Ничего не найдено</Footer>}
    />
  );
};

export default GenreFilter;
