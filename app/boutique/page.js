"use client"
import React, { useEffect, useState } from 'react';
import './page.css';
import Pagination from '../components/Pagination/page';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

export default function Boutique() {

    let dark = useSelector((state) => state.darkmode.darkmode);
    const [games, setGames] = useState([]);
    const [fullGames, setFullGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [selectionGenre, setSelectionGenre] = useState('');
    const [selectionDeveloper, setSelectionDeveloper] = useState('');
    const [selectionPlatform, setSelectionPlatform] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/games')
            .then(response => response.json())
            .then(data => {
                setGames(data);
                setFullGames(data);
                setLoading(true);
            })
            .catch(error => {
                console.error(error);
                setLoading(true);
            });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [jeuParPage, setjeuParPage] = useState(33);

    let lastIndex = currentPage * jeuParPage;
    let firstIndex = lastIndex - jeuParPage;

    let currentGame = games.slice(firstIndex, lastIndex).filter(game => 
        game.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectionGenre === '' || game.genre === selectionGenre) &&
        (selectionDeveloper === '' || game.developer === selectionDeveloper) &&
        (selectionPlatform === '' || game.platform === selectionPlatform)
    ); 

    let genres = [];
    let developpeurs = [];
    let platformes = [];

    for (let i = 0; i < fullGames.length; i++) {
        if (!genres.includes(fullGames[i].genre)) {
            genres.push(fullGames[i].genre);
        }
        if (!developpeurs.includes(fullGames[i].developer)) {
            developpeurs.push(fullGames[i].developer);
        }
        if (!platformes.includes(fullGames[i].platform)) {
            platformes.push(fullGames[i].platform);
        }
    }

    return (
        <div className={`boutique ${dark ? "darkmode2" : "lightmode2"}`}>
            <div className="boutique-container">
                <div className="boutique-header">
                    <select onChange={e => setSelectionGenre(e.target.value)}>
                        <option value="">Genres</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                    <select onChange={e => setSelectionDeveloper(e.target.value)}>
                        <option value="">Développeurs</option>
                        {developpeurs.map((developpeur, index) => (
                            <option key={index} value={developpeur}>{developpeur}</option>
                        ))}
                    </select>
                    <select onChange={e => setSelectionPlatform(e.target.value)}>
                        <option value="">Platformes</option>
                        {platformes.map((platforme, index) => (
                            <option key={index} value={platforme}>{platforme}</option>
                        ))}
                    </select>
                    <input placeholder='Recherche personalisée...' type="text" onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="ligne"></div>
                <div className={`boutique-games ${dark ? "" : 'title-game'}`}>
                    {loading ? currentGame.map((game, index) => (
                        <div key={index} className="boutique-game">
                            <Link href={`/boutique/${game.id}`}>
                                <img src={game.thumbnail} alt="game" />
                            </Link>
                            <h3 className={dark ? "" : 'title-game'}>{game.title}</h3>
                        </div>
                    )) : <div>Chargement...</div>}
                </div>
                <div className="boutique-grid-footer">
                    <Pagination total={games.length} jeuParPage={jeuParPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
}













