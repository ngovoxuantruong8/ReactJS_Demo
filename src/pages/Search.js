import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const Search = () => {
    const [name, setName] = useState();

    const GET_CHARACTER_LOCATIONS = gql`
        query getCharacterLocations($name: String!) {
            characters(filter: { name: $name }) {
                results {
                    name
                    location {
                        name
                    }
                }
            }
        }
    `;

    const [getLocations, { data, error, loading, called }] = useLazyQuery(
        GET_CHARACTER_LOCATIONS,
        {
            variables: {
                name,
            },
        },
    );

    console.log({ data, error, loading, called });
    console.log(data && data?.characters?.results);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong</div>}
            {data &&
                data?.characters?.results.map((item) => (
                    <ul>
                        <li>Location: {item.location.name}</li>
                    </ul>
                ))}
        </div>
    );
};

export default Search;
