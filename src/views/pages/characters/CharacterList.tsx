import { FC, ReactNode, useEffect, useState } from "react";
import useCharacterList from "./hooks/useCharacterList";
import SearchBar from "./components/Searchbar";
import CharacterListRendering from "./components/CharacterListRendering";

type LayoutProps = {
  children?: ReactNode;
};

const CharacterList: FC<LayoutProps> = ({ children }) => {
  const [starredCharacters, setStarredCharacters] = useState<Character[]>([]);
  const [normalCharacters, setNormalCharacters] = useState<Character[]>([]);

  const { data, loading, error } = useCharacterList();

  useEffect(() => {
    if (!loading && data) {
      data.characters.forEach((char: Character) => {
        if (char.is_starred) {
          setStarredCharacters((prev) => [...prev, char]);
        } else {
          setNormalCharacters((prev) => [...prev, char]);
        }
      });
    }
  }, [data]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-screen flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-screen overflow-hidden">
      <div className="w-screen md:w-full md:col-span-1 bg-whiteSmoke text-primary overflow-y-auto">
        <section className="sticky top-0 left-0 bg-whiteSmoke pb-8">
          <SearchBar />
        </section>
        <div>
          {!error && data ? (
            <section>
              <CharacterListRendering
                title="Starred characters"
                characters={starredCharacters}
              />
              <CharacterListRendering
                title="Characters"
                characters={normalCharacters}
              />
            </section>
          ) : (
            <div>There were a trouble while gathering the information</div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CharacterList;
