import {
  Panel,
  PanelHeader,
  Group,
  Card,
  Headline,
  Link,
  Caption,
  Text,
} from "@vkontakte/vkui";
import { Icon24ExternalLinkOutline } from '@vkontakte/icons'
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";

enum AnimeKinds {
  TV = "tv",
  MOVIE = "movie",
  OVA = "ova",
  ONA = "ona",
  SPECIAL = "special",
  MUSIC = "music",
  TV13 = "tv_13",
  TV24 = "tv_24",
  TV48 = "tv_48",
}

type ExistAnimeKinds = Exclude<
  AnimeKinds,
  AnimeKinds.MUSIC | AnimeKinds.TV13 | AnimeKinds.TV24 | AnimeKinds.TV48
>;

const animeKindsDict: {
  [key in ExistAnimeKinds]: string;
} = {
  tv: "TV Сериал",
  movie: "Фильм",
  ova: "OVA",
  ona: "ONA",
  special: "Спешл",
};

const getKindText = (kind: AnimeKinds) => {
  if (["tv", "tv_13", "tv_24", "tv_48"].includes(kind)) {
    return animeKindsDict.tv;
  } else if (Object.keys(animeKindsDict).includes(kind)) {
    return animeKindsDict[kind as ExistAnimeKinds];
  } else {
    return null;
  }
};

const getYearText = (released_on: string | null) =>
  released_on ? released_on.split("-")[0] : "";

interface Anime {
  aired_on: string;
  episodes: number;
  episodes_aired: number;
  id: number;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  kind: AnimeKinds;
  name: string;
  released_on: string | null;
  russian: string;
  score: string;
  status: string;
  url: string;
}

const MainPanel = () => {
  const { isLoading, error, data } = useQuery<Anime[]>(
    ["animes"],
    queryFn("animes", {
      censored: false,
      order: "random",
      kind: "tv",
      limit: 1,
    })
  );

  const [anime] = data || ([{ image: {} }] as Anime[]);

  return (
    <Panel>
      <PanelHeader>Твоё случайное аниме</PanelHeader>
      <Group style={{ alignItems: 'center' }}>
        <Card className="vkuiContentCard">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="ContentCard__img"
              src={`https://shikimori.one${anime.image.original}`}
              style={{ height: 350, maxWidth: '100%' }}
            />
          </div>
          <div className="vkuiContentCard__body">
            {/* @ts-ignore */}
            <Headline className="vkuiContentCard__text" weight="2" level="1">
              {anime.russian}
            </Headline>
            <Caption className="vkuiContentCard__text vkuiContentCard__subtitle"
              weight="1"
              level="3"
              caps
            >
              <Link href="https://google.com" target="_blank">
                Подробнее на shikimori <Icon24ExternalLinkOutline width={16} height={16} />
              </Link>
            </Caption>
            {anime.score !== "0.0" && (
              <Text className="vkuiContentCard__text" weight="medium" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Рейтинг:</span>
                <span>{anime.score}</span>
              </Text>
            )}
            <Text className="vkuiContentCard__text" weight="medium" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Эпизодов:</span>
              <span>{anime.episodes}</span>
            </Text>
            <Caption
              className="vkuiContentCard__text vkuiContentCard__caption"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{getKindText(anime.kind)}</span>
              <span>{getYearText(anime.released_on)}</span>
            </Caption>
          </div>
        </Card>
      </Group>
    </Panel>
  );
};

export default MainPanel;
