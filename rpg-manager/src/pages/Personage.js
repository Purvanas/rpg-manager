import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonageTableauStat from '../components/PersonageTableauStat';
import PersonageTableauSpecialite from '../components/PersonageTableauScpecialite';
import PersonageTableauInventaire from '../components/PersonageTableauInventaire';
import "../css/style.scss"
import "../css/PersonageTableauInventaire.scss"
import "../css/PersonageTableauSpecialite.scss"
import "../css/PersonageTableauStat.scss"
import "../css/PersonageTableauVie.scss"
import PersonageTableauVie from '../components/PersonageTableauVie';



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
    const [constanteVital, setConstanteVital] = useState({});
    const [spécialités, setSpécialités] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [inventaire, setInventaire] = useState({});

    function formatJson(jsonObj) { //supprime le createAt et le updateAt
        const { vie, vieMax, essence, essenceMax, createdAt, updatedAt, ...rest } = jsonObj;
        return rest;
      }
    
    function formatVie(obj){
      const { vie, vieMax, essence, essenceMax, ...rest } = obj;
      return { vie, vieMax, essence, essenceMax}
    }
    
    function formatInventaire(arr){
      let nouvelObjet = {};

      arr.forEach(function(objet) {
        for (let propriete in objet) {
          nouvelObjet[propriete] = objet[propriete];
        }
      });
      return nouvelObjet
    }
    
    const getData = async () => {
        const id = 1 //A changer par une requete d'api

        const response = await axios.get(apiPerso+id);
        const spec = await axios.get(apiPerso+id+'?populate=*')
        const getInv = await axios.get(apiPerso+id+'?populate=inventaires,inventaires.objet,inventaires.personnage')

        console.log("getInv : ",getInv.data.data.attributes.inventaires.data)

        const imgUrl = spec.data.data.attributes.Image.data[0].attributes.url
        const dataInventaire = getInv.data.data.attributes.inventaires.data

        const data = formatJson(response.data.data.attributes)
        const vie = formatVie(response.data.data.attributes)
        const dataSpec = formatJson(spec.data.data.attributes.specialite.data.attributes)

        const formatInv = formatInventaire(dataInventaire)
        console.log("formatInv : ",formatInv.attributes)



        setPersonnage(data);
        setSpécialités(dataSpec)
        setConstanteVital(vie)
        setImageUrl('http://localhost:1337'+imgUrl);
        setInventaire(formatInv);
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
            <PersonageTableauStat value={personnage} />
            <PersonageTableauVie value={constanteVital}/> 
            <PersonageTableauSpecialite value={spécialités}/>
            <PersonageTableauInventaire value={inventaire} />
        </div>
    );
};

export default Personage;
