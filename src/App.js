import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CharactersList />} />
                    <Route path="search" element={<Search />} />
                    <Route path="/:id" element={<Character />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
