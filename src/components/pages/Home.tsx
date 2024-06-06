import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { GenderEnum, SpeciesEnum, StatusEnum } from "@enums/index";
import { rickandmortyApi } from "@store/api";
import { IApiError, ICharacter } from "@interfaces/index";
import { addFavorite, removeFavorite } from "@store/slices/favorite";
import { RootState } from "@store/index";
import { checkFavorite, generatePagination } from "@utils/index";
import { LoadingCharacters, Character, Pagination, Filter } from "@components/UI";
import { PageLayout } from "@components/Layout/PageLayout";

export default function Home() {
  const [gender, setGender] = useState<GenderEnum | undefined>(undefined);
  const [status, setStatus] = useState<StatusEnum | undefined>(undefined);
  const [species, setSpecies] = useState<SpeciesEnum | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string | undefined>(undefined);
  const { data, isLoading, isSuccess, error } = rickandmortyApi.useGetCharactersQuery({
    gender,
    page,
    status,
    species,
    name,
  });
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite);

  const location = useLocation();
  useLayoutEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nameParam = searchParams.get("name");
    const pageParam = searchParams.get("page");
    const statusParam = searchParams.get("status");
    const genderParam = searchParams.get("gender");
    const speciesParam = searchParams.get("species");

    setName(nameParam || undefined);
    setStatus((statusParam as StatusEnum) || undefined);
    setSpecies((speciesParam as SpeciesEnum) || undefined);
    setGender((genderParam as GenderEnum) || undefined);
    setPage(Number(pageParam) || 1);
  }, [location.search]);

  const updateUrl = ({
    name,
    status,
    page,
    gender,
    species,
  }: {
    name?: string;
    status?: StatusEnum;
    page?: number;
    gender?: GenderEnum;
    species?: SpeciesEnum;
  }) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams;
    searchParams.delete("name");
    searchParams.delete("status");
    searchParams.delete("page");
    searchParams.delete("gender");
    searchParams.delete("species");
    if (name) searchParams.set("name", name);
    if (status) searchParams.set("status", status);
    if (page) searchParams.set("page", String(page));
    if (gender) searchParams.set("gender", gender);
    if (species) searchParams.set("species", species);

    window.history.pushState({}, "", `${searchParams.toString() ? "?" : "/"}${searchParams.toString() ?? ""}`);
  };

  const handleFavorite = (item: ICharacter) => {
    if (checkFavorite(item.id, favorites)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const handleGender = (data: GenderEnum | string) => {
    setPage(1);
    if (data == "All") {
      setGender(undefined);
      updateUrl({ name, species, status });
    } else {
      setGender(data as GenderEnum);
      updateUrl({ gender: data as GenderEnum, name, species, status });
    }
  };
  const handleStatus = (data: StatusEnum | string) => {
    setPage(1);
    if (data == "All") {
      setStatus(undefined);
      updateUrl({ status: undefined, gender, name, species });
    } else {
      setStatus(data as StatusEnum);
      updateUrl({ status: data as StatusEnum, gender, name, species });
    }
  };
  const handleSpecies = (data: SpeciesEnum | string) => {
    setPage(1);
    if (data == "All") {
      setSpecies(undefined);
      updateUrl({ gender, name, status });
    } else {
      setSpecies(data as SpeciesEnum);
      updateUrl({ species: data as SpeciesEnum, gender, name, status });
    }
  };

  const handleName = (data: string) => {
    setPage(1);
    setName(data);
    updateUrl({ name: data, gender, species, status });
  };

  const handlePage = (data: number) => {
    setPage(data);
    updateUrl({ page: data, gender, name, species, status });
  };

  return (
    <PageLayout>
      <div className="text-center font-bold text-3xl md:text-5xl lg:text-6xl mt-12">The Rick and Morty Characters</div>
      <Filter
        handleGender={handleGender}
        handleName={handleName}
        handleSpecies={handleSpecies}
        handleStatus={handleStatus}
        gender={gender}
        name={name}
        species={species}
        status={status}
      />
      {isLoading && <LoadingCharacters />}
      {data && isSuccess && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.results.map((item) => (
              <Character key={item.id} data={item} favorites={favorites} handleFavorite={handleFavorite} />
            ))}
          </div>
          <Pagination generatePagination={generatePagination} handlePage={handlePage} page={page} pages={data.info.pages} />
        </>
      )}
      {error && <p className="text-center">{(error as IApiError).data.error}</p>}
    </PageLayout>
  );
}
