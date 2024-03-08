'use client'
import React from 'react';
import './page.css';
import { useSelector } from 'react-redux';

export default function About() {

    let dark = useSelector((state) => state.darkmode.darkmode);
    return (
        <div className={`about-container ${dark ? "darkmode2" : "lightmode2"}`}>
            <h1 className="about-title">À propos de nous</h1>
            <p className="about-text">
                ICM Gaming a créé les jeux Saikyo no ninjutsu. La technologie ICM RTX overlay d'ICM Gaming permet la création d'expériences interactives réalistes sur PC, console et mobile, mais aussi en réalité alternative, en réalité virtuelle et sur Internet. ICM RTX overlay est disponible gratuitement sur AppStore.
            </p>
            <h2 className="about-contact">Contact</h2>
            <p className="about-text">
                Nous embauchons ! Consultez la page sur notre site web. Téléchargez ICM RTX overlay gratuitement. Contactez-nous pour en savoir plus sur les conditions d'utilisation de la licence.
            </p>
            <p className="about-text">
                Adresse : XX Rue du XXX, 1780 Wemmel, Belgique
            </p>
            <p className="about-text">
                Téléphone : +32 489 89 00 00
            </p>
        </div>
    );
}