import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import {
  Panel,
  PanelHeader,
  Group,
  Checkbox,
} from "@vkontakte/vkui";
import { useMemo } from "react";

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

const GenreFilterPanel = () => {
  const { isLoading, error, data } = useQuery<Genre[]>(
    ["genres"],
    queryFn("genres")
  );

  const animeGenres = useMemo(
    () => (data || []).filter((genre) => genre.kind === GenreKinds.Anime),
    [data]
  );

  return (
    <Panel>
      <PanelHeader />
      <Group>
        {animeGenres.map((animeGenre) => (
          <Checkbox key={animeGenre.id}>{animeGenre.russian}</Checkbox>
        ))}
      </Group>
    </Panel>
  );
};

export default GenreFilterPanel;
