import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const deconnexion = () =>{
        localStorage.removeItem('jwt')
        localStorage.removeItem('listPersonnages')
        localStorage.removeItem('idPerso')
        localStorage.removeItem('isLogged')
    }
    const showDeco = () => {
        if(localStorage.getItem("isLogged"))
        return(<Link to="/"><div id="navLink" onClick={deconnexion}><p>Déconnexion</p></div></Link>)
        else{
            return(<div></div>)
        }
    }

    return (
        <nav>
            <Link to="/"><div id="navLink"><p>Connexion</p></div></Link>
            <Link to="/selectPersonage"><div id="navLink"><p>Selection du Personage</p></div></Link>
            <div></div>
            {showDeco()}
        </nav>
    );
};

export default Navbar;