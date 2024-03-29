import React from 'react';
import Navigation from '../components/Navigation.js';
import Collapse from '../components/Collapse.js'
import Footer from '../components/Footer.js';

const Aboutpage = () => {
    const aboutData = [
        {
          "title" : "Fiabilité",
          "content" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }, {
          "title" : "Respect",
          "content" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme."
        }, {
          "title" : "Service",
          "content" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme."
        }, {
          "title" : "Sécurité",
          "content" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return (
        <div>
            <Navigation/>
            <div>
                {aboutData.map((data, index) => (
                    <Collapse key={index} title={data.title} content={data.content}/>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Aboutpage;