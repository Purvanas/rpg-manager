import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { // <Link to="/personage"><div id="navLink"><p>Personage</p></div></Link>

    const deconnexion = () =>{
        localStorage.removeItem('jwt')
        localStorage.removeItem('listPersonnages')
        localStorage.removeItem('idPerso')
    }

    return (
        <nav>
            <Link to="/"><div id="navLink"><p>Connexion</p></div></Link>
            <Link to="/selectPersonage"><div id="navLink"><p>Selection du Personage</p></div></Link>
            <div></div>
            <Link to="/"><div id="navLink" onClick={deconnexion}><p>Déconnexion</p></div></Link>
        </nav>
    );
};

export default Navbar;