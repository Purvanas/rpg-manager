import React from 'react';
import Navbar from '../components/Navbar';

import "../css/Connexion.scss"

const CreationPersonnage = () => {

    function checkAuth() {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          window.location.href = '/';
        }
    }
    checkAuth()



    const objetPerso = { 
        "data":{
          "Nom":"test1",
          "Prenom":"test1",
          "Race":"race",
          "Taille":"taille",
          "Corp":0,
          "Age":25,
          "Armure":10,
          "Deplacement":"6m",
          "Metier":"sdf",
          "vie":63,
          "vieMax":63,
          "essence":63,
          "essenceMax":63,
          "theme":"#86E7E7"
        }
      }

    const postPersonnage = async () => {//MODIFICATION EN BDD
	    var dataObj = {
			data:{
                name:project.name,
                client:appsmith.store.userId
            }
		}
		return await fetch('http://strapi.local/api/projects', {
			method: 'POST',
			body: JSON.stringify(dataObj),
			headers: {
				'Authorization': "Bearer " + appsmith.store.jwt,
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.catch(error => console.error("post project", error));
	}


    return (
        <div id='body'>
            <Navbar />
            <h1>Création de personnage</h1>
            
        </div>
    );
};

export default CreationPersonnage;