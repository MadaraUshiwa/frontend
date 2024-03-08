'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from '../../loading'
import { SiWindows11 } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@/app/redux/features/panierSlice";
import './page.css'

export default function BoutiqueDetails(params) {

    const [loading,setLoading] = useState(true)
    const [games,setGames] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:3000/api/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(true)
            });
    }, []);

    let id = parseInt(params.params.boutiqueID)

    let game = games.find(game => game.id === id)
    let dark = useSelector((state) => state.darkmode.darkmode);

    return (
        loading ? <Loading /> :
        <div className={`boutique-details ${dark ? "darkmode2" : "lightmode2"}`}>
            <div className="details-container">
                <Link href="/boutique" className="back"><TiArrowBackOutline />Retour vers la boutique</Link>
                <div className="details-content2">
                    <h1>{game.title}</h1>
                    <div className="details-text">
                        <p>{game.short_description}</p>
                        <p><span className="details-title">Genre :</span> <span className="detail">{game.genre}</span></p>
                        <p><span className="details-title">Publisher :</span> <span className="detail">{game.publisher}</span></p>
                        <p><span className="details-title">Developer :</span> <span className="detail">{game.developer}</span></p>
                        <p><span className="details-title">Release Date :</span> <span className="detail">{game.release_date}</span></p>
                        {game.platform === "PC (Windows)" ? <SiWindows11 className="platform-logo" /> : <BsBrowserChrome className="platform-logo" /> }
                    </div>
                    <div className="details-footer">
                        <div className="details-links">
                            <a href={game.game_url} target="_blank">Site officiel</a>
                            <div className="seperator-links"></div>
                            <a href={game.freetogame_profile_url} target="_blank">Plus d'info</a>
                        </div>
                        <div className="details-btn">
                            <button onClick={() => dispatch(addFavorite(game))} className="btn-details">Add to favorites</button>
                        </div>
                    </div>
                </div>
                <div className="details-content">
                    <img src={game.thumbnail} alt="Image Jeu" />
                </div>

            </div>
        </div>
    );
}