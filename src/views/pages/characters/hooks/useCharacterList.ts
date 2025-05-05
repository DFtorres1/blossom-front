import { gql, useQuery } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query Character {
    characters {
      id
      name
      image_path
      is_starred
      species
    }
  }
`;

const useCharacterList = () => {
  return useQuery(CHARACTERS_QUERY);
};

export default useCharacterList;
