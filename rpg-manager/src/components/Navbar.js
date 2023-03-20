import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { // <Link to="/personage"><div id="navLink"><p>Personage</p></div></Link>
    return (
        <nav>
            <Link to="/"><div id="navLink"><p>Connexion</p></div></Link>
            <Link to="/selectPersonage"><div id="navLink"><p>Selection du Personage</p></div></Link>
        </nav>
    );
};

export default Navbar;