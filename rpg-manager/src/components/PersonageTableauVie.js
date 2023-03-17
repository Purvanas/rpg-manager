import React from 'react';

const PersonageTableauVie = (props) => {
    return (
        <div id="tableauVie">
            <h3 id="vie">{props.value.vie}/{props.value.vieMax}</h3>
            <h3 id="essence">{props.value.essence}/{props.value.essenceMax}</h3>
        </div>
    );
};

export default PersonageTableauVie;