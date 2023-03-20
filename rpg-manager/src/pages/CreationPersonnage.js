import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import "../css/Connexion.scss"
import "../css/CreationPersonnage.scss"

const CreationPersonnage = () => {

  let PersonnageComplet = {
    Personnage:{},
    Composition:{},
    Spécialités:{},
    Sorts:[],
    Stuff:[],
    Inventaire:[],
    Image:{},
    Backgroundimage:{}
  }

  /*const objetPerso = { 
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
      }*/

  function checkAuth() {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        window.location.href = '/';
      }
  }
  checkAuth()

  const [formData, setFormData] = useState({
      Nom: '',
      Prenom: '',
      Race: '',
      Taille: '',
      Corp: '',
      Age: '',
      Armure: '',
      Deplacement: '',
      Metier: '',
      vie: '',
      essence: '',
      theme: '',
      Image: null,
      Backgroundimage: null
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleImageChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    };
  
    const creatObjPerso = (event) => {
      event.preventDefault();
      const {Image, Backgroundimage, ...rest} = formData;
      PersonnageComplet.Personnage = rest;
      PersonnageComplet.Image = Image;
      PersonnageComplet.Backgroundimage = Backgroundimage;
      console.log(PersonnageComplet);
    };
  

  



const FormPersonnage = (
  <div>
    <h1>Création de personnage</h1>
    <div id="FormPersonnage">
      <label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="Nom" value={formData.Nom} onChange={handleChange} required/>

      <label htmlFor="prenom">Prenom:</label>
      <input type="text" id="prenom" name="Prenom" value={formData.Prenom} onChange={handleChange} required/>

      <label htmlFor="race">Race:</label>
      <input type="text" id="race" name="Race" value={formData.Race} onChange={handleChange} required/>

      <label htmlFor="taille">Taille:</label>
      <input type="text" id="taille" name="Taille" value={formData.Taille} onChange={handleChange} required/>

      <label htmlFor="corp">Corp:</label>
      <input type="number" id="corp" name="Corp" value={formData.Corp} onChange={handleChange} required/>

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="Age" value={formData.Age} onChange={handleChange} required/>

      <label htmlFor="armure">Armure:</label>
      <input type="number" id="armure" name="Armure" value={formData.Armure} onChange={handleChange} required/>

      <label htmlFor="deplacement">Deplacement:</label>
      <input type="text" id="deplacement" name="Deplacement" value={formData.Deplacement} onChange={handleChange} required/>

      <label htmlFor="metier">Metier:</label>
      <input type="text" id="metier" name="Metier" value={formData.Metier} onChange={handleChange} required/>

      <label htmlFor="vie">Vie:</label>
      <input type="number" id="vie" name="vie" value={formData.vie} onChange={handleChange} required/>

      <label htmlFor="essence">Essence:</label>
      <input type="number" id="essence" name="essence" value={formData.essence} onChange={handleChange} required/>

      <label htmlFor="theme">Theme:</label>
      <input type="color" id="theme" name="theme" value={formData.theme} onChange={handleChange} required/>

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="Image" accept="image/*" onChange={handleImageChange} required/>

      <label htmlFor="backgroundimage">Background Image:</label>
      <input type="file" id="backgroundimage" name="Backgroundimage" accept="image/*" onChange={handleImageChange} required/>  

      <button type="submit" onClick={creatObjPerso}>Créer le personnage</button>
    </div>    
  </div>    
)
     

    const postPersonnage = async (data) => {//MODIFICATION EN BDD
      console.log(data)
		return await fetch('http://localhost:1337/api/personnages', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Authorization': "Bearer " + localStorage.getItem('jwt'),
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.catch(error => console.error("POST Peronnage", error));
	};


  return (
      <div id='body'>
          <Navbar />
          {FormPersonnage}
          <div id="espace"/>
      </div>
  );
};

export default CreationPersonnage;