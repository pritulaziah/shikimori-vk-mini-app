export interface Params {
  genre: string[];
  rating: string[];
  kind: string[];
  status: string[];
}

export interface FilterParams {
  params: Params;
  onChangeParams: (paramName: keyof Params, paramValue: string[]) => void;
}
