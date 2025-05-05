import { FaHeart, FaRegHeart } from "react-icons/fa6";
import ColumnText from "./ColumnText";
import { useLocation, useNavigate } from "react-router-dom";

const CharacterItemRendering = ({ character }: { character: Character }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavToChar = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="px-4 cursor-pointer" onClick={handleNavToChar}>
      <hr />
      <div
        className={`py-4 px-5 flex flex-row items-center justify-between gap-4 self-stretch ${
            pathname.includes(String(character.id)) && "bg-primary-100 rounded-lg"
        }`}
      >
        <div className="flex flex-row items-center gap-4">
          <img
            height={32}
            width={32}
            alt="Avatar"
            src={character.image_path}
            className="w-8 h-8 rounded-full"
          />
          <ColumnText topText={character.name} bottomText={character.species} />
        </div>
        <div className="w-8 h-8 rounded-full bg-whiteSmoke content-center justify-items-center">
          {character.is_starred ? (
            <FaHeart height={32} width={32} className="text-starred" />
          ) : (
            <FaRegHeart height={32} width={32} className="text-secondary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterItemRendering;
