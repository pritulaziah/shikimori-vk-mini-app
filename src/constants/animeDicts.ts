import { AnimeStatuses, AnimeKinds, AnimeAgeRatings } from "../types/anime";

export const animeKinds = {
  [AnimeKinds.TV]: "TV Сериал",
  [AnimeKinds.MOVIE]: "Фильм",
  [AnimeKinds.OVA]: "OVA",
  [AnimeKinds.ONA]: "ONA",
  [AnimeKinds.SPECIAL]: "Спешл",
};

export const animeStatuses = {
  [AnimeStatuses.Released]: "Вышел",
  [AnimeStatuses.Ongoing]: "Сейчас выходит",
  [AnimeStatuses.Anons]: "Анонсировано",
  [AnimeStatuses.Latest]: 'Недавно вышедшее'
};

const animeAgeRatingsKeys = Object.keys(AnimeAgeRatings)

export const animeAgeRatings = {
  [AnimeAgeRatings.G]: animeAgeRatingsKeys[0],
  [AnimeAgeRatings.PG]: animeAgeRatingsKeys[1],
  [AnimeAgeRatings["PG-13"]]: animeAgeRatingsKeys[2],
  [AnimeAgeRatings["R-17"]]: animeAgeRatingsKeys[3],
  [AnimeAgeRatings["R+"]]:animeAgeRatingsKeys[4],
  [AnimeAgeRatings.Rx]: animeAgeRatingsKeys[5],
}