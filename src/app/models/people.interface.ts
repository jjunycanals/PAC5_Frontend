import { Url } from "url";

export interface People {
  name: string;
  birth_year: string;
  id: string;
  gender: string;
  mass: string;
  height: string;
  films: Array<Url>;
  url: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}
