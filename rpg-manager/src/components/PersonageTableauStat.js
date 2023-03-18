import React from 'react';

const PersonageTableauStat = (props) => {
    const objetJSON = props.value;

    const elements = [];

    for (let key in objetJSON) {
        elements.push(
            <div id="statistique"  style={{ backgroundColor: props.theme }}>
                <h3 id="stat">{key} :</h3>
                <h3 id="statValue">{objetJSON[key]}</h3>
            </div>
        );
    }

    return (
        <div id="tableauStat">
            <h2>Personnage</h2>
            {elements}
        </div> 
    );
};

export default PersonageTableauStat;