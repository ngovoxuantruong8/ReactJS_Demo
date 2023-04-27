import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
    query getCharacterId($id: ID!) {
        character(id: $id) {
            id
            name
            image
            episode {
                name
            }
        }
    }
`;

export const useCharacter = (id) => {
    const {
        data: character,
        loading,
        error,
    } = useQuery(GET_CHARACTER, { variables: { id } });

    return {
        character,
        loading,
        error,
    };
};
