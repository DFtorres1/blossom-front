import { gql, useQuery } from "@apollo/client";

const useCharacterDetail = (id: number) => {
  const CHARACTER_QUERY = gql`
    {
      character(id:${id}) {
        name
        image_path
        is_starred
        species
        status
        origin {
            name
        }
      }
    }
  `;

  return useQuery(CHARACTER_QUERY);
};

export default useCharacterDetail;
