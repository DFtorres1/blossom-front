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

const useCharacterList = (filters: { character: string; specie: string }) => {
  const variables: any = {};

  if (filters.character === "Starred") {
    variables.is_starred = true;
  } else if (filters.character === "Others") {
    variables.is_starred = false;
  }

  if (filters.specie !== "All") variables.species = filters.specie;

  return useQuery(CHARACTERS_QUERY, { variables });
};

export default useCharacterList;
