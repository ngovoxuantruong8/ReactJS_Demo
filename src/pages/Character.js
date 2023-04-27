import './Character.css';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router-dom';

const Character = () => {
    const params = useParams();

    const { character, loading, error } = useCharacter(params.id);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Something went wrong!</h1>;
    }

    return (
        <div className="character">
            <div className="character-info">
                <h1>Character</h1>

                <div>{character?.character?.name}</div>
                <img
                    src={character?.character?.image}
                    alt="#!"
                    width={350}
                    height={350}
                />
            </div>

            <div className="character-content">
                {character?.character?.episode.map((episode) => (
                    <div key={episode.name}>Episode {episode.name} </div>
                ))}
            </div>
        </div>
    );
};

export default Character;
