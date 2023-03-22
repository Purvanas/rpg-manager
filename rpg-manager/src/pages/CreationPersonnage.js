import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DragAndDrop from '../components/DragAndDrop.js';

import "../css/Connexion.scss"
import "../css/CreationPersonnage.scss"

const CreationPersonnage = () => {
  function checkAuth() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      window.location.href = '/';
    }
  }
  checkAuth()

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
      vieMax:'',//////////////////////////////////////////////////////////////////////////////////////////////////*/
      essence: '',
      essenceMax:'',//////////////////////////////////////////////////////////////////////////////////////////////////*/
      theme: '',
      /*Image: null,
      Backgroundimage: null,*/
      users:localStorage.getItem('id')
    });

    const [image,setImage] = useState ({})
    const [imageBackground,setImageBackground] = useState ({})


    const handleImageUpload = (image) => {setImage(image)}
    const handleImageBackgroundUpload = (image) => {setImage(image)}
  
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


/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////////////FONCTION DE POST EN BDD///////////////////////////////////////////////////////////////////////////    
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////////////////////////////////////////////////////////////*/  

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


/*///////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\    
////////////////////////////////////////////FONCTION DE POST EN BDD///////////////////////////////////////////////////////////////////////////    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  



const FormPersonnage = (
  <div>
    <h1>Création de personnage</h1>
    <div id="FormPersonnage">
      <div id="FormPersonnageCells"><label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="Nom" value={formData.Nom} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="prenom">Prenom:</label>
      <input type="text" id="prenom" name="Prenom" value={formData.Prenom} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="race">Race:</label>
      <input type="text" id="race" name="Race" value={formData.Race} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="taille">Taille:</label>
      <input type="text" id="taille" name="Taille" value={formData.Taille} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="corp">Corp:</label>
      <input type="number" id="corp" name="Corp" value={formData.Corp} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="age">Age:</label>
      <input type="number" id="age" name="Age" value={formData.Age} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="armure">Armure:</label>
      <input type="number" id="armure" name="Armure" value={formData.Armure} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="deplacement">Deplacement:</label>
      <input type="text" id="deplacement" name="Deplacement" value={formData.Deplacement} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="metier">Metier:</label>
      <input type="text" id="metier" name="Metier" value={formData.Metier} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="vie">Vie:</label>
      <input type="number" id="vie" name="vie" value={formData.vie} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="vie">Vie:</label>
      <input type="number" id="vie" name="vie" value={formData.vieMax} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="essence">Essence:</label>
      <input type="number" id="essence" name="essence" value={formData.essence} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="essence">Essence:</label>
      <input type="number" id="essenceMax" name="essence" value={formData.essenceMax} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="theme">Theme:</label>
      <input type="color" id="theme" name="theme" value={formData.theme} onChange={handleChange} required/></div>

      <div id="FormPersonnageCells"><label htmlFor="image">Image:</label>
      <DragAndDrop id={'Image'} /></div>

      <div id="FormPersonnageCells"><label htmlFor="backgroundimage">Background Image:</label>
      <DragAndDrop id={'backgroundimage'} /></div>  

      <button type="submit" onClick={creatObjPerso}>Retour</button>
      <button type="submit" onClick={creatObjPerso}>Suivant</button>
    </div>    
  </div>    
)
     







  const PostPersonnageComplet = async (perso) =>{
    //post image / BackgroundImage et get leur id/nom
    //post perso avec les liens à users,image et background
    //post composition lien à user
    //post spécialitées lien à user
    //post inventaire lien à user
    //post sort lien à user
  }

  return (
      <div id='body'>
          <Navbar />
          {FormPersonnage}
          <div id="espace"/>
      </div>
  );
};

export default CreationPersonnage;