import { GenderEnum, SpeciesEnum, StatusEnum } from "@/enums";
import { Container } from "../Layout/Container";
import { Select } from "./Select";
import { Input } from "./Input";

interface props {
  gender?: GenderEnum;
  name?: string;
  status?: StatusEnum;
  species?: SpeciesEnum;
  handleName: (data: string) => void;
  handleStatus: (data: StatusEnum | string) => void;
  handleSpecies: (data: SpeciesEnum | string) => void;
  handleGender: (data: GenderEnum | string) => void;
}

export const Filter = ({ gender, name, status, species, handleName, handleStatus, handleSpecies, handleGender }: props) => {
  const genderOptions = [GenderEnum.MALE, GenderEnum.FEMALE, GenderEnum.GENDERLESS, GenderEnum.UNKNOWN];
  const statusOptions = [StatusEnum.ALIVE, StatusEnum.DEAD, StatusEnum.UNKNOWN];
  const speciesOptions = [SpeciesEnum.ALIEN, SpeciesEnum.HUMAN, SpeciesEnum.HUMANOID];

  return (
    <Container className="flex flex-wrap gap-3 my-10 justify-center w-full">
      <Input className="md:w-1/3" label="Name" onChange={handleName} value={name} />
      <Select label="Gender" options={genderOptions} value={gender as string} onChange={handleGender} />
      <Select label="Status" options={statusOptions} value={status as string} onChange={handleStatus} />
      <Select label="Species" options={speciesOptions} value={species as string} onChange={handleSpecies} />
    </Container>
  );
};
