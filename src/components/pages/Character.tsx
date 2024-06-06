import { rickandmortyApi } from "@store/api";
import { IApiError, ICharacter } from "@/interfaces";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/slices/favorite";
import { RootState } from "@/store";
import { checkFavorite } from "@/utils";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "../UI/Loading";
import { PageLayout } from "../Layout/PageLayout";

export default function Character() {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = rickandmortyApi.useGetCharacterQuery({
    id: id!,
  });
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite);

  const handleFavorite = (item: ICharacter) => {
    if (checkFavorite(item.id, favorites)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <PageLayout>
      {isLoading && <LoadingScreen />}
      {data && isSuccess && (
        <>
          <div key={data.id} className="flex gap-3 w-full relative">
            <img src={data.image} width={140} height={140} className="rounded-lg w-[200px] h-[200px] object-cover" />
            <div>
              <p className="font-bold text-white text-3xl hover:text-gray-character">{data.name}</p>
              <p className="text-gray-character text-sm mt-2">Status</p>
              <p className="font-semibold text-base text-white">{data.status}</p>
              <p className="text-gray-character text-sm mt-2">Species</p>
              <p className="font-semibold text-base text-white">{data.species}</p>
              <p className="text-gray-character text-sm mt-2">Gender</p>
              <p className="font-semibold text-base text-white">{data.gender}</p>
              <p className="text-gray-character text-sm mt-2">Last known location:</p>
              <p className="font-semibold text-base text-white">{data.location.name}</p>
              <p className="text-gray-character text-sm mt-2">First seen in:</p>
              <p className="font-semibold text-base text-white">{data.origin.name}</p>
              <div
                onClick={() => handleFavorite(data)}
                className={`absolute top-3  right-3 cursor-pointer ${
                  checkFavorite(data.id, favorites) ? "bg-red" : "bg-gray-character"
                } rounded-full p-3`}
              >
                <FaHeart />
              </div>
            </div>
          </div>
        </>
      )}
      {error && <p className="text-center">{(error as IApiError).data.error}</p>}
    </PageLayout>
  );
}
