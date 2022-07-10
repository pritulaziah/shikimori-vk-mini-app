export enum Panels {
  Home = "home",
  Anime = "anime",
  Mange = "manga",
  Settings = "settings",
}

export interface IPanel {
  id: Panels;
  changePanel: (id: Panels) => void;
}
