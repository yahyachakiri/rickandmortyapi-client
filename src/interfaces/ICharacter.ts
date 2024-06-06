import { GenderEnum, SpeciesEnum, StatusEnum } from "@enums/index";

export interface ICharacter {
  id: number;
  name: string;
  status: StatusEnum;
  species: SpeciesEnum;
  type: string;
  gender: GenderEnum;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
