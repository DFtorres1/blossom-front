import { useParams } from "react-router-dom";
import useCharacterDetail from "./hooks/useCharacterDetail";
import { useEffect, useState } from "react";
import ColumnText from "./components/ColumnText";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface CharacterDescription {
  title: string;
  description: string;
}

const CharacterDetail = () => {
  const [character, setCharacter] = useState<Character>();
  const [characterDescription, setCharacterDescription] =
    useState<CharacterDescription[]>();

  const { id } = useParams();
  const { data, loading, error } = useCharacterDetail(+(id ?? 0));

  useEffect(() => {
    if (!loading && data) {
      setCharacter(data.character);
    }
  }, [data, loading]);

  useEffect(() => {
    if (character) {
      let description: CharacterDescription[] = [];
      description.push({ title: "Specie", description: character.species });
      description.push({ title: "Status", description: character.status });
      description.push({ title: "Origin", description: character.origin.name });
      setCharacterDescription([...description]);
    }
  }, [character]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <section
      className={`${id ? "": "hidden" } md:col-span-1 lg:col-span-2 xl:col-span-3 md:block px-6 md:px-24 py-10`}
    >
      {id ? (
        <div>
          {!error && character ? (
            <div className="flex flex-col">
              <section className="pb-4 flex flex-col">
                <div className="relative w-20 h-20">
                  <img
                    src={character.image_path}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
                    {character.is_starred ? (
                      <FaHeart className="text-starred" />
                    ) : (
                      <FaRegHeart className="text-secondary" />
                    )}
                  </div>
                </div>
                <span className="text-2xl font-bold">{character.name}</span>
              </section>
              <section className="flex flex-col">
                {characterDescription?.map((desc, idx) => (
                  <>
                    {idx !== 0 && <hr />}
                    <div className="py-4">
                      <ColumnText
                        key={desc.title}
                        topText={desc.title}
                        bottomText={desc.description}
                      />
                    </div>
                  </>
                ))}
              </section>
            </div>
          ) : (
            <div>There was a trouble while gathering the information</div>
          )}
        </div>
      ) : (
        <h5 className="text-5xl">Select a character</h5>
      )}
    </section>
  );
};

export default CharacterDetail;
