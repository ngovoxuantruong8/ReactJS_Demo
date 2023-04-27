import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

export const useCharacters = () => {
    const { data: characters, loading } = useQuery(GET_CHARACTERS);
    return { characters, loading };
};
