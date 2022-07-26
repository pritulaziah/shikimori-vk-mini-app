import { MangaStatuses, MangaKinds } from "types/manga";
import { FilterCollection } from "types/filter";

export const mangaKinds: FilterCollection[] = [
  { value: MangaKinds.Manga, label: "Манга" },
  { value: MangaKinds.Manhwa, label: "Манхва" },
  { value: MangaKinds.Manhua, label: "Маньхуа" },
  { value: MangaKinds.OneShot, label: "Ваншот" },
  { value: MangaKinds.Doujin, label: "Додзинси" },
];

export const mangaStatuses: FilterCollection[] = [
  { value: MangaStatuses.Anons, label: "Анонсировано" },
  { value: MangaStatuses.Ongoing, label: "Сейчас издаётся" },
  { value: MangaStatuses.Released, label: "Издано" },
  { value: MangaStatuses.Latest, label: "Недавно издано" },
  { value: MangaStatuses.Paused, label: "Приостановлено" },
  { value: MangaStatuses.Discontinued, label: "Прекращено" },
];
