import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Search, Footer } from "@vkontakte/vkui";
import { FilterCollection } from "types/filter";
import queryFn from "utils/queryFn";
import Filter from "components/common/Filter";

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

const adultGenres = [33, 34, 12, 539];

const GenreFilter = ({ type }: IProps) => {
  const [search, setSearch] = useState("");
  const { data } = useQuery<Genre[]>(["genres"], queryFn("genres"));

  const collection = useMemo(
    () =>
      (data || [])
        .filter((genre) => genre.kind === type)
        .map<FilterCollection>((genre) => ({
          label: genre.russian,
          value: String(genre.id),
          adult: adultGenres.includes(genre.id),
        })),
    [data, type]
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Filter
      title="Жанр"
      paramName="genre"
      collection={collection.filter((collectionItem) =>
        collectionItem.label.toLowerCase().includes(search.toLowerCase())
      )}
      expanded={false}
      beforeSlot={<Search onChange={onChangeSearch} value={search} />}
      afterSlot={collection.length === 0 && <Footer>Ничего не найдено</Footer>}
    />
  );
};

export default GenreFilter;
