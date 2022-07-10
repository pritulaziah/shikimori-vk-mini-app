import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import { Search, Footer } from "@vkontakte/vkui";
import Filter from "./common/Filter";
import { FilterCollection } from "../types/filter";

const adultGenres = [33, 34, 12, 539];

type GenreType = "anime" | "manga";

interface Genre {
  id: number;
  kind: GenreType;
  name: string;
  russian: string;
}

interface IProps {
  type: GenreType;
}

const GenreFilter = ({ type }: IProps) => {
  const [search, setSearch] = useState("");
  const { data } = useQuery<Genre[]>(["genres"], queryFn("genres"));

  const collection = useMemo(
    () =>
      (data || [])
        .filter(
          (genre) =>
            genre.kind === type &&
            genre.russian.toLowerCase().includes(search.toLowerCase())
        )
        .map<FilterCollection>((genre) => ({
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
    <Filter
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
