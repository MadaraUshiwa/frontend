"use client";
import "./page.css"
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from '../redux/features/panierSlice'; 
import { TiArrowBackOutline } from "react-icons/ti";
import Link from "next/link";


export default function Panier() {
    const dispatch = useDispatch();
    let dark = useSelector((state) => state.darkmode.darkmode);
    const panier = useSelector((state) => state.panier.content);

    return (
        <div className={`panier ${dark ? "darkmode2" : "lightmode2"}`}>
            <div className="panier-container">
                <div className="panier-detail">
                    <div className="panier-back">
                        <Link href="/boutique"><TiArrowBackOutline />Retour vers la boutique</Link>
                    </div>
                    <h1>Panier</h1>
                    <div className="panier-content">
                    {panier.length === 0 ? <p>Vos favoris sont vides</p> : panier.map((game,index) => (
                                <div key={index} className='panier-items'>
                                    <img src={game.thumbnail} alt="game" />
                                    <div className='panier-items-text'>
                                        <p>{game.title}</p>
                                        <button onClick={() => dispatch(removeFavorite(game))}>Remove</button>
                                    </div>
                                </div>
                            ))
                            }
                    </div>
                </div>
                <div className="panier-summary">
                    <h1>Résumé</h1>
                    <div className="panier-summary-content">
                        <div className="summary-price">
                            <p>Prix officiel</p>
                            <p>prix</p>
                        </div>
                        <div className="summary-total">
                            <p>Sous-total</p>
                            <p>prix</p>
                        </div>
                        <div className="summary-button">
                            <button>Aller au paiement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}