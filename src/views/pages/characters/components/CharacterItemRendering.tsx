import { FaHeart, FaRegHeart } from "react-icons/fa6";

const CharacterItemRendering = ({ character }: { character: Character }) => {
  return (
    <div className="px-4">
      <hr />
      <div className="py-4 px-5 flex flex-row items-center justify-between gap-4 self-stretch">
        <div className="flex flex-row items-center gap-4">
          <img
            height={32}
            width={32}
            alt="Avatar"
            src={character.image_path}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col w-full">
            <span className="text-base font-semibold">{character.name}</span>
            <span className="text-base font-normal">{character.species}</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white content-center justify-items-center">
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
