import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonageTableauStat from '../components/PersonageTableauStat';
import PersonageTableauSpecialite from '../components/PersonageTableauScpecialite';
import PersonageTableauInventaire from '../components/PersonageTableauInventaire';
import "../css/style.scss"
import "../css/PersonageTableauInventaire.scss"
import "../css/PersonageTableauSpecialite.scss"
import "../css/PersonageTableauStat.scss"



const Personage = () => {
    const apiPerso = "http://localhost:1337/api/personnages/"


    const dataInventaire = {
      po:{
        libelle:"Pièces d'or",
        quantite:600,
        poids:3, //poids en gramme
        details:"none",
      },
      potionVie:{
        libelle:"Potion de vie",
        quantite:2,
        poids:250, //poids en gramme
        details:"Rend des points de vie",
      },
      potionEssence:{
        libelle:"Potion d'essence",
        quantite:2,
        poids:250, //poids en gramme
        details:"Rend des points d'essence",
      }
    }

    const [personnage, setPersonnage] = useState({});
    const [spécialités, setSpécialités] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [inventaire, setInventaire] = useState({});

    function formatJson(jsonObj) {
        const { createdAt, updatedAt, ...rest } = jsonObj;
        return rest;
      }
    
    const getData = async () => {
        const id = 1 //A changer par une requete d'api

        const response = await axios.get(apiPerso+id);
        const spec = await axios.get(apiPerso+id+'?populate=*')
        const imgUrl = spec.data.data.attributes.Image.data[0].attributes.url

        const data = formatJson(response.data.data.attributes)
        const dataSpec = formatJson(spec.data.data.attributes.specialite.data.attributes)


        setPersonnage(data);
        setSpécialités(dataSpec)
        setImageUrl('http://localhost:1337'+imgUrl);
        setInventaire(dataInventaire);
    }


    useEffect(() => {
        const interval = setInterval(() => {
          getData();
        }, 5000); // 5000 millisecondes = 5 secondes
        return () => clearInterval(interval);
      }, []);


    return ( 
        <div id="main">
            <div id="divImg"><img id="img" /* Dimension max de l'image 300*300 */ src={imageUrl}></img></div>
            <div id="tableauStat">
                <h2>Personnage</h2>
                <PersonageTableauStat value={personnage} /> 
                <PersonageTableauSpecialite value={spécialités}/>
                <PersonageTableauInventaire value={dataInventaire} />
            </div>
        </div>
    );
};

export default Personage;
