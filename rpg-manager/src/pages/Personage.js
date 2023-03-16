import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonageTableauStat from '../components/PersonageTableauStat';
import "../css/style.scss"
import PersonageTableauSpecialite from '../components/PersonageTableauScpecialite';


const Personage = () => {
    const apiPerso = "http://localhost:1337/api/personnages/"

    const [personnage, setPersonnage] = useState({});
    const [spécialités, setSpécialités] = useState({});
    const [imageUrl, setImageUrl] = useState("");

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
            </div>
        </div>
    );
};

export default Personage;
