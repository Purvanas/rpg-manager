import React from 'react';

const PersonageTableauInventaire = (props) => {

    const objetJSON = props.value;

    const elements = Object.keys(objetJSON).map((key) => (
        <div id="objet" key={key}>
            <h3 id="objetTxt" className='borderRight'>{objetJSON[key].libelle}</h3>
            <h3 id="objetTxt" className='borderRight'>{objetJSON[key].quantité}</h3>
            <h3 id="objetTxt" className='borderRight'>{objetJSON[key].poids * objetJSON[key].quantité}</h3>
            <h3 id="objetTxt">{objetJSON[key].details}</h3>
        </div>
    ));

    return (
        <div id="tableauObjet" style={{ backgroundColor: props.theme }}>
            <div id="tableauObjetTitle">
                <div id="objetPlaceHolder" key="placeHolder">
                    <h3 id="objetTxtPlaceHolder">Objet</h3>
                    <h3 id="objetTxtPlaceHolder">Quantité</h3>
                    <h3 id="objetTxtPlaceHolder">Poids</h3>
                    <h3 id="objetTxtPlaceHolder">Détails</h3>
                </div>
            </div>
            <div id="tableauObjetData">
                {elements}
            </div>
        </div>
    );
};

export default PersonageTableauInventaire;