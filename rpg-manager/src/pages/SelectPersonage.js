import React from 'react';
import Navbar from '../components/Navbar';
import "../css/Connexion.scss"
import "../css/SelectPersonage.scss"

const SelectPersonage = () => {

    function checkAuth() {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          // Le JWT n'est pas présent dans le local storage, on renvoie vers la page de connexion
          window.location.href = '/';
        }
    }
    checkAuth()


    const perso = localStorage.getItem('listPersonnages');
    const listPersonnages = JSON.parse(perso);
    


    const Personnages = Object.keys(listPersonnages).map((key) => (
        <div id="widgetSelectPerso" key={listPersonnages[key].id} onClick={()=> handleClick(listPersonnages[key].id)}>
            <div id='selectPersoName'>
                <h3 id="selectPersoTxt" className=''>{listPersonnages[key].Nom}</h3>
                <h3 id="selectPersoTxt" className=''>{listPersonnages[key].Prenom}</h3>
            </div>
            <img id="imgWidgetSelectPerso" src={'http://localhost:1337' + listPersonnages[key].Image[0].url}></img>
        </div>
    ));
        
    const creationPerso =(
        <div id="widgetSelectPerso" onClick={()=> createPerso()}>
            <img id="imgWidgetSelectPerso" src={'http://localhost:1337/uploads/add_user_fbc1395607.png?updated_at=2023-03-20T15:45:00.657Z'}></img>
        </div>
    )

    async function handleClick(key) {
        await localStorage.setItem('idPerso',key);
        window.open('/personage', '_blank');
    }

    const createPerso = () => {//creation
        window.location.href = '/creation';
    }
      

    return (
        <div id='body'>
        <Navbar />
        <h1>Choisissez votre personnage</h1>
        <div id="TableauSelectionPersonnage">
                {Personnages}
                {creationPerso}
        </div>
    </div>
    );
};

export default SelectPersonage;