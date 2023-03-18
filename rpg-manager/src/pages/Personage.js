import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonageTableauStat from '../components/PersonageTableauStat';
import PersonageTableauSpecialite from '../components/PersonageTableauScpecialite';
import PersonageTableauInventaire from '../components/PersonageTableauInventaire';
import PersonageTableauVie from '../components/PersonageTableauVie';
import PersonageTableauSort from '../components/PersonageTableauSort';
import PersonageTableauComposition from '../components/PersonageTableauComposition';

import "../css/PersonageTableauComposition.scss"
import "../css/style.scss"
import "../css/PersonageTableauInventaire.scss"
import "../css/PersonageTableauSpecialite.scss"
import "../css/PersonageTableauStat.scss"
import "../css/PersonageTableauVie.scss"
import "../css/PersonageTableauSort.scss"



const Personage = () => {
    const apiPerso = "http://localhost:1337/api/personnages/"

    const [personnage, setPersonnage] = useState({});
    const [constanteVital, setConstanteVital] = useState({});
    const [spécialités, setSpécialités] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [inventaire, setInventaire] = useState({});
    const [sort, setSort] = useState({});
    const [composition, setComposition] = useState({}); 
    const [theme, setTheme] = useState(""); 

    function formatJson(jsonObj) { //supprime le createAt et le updateAt
        const { vie, vieMax, essence, essenceMax, createdAt, updatedAt, theme, ...rest } = jsonObj;
        return rest;
      }


    function extractInventoryList(obj) {
      const inventoryData = obj.data.attributes.inventaires.data;
      const inventoryList = inventoryData.map(item => ({
        key: item.id,
        libelle: item.attributes.objet.data.attributes.libelle,
        poids: item.attributes.objet.data.attributes.poids,
        details: item.attributes.objet.data.attributes.details,
        quantité: item.attributes.quantite,
      }));
      return inventoryList;
    }  

    function extractSpellList(obj) {
      const sortData = obj.data.attributes.sorts.data;
      const sortList = sortData.map(item => ({
        key: item.id,
        libelle: item.attributes.libelle,
        niveau: item.attributes.niveau,
        description: item.attributes.description,
        degats: item.attributes.degats,
        cout: item.attributes.cout,
        effet: item.attributes.effet,
      }));
      return sortList;
    }
    
    function formatVie(obj){
      const { vie, vieMax, essence, essenceMax, ...rest } = obj;
      return { vie, vieMax, essence, essenceMax}
    }

    
    const getData = async () => {
        const id = 1 //A changer par une requete d'api

        const response = await axios.get(apiPerso+id);
        const spec = await axios.get(apiPerso+id+'?populate=*')
        const getInv = await axios.get(apiPerso+id+'?populate=inventaires,inventaires.objet')
        const getSort = await axios.get(apiPerso+id+'?populate=sorts')
        
        
        const compo = spec.data.data.attributes.composition.data.attributes
        const imgUrl = spec.data.data.attributes.Image.data[0].attributes.url
        const background = spec.data.data.attributes.backgroundimage.data.attributes.url
        document.documentElement.style.backgroundImage = `url('http://localhost:1337${background}')`;
        

        const data = formatJson(response.data.data.attributes)
        const theme = response.data.data.attributes.theme;

        const vie = formatVie(response.data.data.attributes)
        const dataSpec = formatJson(spec.data.data.attributes.specialite.data.attributes)
        const inv = extractInventoryList(getInv.data)
        const spell = extractSpellList(getSort.data)

        setPersonnage(data);
        setSpécialités(dataSpec)
        setConstanteVital(vie)
        setImageUrl('http://localhost:1337'+imgUrl);
        setInventaire(inv);
        setSort(spell)
        setComposition(compo)
        setTheme(theme)
    }



    const showIventaire = () =>{
      var div1 = document.getElementById("tableauObjet");
      var div2 = document.getElementById("tableauSort");

      div1.style.visibility = "visible";
      div2.style.visibility = "hidden";      

    }

    const showSort = () =>{
      var div1 = document.getElementById("tableauObjet");
      var div2 = document.getElementById("tableauSort");

      div1.style.visibility = "hidden";
      div2.style.visibility = "visible";
    }


    useEffect(() => {
      getData();
      const interval = setInterval(() => {
        getData();
      }, 5000); // 5000 millisecondes = 5 secondes
      return () => clearInterval(interval);
    }, []);

    

    return ( 
        <div id="main">
            <div id="divImg"><img id="img" /* Dimension max de l'image 300*300 */ src={imageUrl}></img></div>
            <div id="boutonSwitchSortInventaire">
              <button id="btnSwitch" onClick={showIventaire} style={{ backgroundColor: theme }}>Inventaire</button>
              <button id="btnSwitch" onClick={showSort} style={{ backgroundColor: theme }}>Sorts</button>
            </div>        
            <PersonageTableauStat value={personnage} theme={theme} />
            <PersonageTableauVie value={constanteVital} theme={theme} /> 
            <PersonageTableauSpecialite value={spécialités} theme={theme} />
            <PersonageTableauInventaire value={inventaire} theme={theme} />
            <PersonageTableauSort value={sort} theme={theme}/>
            <PersonageTableauComposition value={composition} theme={theme} />
        </div>
    );
};

export default Personage;
