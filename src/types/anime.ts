export interface Anime {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  score: string;
  aired_on: string;
  released_on: string | null;
  kind: AnimeKinds;
  status: AnimeStatuses;
  episodes: number;
  episodes_aired: number;
}

export enum AnimeStatuses {
  Anons = "anons",
  Ongoing = "ongoing",
  Released = "released",
  Latest = "latest",
}

export enum AnimeKinds {
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

export enum AnimeAgeRatings {
  G = "g",
  PG = "pg",
  "PG-13" = "pg_13",
  "R-17" = "r",
  "R+" = "r_plus",
  "Rx" = "rx",
}
