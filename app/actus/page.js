
'use client'
import "./actus.css"
import image1 from "../assets/palworld.jpg"
import image2 from "../assets/wow.jpg"
import imageff from "../assets/ff.jpg"
import imagelol from "../assets/lol.jpg"
import imagefortnite from "../assets/fortnite.jpg"
import imagerust from "../assets/rust.jpg"
import imagesf from "../assets/sf.jpg"
import Image from 'next/image'
import { useSelector } from "react-redux"
import Link from "next/link"


export default function Actus () {

    let dark = useSelector((state) => state.darkmode.darkmode);

    return (
        <div className={`actus ${dark ? "darkmode2" : "lightmode2"}`}>
            <div className="actuscontent">
                <div className="actustitre">
                    <h1 className={`${dark ? "text-light" : "text-dark"}`}>Actus d'Imc Games</h1>
                </div>   
                <div className="actusbigimg">
                    <div className="actusbigleft">
                    <Image id="imgaoe" src={image1} alt="actu1" />
                        <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 16 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Les joueurs de Palworld se plaignent. Les développeurs prennent la peine de mettre en place un correctif, mais ça ne suffit pas !</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>La dernière mise à jour de Palworld, le jeu de survie qui a fait sensation en ce début d’année, ne fait pas l’unanimité.</p> 
                        <Link href="/actus/palworld">Lire plus ...</Link>
                        
                    </div>
                    <div className="actusbigright">
                    <Image id="imgwow" src={image2} alt="actu1" />
                        <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 21 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Le Super Bowl conclut la saison de la NFL, mais il reste encore une bonne dose de football américain dans Madden 24</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Vous êtes triste pour les Lions ? Créez une franchise. Vous avez hâte de découvrir les champions du Super Bowl ? Le MVP débarque dans Ultimate Team avec une carte notée 99</p> 
                        <a href="">Lire plus ...</a>
                    </div>

                </div> 
                <div className="actuligne"></div>

                <div className="ff">
                    <Image id="imgff" src={imageff} alt="actu1" />
                    <div className="ffcontenu">
                    <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 17 H</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Final Fantasy 7 Rebirth : qui est ce personnage mystérieux qui n'était pas présent dans le jeu FF7 d'origine ?</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Après presque quatre ans d'attente, Final Fantasy VII Rebirth est enfin disponible, et ça tombe bien puisqu'au fil des mois, la communauté a...</p> 
                        <Link href="/actus/ff">Lire plus ...</Link>
                    </div>
                </div>

                <div className="actuligne"></div>

                <div className="ff">
                    <Image id="imgff" src={imagefortnite} alt="actu1" />
                    <div className="ffcontenu">
                    <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 21 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Le Super Bowl conclut la saison de la NFL, mais il reste encore une bonne dose de football américain dans Madden 24</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Vous êtes triste pour les Lions ? Créez une franchise. Vous avez hâte de découvrir les champions du Super Bowl ? Le MVP débarque dans Ultimate Team avec une carte notée 99</p> 
                        <Link href="/actus/fortnite">Lire plus ...</Link>
                    </div>
                </div>


                <div className="actuligne"></div>

                <div className="ff">
                    <Image id="imgff" src={imagerust} alt="actu1" />
                    <div className="ffcontenu">
                    <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 21 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Le Super Bowl conclut la saison de la NFL, mais il reste encore une bonne dose de football américain dans Madden 24</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Vous êtes triste pour les Lions ? Créez une franchise. Vous avez hâte de découvrir les champions du Super Bowl ? Le MVP débarque dans Ultimate Team avec une carte notée 99</p> 
                        <a href="">Lire plus ...</a>
                    </div>
                </div>


                <div className="actuligne"></div>

                <div className="ff">
                    <Image id="imgff" src={imagelol} alt="actu1" />
                    <div className="ffcontenu">
                    <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 21 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Le Super Bowl conclut la saison de la NFL, mais il reste encore une bonne dose de football américain dans Madden 24</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Vous êtes triste pour les Lions ? Créez une franchise. Vous avez hâte de découvrir les champions du Super Bowl ? Le MVP débarque dans Ultimate Team avec une carte notée 99</p> 
                        <a href="">Lire plus ...</a>
                    </div>
                </div>

                <div className="actuligne"></div>

                <div className="ff">
                    <Image id="imgff" src={imagesf} alt="actu1" />
                    <div className="ffcontenu">
                    <h6 className={`actusjour ${dark ? "" : "text-dark"}`}>IL Y A 21 J</h6>
                        <p className={`actustitreimg ${dark ? "" : "text-dark"}`}>Le Super Bowl conclut la saison de la NFL, mais il reste encore une bonne dose de football américain dans Madden 24</p>
                        <p className={`actuscontenu ${dark ? "" : "text-dark"}`}>Vous êtes triste pour les Lions ? Créez une franchise. Vous avez hâte de découvrir les champions du Super Bowl ? Le MVP débarque dans Ultimate Team avec une carte notée 99</p> 
                        <a href="">Lire plus ...</a>
                    </div>
                </div>

                <div className="actupad"></div>










            </div>
        </div>
    )
}