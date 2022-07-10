export interface Params {
  genre: string[];
  rating: string[];
  kind: string[];
  status: string[];
  score: string[];
}

export interface Filter {
  params: Params;
  onChangeParams: (paramName: keyof Params, paramValue: string[]) => void;
}

export interface FilterCollection {
  value: string;
  label: string;
  adult?: boolean
}
