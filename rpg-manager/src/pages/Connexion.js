import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import "../css/Connexion.scss"

const HandleSubmit = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    // Récupère les valeurs des champs "Identifiant" et "Mot de passe"
    const identifier = document.getElementById("identifier").value;
    const password = document.getElementById("password").value;
      

    async function auth(){
        var user = {
            identifier: identifier,
            password: password,
        }
        return await fetch('http://localhost:1337/api/auth/local?populate=*', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.error("Identifiant incorrect", error));
        };

        const login = await auth();
        if (login.jwt) {
          // Stocker le JWT dans le localStorage
          await localStorage.setItem('jwt', login.jwt);
          await localStorage.setItem('id', login.user.id);
          await localStorage.setItem('isLogged',true)
          const personnages = await axios.get(`http://localhost:1337/api/users/${login.user.id}?populate=personnages,personnages.Image`);
          console.log("Personnages : ",personnages.data);
          await localStorage.setItem('listPersonnages', JSON.stringify(personnages.data.personnages));
          
        
          window.location.href = '/selectPersonage';
        } else {
          // Afficher un message d'erreur ou rediriger vers une page d'erreur
          alert('Identifiant ou mot de passe incorrect');
          window.location.href = '/';
        }        
    }
  

const Connexion = () => {
  return (
    <div id='body'>
        <Navbar />
        <h1>Connexion</h1>
        <form id="authForm" onSubmit={HandleSubmit}>
            <input type={'text'} placeholder={'Identifiant'} id={'identifier'} />
            <input type={'password'} placeholder={'Mot de passe'} id={'password'} />
            <button type={'submit'}>Se connecter</button>
        </form>
    </div>
  );
};

export default Connexion;
