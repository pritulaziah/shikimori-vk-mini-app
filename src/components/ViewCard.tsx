import {
  Panel,
  PanelHeader,
  Group,
  Card,
  Button,
  Div,
  PanelSpinner,
  Placeholder,
  Caption,
  Link,
  Headline,
  Text,
} from "@vkontakte/vkui";
import {
  Icon24ArrowRightOutline,
  Icon24ErrorCircleOutline,
  Icon24ExternalLinkOutline,
} from "@vkontakte/icons";
import { useQuery } from "react-query";
import queryFn from "../utils/queryFn";
import { Anime, AnimeKinds, AnimeStatuses } from "../types/anime";
import { Manga } from "../types/manga";
import shikimoriBaseUrl from "../constants/shikimoriBaseUrl";
import useFilter from "../hooks/useFilter";
import { animeStatuses, animeKinds } from "../constants/animeCollections";
import { mangaStatuses, mangaKinds } from "../constants/mangaCollections";
import useAdult from "../hooks/useAdult";

// TODO: think about split anime and manga

type Type = "mangas" | "animes";

const getStatusText = (
  type: Type,
  status: Anime["status"] | Manga["status"]
) => {
  const isAnime = type === "animes";
  const findedAnimeStatus = (isAnime ? animeStatuses : mangaStatuses).find(
    (animeStatus) => animeStatus.value === status
  );

  return findedAnimeStatus?.label;
};

const getKindText = (type: Type, kind: Anime["kind"] | Manga["kind"]) => {
  const isAnime = type === "animes";
  if (isAnime && ["tv_13", "tv_24", "tv_48"].includes(kind)) {
    kind = AnimeKinds.TV;
  }

  const currentKind = (isAnime ? animeKinds : mangaKinds).find(
    (animeKind) => animeKind.value === kind
  );

  return currentKind?.label;
};

const getEpisodesText = (anime: Anime) => {
  if (anime.status === AnimeStatuses.Released) {
    return anime.episodes;
  } else if (AnimeStatuses.Ongoing) {
    return `${anime.episodes_aired}/${anime.episodes || "?"}`;
  } else {
    return "Неизвестно";
  }
};

const getYearText = (airedOn: Anime["aired_on"] | Manga["aired_on"]) =>
  airedOn ? airedOn.split("-")[0] : "";

const getScoreText = (score: Anime["score"] | Manga["score"]) =>
  score === "0.0" ? "Без оценки" : score;

const paramToString = (param: string[], defaultValue?: string | null) =>
  param.length > 0 ? param.join(",") : defaultValue;

interface IProps {
  type: Type;
}

const ViewCard = ({ type }: IProps) => {
  const { params } = useFilter();
  const { adult } = useAdult();
  const { isLoading, data, refetch } = useQuery<(Anime | Manga)[]>(
    [type, params],
    queryFn(type, {
      censored: !adult,
      order: "random",
      limit: 1,
      status: paramToString(params.status),
      kind: paramToString(
        params.kind,
        type === "animes" ? "tv,movie,ova,ona,special" : undefined
      ),
      rating: paramToString(params.rating),
      genre: paramToString(params.genre),
      score: paramToString(params.score),
    }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const [animeOrManga] = data || [];

  return (
    <Panel>
      <PanelHeader />
      {isLoading ? (
        <PanelSpinner />
      ) : (
        <Group style={{ alignItems: "center" }}>
          {animeOrManga ? (
            <>
              <Card className="vkuiContentCard">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    className="ContentCard__img"
                    src={`${shikimoriBaseUrl}${animeOrManga.image.original}`}
                    style={{ maxWidth: "100%", height: 300 }}
                  />
                </div>
                <div
                  className="vkuiContentCard__body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Headline
                    className="vkuiContentCard__text"
                    weight="2"
                    level="1"
                  >
                    {animeOrManga.russian}
                  </Headline>
                  <Text
                    className="vkuiContentCard__text"
                    weight="medium"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "var(--text_subhead)" }}>
                      Рейтинг:
                    </span>
                    <span>{getScoreText(animeOrManga.score)}</span>
                  </Text>
                  <Text
                    className="vkuiContentCard__text"
                    weight="medium"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "var(--text_subhead)" }}>
                      Статус:
                    </span>
                    <span>{getStatusText(type, animeOrManga.status)}</span>
                  </Text>
                  {type === "mangas" ? (
                    <>
                      {(animeOrManga as Manga).volumes > 0 && (
                        <Text
                          className="vkuiContentCard__text"
                          weight="medium"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ color: "var(--text_subhead)" }}>
                            Тома:
                          </span>
                          <span>{(animeOrManga as Manga).volumes}</span>
                        </Text>
                      )}
                      {(animeOrManga as Manga).chapters > 0 && (
                        <Text
                          className="vkuiContentCard__text"
                          weight="medium"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ color: "var(--text_subhead)" }}>
                            Глав:
                          </span>
                          <span>{(animeOrManga as Manga).chapters}</span>
                        </Text>
                      )}
                    </>
                  ) : animeOrManga.kind !== AnimeKinds.MOVIE &&
                    animeOrManga.status !== AnimeStatuses.Anons ? (
                    <Text
                      className="vkuiContentCard__text"
                      weight="medium"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "var(--text_subhead)" }}>
                        Эпизодов:
                      </span>
                      <span>{getEpisodesText(animeOrManga as Anime)}</span>
                    </Text>
                  ) : null}
                  <Caption
                    className="vkuiContentCard__text vkuiContentCard__caption"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{getKindText(type, animeOrManga.kind)}</span>
                    <span>{getYearText(animeOrManga.aired_on)}</span>
                  </Caption>
                  <Caption
                    className="vkuiContentCard__text vkuiContentCard__subtitle"
                    weight="1"
                    level="3"
                    caps
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Link
                      href={`${shikimoriBaseUrl}${animeOrManga.url}`}
                      target="_blank"
                    >
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
            </>
          ) : (
            <Placeholder icon={<Icon24ErrorCircleOutline />}>
              Ничего не найденно. Попробуйте изменить параметры поиска!
            </Placeholder>
          )}
        </Group>
      )}
    </Panel>
  );
};

export default ViewCard;
