'use client';
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './faq.css'
import logo from '../assets/logo.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';


const faqs = [
  {
    question: "1. C'est quoi un jeu vidéo ?",
    reponse: "Un jeu vidéo est un loisir interactif utilisant un dispositif électronique pour générer une interaction visuelle et/ou sonore. Le joueur utilise des manettes ou un clavier pour influencer le déroulement du jeu."
  },
  {
    question: "2. Quels sont les différents types de jeux vidéo ? ",
    reponse: "Réponse à la question 2 ."
  },
  {
    question: "3. Quelle est la meilleure console de jeux vidéo ? ",
    reponse: "La meilleure console de jeux vidéo dépend de vos préférences et de votre budget ."
  },
  {
    question: "4. Comment choisir un jeu vidéo ? ",
    reponse: "Pour choisir un jeu vidéo, il est important de tenir compte de vos goûts personnels."
  },
  {
    question: "5. Les jeux vidéo sont-ils bons pour la santé ?",
    reponse: "Les jeux vidéo peuvent avoir des effets positifs et négatifs sur la santé. D'un côté, ils peuvent améliorer la coordination œil-main, la réflexion stratégique et la résolution de problèmes. D'un autre côté, ils peuvent favoriser la sédentarité et l'addiction."
  },
];

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(null);
    let dark = useSelector((state) => state.darkmode.darkmode);
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className={`faqparent ${dark ? "darkmode2" : "lightmode2"}`}>
        <div className={`faqprincipale ${dark ? "darkmode2" : "lightmode2"}`}>
          <h1 className={`${dark ? "text-light" : "text-dark"}`}><Image src={logo} width={100} height={100} />FAQ</h1>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className='faqcontent' onClick={() => handleClick(index)}>
                <h2>{faq.question}</h2>
                <FaArrowDown />
              </div>
              <p className={activeIndex === index ? 'open' : ''}>{faq.reponse}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }