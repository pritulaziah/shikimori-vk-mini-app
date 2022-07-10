import { AnimeStatuses, AnimeKinds, AnimeAgeRatings } from "../types/anime";
import { FilterCollection } from '../types/filter'

export const animeKinds: FilterCollection[] = [
  { value: AnimeKinds.TV, label: "TV Сериал" },
  { value: AnimeKinds.MOVIE, label: "Фильм" },
  { value: AnimeKinds.OVA, label: "OVA" },
  { value: AnimeKinds.ONA, label: "ONA" },
  { value: AnimeKinds.SPECIAL, label: "Спешл" },
];

export const animeStatuses: FilterCollection[] = [
  { value: AnimeStatuses.Released, label: "Вышел" },
  { value: AnimeStatuses.Ongoing, label: "Сейчас выходит" },
  { value: AnimeStatuses.Anons, label: "Анонсировано" },
  { value: AnimeStatuses.Latest, label: "Недавно вышедшее" },
];

const animeAgeRatingsKeys = Object.keys(AnimeAgeRatings);

export const animeAgeRatings: FilterCollection[] = [
  { value: AnimeAgeRatings.G, label: animeAgeRatingsKeys[0] },
  { value: AnimeAgeRatings.PG, label: animeAgeRatingsKeys[1] },
  { value: AnimeAgeRatings["PG-13"], label: animeAgeRatingsKeys[2] },
  { value: AnimeAgeRatings["R-17"], label: animeAgeRatingsKeys[3] },
  { value: AnimeAgeRatings["R+"], label: animeAgeRatingsKeys[4] },
  { value: AnimeAgeRatings.Rx, label: animeAgeRatingsKeys[5], adult: true },
];
