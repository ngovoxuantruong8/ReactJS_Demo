import './CharactersList.css';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

const CharactersList = () => {
    const { characters, loading } = useCharacters();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="characters">
            {characters &&
                characters.characters.results.map(({ id, name, image }) => (
                    <Link to={`${id}`} key={id}>
                        <img src={image} alt="name" />
                        <h2>{name}</h2>
                    </Link>
                ))}
        </div>
    );
};

export default CharactersList;
