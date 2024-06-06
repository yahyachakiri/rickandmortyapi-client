import { ICharacter } from "@interfaces/index";

export function checkFavorite(id: number, data: ICharacter[]): boolean {
  if (data.filter((item) => item.id == id).length > 0) return true;
  return false;
}
