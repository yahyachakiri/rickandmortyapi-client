import { GenderEnum, SpeciesEnum, StatusEnum } from "@/enums";
import { ICharacter } from "@interfaces/index";

export type getCharactersRes = {
  info: {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
  };
  results: ICharacter[];
};
export type getCharactersReq =
  | {
      page?: number;
      name?: string;
      status?: StatusEnum;
      species?: SpeciesEnum;
      gender?: GenderEnum;
    }
  | Record<string, string | number>;
