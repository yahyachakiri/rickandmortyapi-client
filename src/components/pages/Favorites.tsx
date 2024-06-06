import { ICharacter } from "@/interfaces";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/slices/favorite";
import { RootState } from "@/store";
import { checkFavorite } from "@/utils";
import { Link } from "react-router-dom";
import { PageLayout } from "../Layout/PageLayout";

export default function Favorites() {
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
      <div className="text-center font-bold text-3xl md:text-5xl lg:text-6xl my-12">Favorites Rick and Morty Characters</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-10">
        {favorites.map((item) => (
          <div key={item.id} className="bg-gray p-3 rounded-xl flex gap-3 w-full relative">
            <img src={item.image} width={140} height={140} className="rounded-lg w-[140px] h-[140px] object-cover" />
            <div>
              <Link to={`/${item.id}`} className="font-bold text-white text-lg hover:text-gray-character transition duration-200">
                {item.name}
              </Link>
              <p className="text-gray-character text-xs mt-2">Status</p>
              <p className="font-semibold text-sm text-white">{item.status}</p>
              <p className="text-gray-character text-xs mt-2">Species</p>
              <p className="font-semibold text-sm text-white">{item.species}</p>
              <p className="text-gray-character text-xs mt-2">Gender</p>
              <p className="font-semibold text-sm text-white">{item.gender}</p>
              <div
                onClick={() => handleFavorite(item)}
                className={`absolute -top-3 -right-3 cursor-pointer ${
                  checkFavorite(item.id, favorites) ? "bg-red" : "bg-gray-character"
                } rounded-full p-3`}
              >
                <FaHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
      {favorites.length == 0 && <p className="text-center">You have no favorites characters</p>}
    </PageLayout>
  );
}
