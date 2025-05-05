import { gql, useQuery } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query Characters($name: String, $species: String, $is_starred: Boolean) {
    characters(name: $name, species: $species, is_starred: $is_starred) {
      id
      name
      image_path
      is_starred
      species
    }
  }
`;

type CharactersQueryVariables = {
  name?: string;
  species?: string;
  is_starred?: boolean;
};

const useCharacterList = (filters: FilterValues) => {
  const variables: CharactersQueryVariables = {};

  if (filters.character === "Starred") {
    variables.is_starred = true;
  } else if (filters.character === "Others") {
    variables.is_starred = false;
  }

  if (filters.specie !== "All") variables.species = filters.specie;
  if (filters.name.trim() !== "") variables.name = filters.name.trim();

  return useQuery(CHARACTERS_QUERY, { variables });
};

export default useCharacterList;
