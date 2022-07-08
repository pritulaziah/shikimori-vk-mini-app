import {
  Panel,
  PanelHeader,
  Group,
  Card,
  Headline,
  Link,
  Caption,
  Text,
  Button,
  Div,
  PanelSpinner,
} from "@vkontakte/vkui";
import {
  Icon24ExternalLinkOutline,
  Icon24ArrowRightOutline,
} from "@vkontakte/icons";
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import { AnimeStatuses, AnimeKinds } from "../types/anime";
import { animeStatuses } from "../constants/animeDicts";
import shikimoriBaseUrl from "../constants/shikimoriBaseUrl";

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
  status: AnimeStatuses;
  url: string;
}

const animeKindsDict = {
  [AnimeKinds.TV]: "TV Сериал",
  [AnimeKinds.MOVIE]: "Фильм",
  [AnimeKinds.OVA]: "OVA",
  [AnimeKinds.ONA]: "ONA",
  [AnimeKinds.SPECIAL]: "Спешл",
};

const getKindText = (kind: AnimeKinds) => {
  if (["tv", "tv_13", "tv_24", "tv_48"].includes(kind)) {
    return animeKindsDict.tv;
  } else if (Object.keys(animeKindsDict).includes(kind)) {
    return animeKindsDict[
      kind as Exclude<
        AnimeKinds,
        AnimeKinds.MUSIC | AnimeKinds.TV13 | AnimeKinds.TV24 | AnimeKinds.TV48
      >
    ];
  } else {
    return null;
  }
};

const getYearText = (airedOn: Anime["aired_on"]) =>
  airedOn ? airedOn.split("-")[0] : "";

const getScoreText = (score: Anime["score"]) =>
  score === "0.0" ? "Без оценки" : score;

const getStatusText = (status: Anime["status"]) => animeStatuses[status];

const getEpisodesText = (
  episodes: Anime["episodes"],
  episodesAired: Anime["episodes_aired"],
  status: Anime["status"]
) => {
  if (status === AnimeStatuses.Released) {
    return episodes;
  } else if (AnimeStatuses.Ongoing) {
    return `${episodes}/${episodesAired || "?"}`;
  } else {
    return "Неизвестно";
  }
};

const MainPanel = () => {
  const { isLoading, error, data, refetch } = useQuery<Anime[]>(
    ["animes"],
    queryFn("animes", {
      censored: false,
      order: "random",
      kind: "tv",
      limit: 1,
      score: 1.0,
    })
  );

  const [anime] = data || [];

  return (
    <Panel>
      <PanelHeader>Твоё случайное аниме</PanelHeader>
      {isLoading ? (
        <PanelSpinner />
      ) : anime ? (
        <Group style={{ alignItems: "center" }}>
          <Card className="vkuiContentCard">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="ContentCard__img"
                src={`${shikimoriBaseUrl}${anime.image.original}`}
                style={{ maxWidth: "100%", height: 300 }}
              />
            </div>
            <div
              className="vkuiContentCard__body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* @ts-ignore */}
              <Headline className="vkuiContentCard__text" weight="2" level="1">
                {anime.russian}
              </Headline>
              <Text
                className="vkuiContentCard__text"
                weight="medium"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ color: "var(--text_subhead)" }}>Статус:</span>
                <span>{getStatusText(anime.status)}</span>
              </Text>
              <Text
                className="vkuiContentCard__text"
                weight="medium"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ color: "var(--text_subhead)" }}>Рейтинг:</span>
                <span>{getScoreText(anime.score)}</span>
              </Text>
              <Text
                className="vkuiContentCard__text"
                weight="medium"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ color: "var(--text_subhead)" }}>Эпизодов:</span>
                <span>
                  {getEpisodesText(
                    anime.episodes,
                    anime.episodes_aired,
                    anime.status
                  )}
                </span>
              </Text>
              <Caption
                className="vkuiContentCard__text vkuiContentCard__caption"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{getKindText(anime.kind)}</span>
                <span>{getYearText(anime.aired_on)}</span>
              </Caption>
              <Caption
                className="vkuiContentCard__text vkuiContentCard__subtitle"
                weight="1"
                level="3"
                caps
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Link href={`${shikimoriBaseUrl}${anime.url}`} target="_blank">
                  Подробнее на shikimori{" "}
                  <Icon24ExternalLinkOutline width={16} height={16} />
                </Link>
              </Caption>
            </div>
          </Card>
          <Div>
            <Button
              after={<Icon24ArrowRightOutline />}
              appearance="accent"
              stretched
              mode="primary"
              size="l"
              onClick={() => refetch()}
            >
              Следующее
            </Button>
          </Div>
        </Group>
      ) : null}
    </Panel>
  );
};

export default MainPanel;
