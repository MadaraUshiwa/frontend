"use client"
import './Footer.css';
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import Image from 'next/image';


import React from 'react';



function Footer() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const getRandomGame = () => {
        if (games.length === 0) {
            return "Chargement des jeux...";
        }
        const randomIndex = Math.floor(Math.random() * games.length);
        return games[randomIndex].title;
    }

    return (
        <div className="footer">
            <div className="footertop">
                <div className="footertopleft">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <IoLogoFacebook />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
                <div className="footertopright">
                    <a href="#top">
                        <GoArrowUp />
                    </a>
                    <h1 >RETOUR EN HAUT</h1>
                </div>
            </div>  
            <div className='footermid'>
                <div className="grid-container">
                    <div className="grid-item">
                        <h4>JEUX</h4>
                        <ul>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li>
                            <li>{getRandomGame()}</li> 
                        </ul>
                    </div>

                    <div className="grid-item">
                        <h4>MARCHES</h4>
                        <ul>
                            <li>ICM Games Store</li>
                            <li>Fab</li>
                            <li>Sketchfab</li>
                            <li>ICM Engine Marketplace</li>
                            <li>ArtStation</li>
                            <li>Politique de remboursement</li>
                            <li>ALUF de l'ICM Gaming</li>
                        </ul>
                    </div>

                    <div className="grid-item">
                        <h4>OUTILS</h4>
                        <ul>
                            <li>ICM Engine</li>
                            <li>UEFN</li>
                            <li>MetalHuman</li>
                            <li>Twinmotion</li>
                            <li>Megascans</li>
                            <li>RealityScan</li>
                            <li>Rad Game Tools</li>
                        </ul>    
                    </div>

                    <div className="grid-item">
                        <h4>SERVICE EN LIGNE</h4>
                        <ul>
                            <li>ICM Online Services</li>
                            <li>Kids Web Services</li>
                            <li>Accord de services</li>
                            <li>Politique d'utilisation acceptable</li>
                            <li>Déclaration de confiance</li>
                            <li>Liste des sous-traitants</li>
                        </ul>
                    </div>

                    <div className="grid-item">
                        <h4>RESSOURCES</h4>
                        <ul>
                            <li>Communauté de développement</li>
                            <li>MegaGrants</li>
                            <li>Soutenez un créateur</li>
                            <li>Accord de créateur</li>
                            <li>Publier sur l'ICM Games Store</li>
                            <li>Directives de la marque</li>
                            <li>Politique de contenu des fans</li>
                            <li>Règles de la communauté</li>
                        </ul>    
                    </div>
                    <div className="grid-item">
                        <h4>ENTREPRISE</h4>
                        <ul>
                            <li>A propos</li>
                            <li>Newsroom</li>
                            <li>Carrières</li>
                            <li>Aux étudiants</li>
                            <li>2tudes sur l'experience utilisateur</li>
                        </ul>    
                    </div>
                </div>
                <div className="ligne"></div>
            <div className="footerbottom">
                <div className="copy">
                    <span>© 2024, ICM Corp. Tous droits réservés. ICM, ICM gaming, le logo ICM gaming, ICM game, le logo ICM game, ICM corp, et le logo ICM corp sont des marques ou des marques déposées d'ICM Corp. aux États-Unis et ailleurs. Les autres marques ou noms de produit appartiennent à leurs propriétaires respectifs.</span>
                </div>
                <div className="logofooter">
                    <Image src={logo} alt="logo" width={80} height={70} />
                </div>
            </div>
            </div>
              

              
        </div>
    );
}

export default Footer;