import { gql, useQuery } from "@apollo/client";

const useCharacterList = () => {
  const CHARACTERS_QUERY = gql`
    {
      characters {
        id
        name
        image_path
        is_starred
        species
      }
    }
  `;

  return useQuery(CHARACTERS_QUERY);
};

export default useCharacterList;
