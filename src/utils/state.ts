export interface MState {
  cityName: string;
  cityId: number;
}

export interface Action {
  type: string;
  payload: any;
}

export type CinemaItem = {
  name: string;
  cinemaId: number;
};

export interface CinemaList {
  list: Array<CinemaItem>;
}
