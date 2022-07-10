import { Anime } from "./anime";

export interface Manga extends Omit<Anime, 'kind' | 'status' | 'episodes' | 'episodes_aired'> {
  kind: MangaKinds,
  status: MangaStatuses,
  volumes: number,
  chapters: number,
}

export enum MangaStatuses {
  Anons = "anons",
  Ongoing = "ongoing",
  Released = "released",
  Paused = "paused",
  Discontinued = "discontinued",
  Latest = 'latest'
}

export enum MangaKinds {
  Manga = "manga",
  Manhwa = "manhwa",
  Manhua = "manhua",
  LightNovel = "light_novel",
  Novel = "novel",
  OneShot = "one_shot",
  Doujin = "doujin",
}
