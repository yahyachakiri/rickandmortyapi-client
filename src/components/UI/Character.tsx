import { ICharacter } from "@/interfaces";
import { checkFavorite } from "@/utils";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface props {
  data: ICharacter;
  favorites: ICharacter[];
  handleFavorite: (item: ICharacter) => void;
}

export const Character = ({ data, handleFavorite, favorites }: props) => {
  return (
    <div className="bg-gray p-3 rounded-xl flex gap-3 w-full relative">
      <img src={data.image} width={140} height={140} className="rounded-lg w-[140px] h-[140px] object-cover" />
      <div>
        <Link to={`/${data.id}`} className="font-bold text-white text-lg hover:text-gray-character transition duration-200">
          {data.name}
        </Link>
        <p className="text-gray-character text-xs mt-2">Status</p>
        <p className="font-semibold text-sm text-white">{data.status}</p>
        <p className="text-gray-character text-xs mt-2">Species</p>
        <p className="font-semibold text-sm text-white">{data.species}</p>
        <p className="text-gray-character text-xs mt-2">Gender</p>
        <p className="font-semibold text-sm text-white">{data.gender}</p>
        <div
          onClick={() => handleFavorite(data)}
          className={`absolute -top-3 -right-3 cursor-pointer ${
            checkFavorite(data.id, favorites) ? "bg-red" : "bg-gray-character"
          } rounded-full p-3`}
        >
          <FaHeart />
        </div>
      </div>
    </div>
  );
};
