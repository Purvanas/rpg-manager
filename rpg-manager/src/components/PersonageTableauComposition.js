import React from 'react';

const PersonageTableauComposition = (props) => {
    const compo = props.value
    return (
        <div id="tableauComposotion">
            <h3 id="tableauComposotionTxt">Agilité : {compo.agilite}</h3>
            <h3 id="tableauComposotionTxt">Fermeté : {compo.fermete}</h3>
            <h3 id="tableauComposotionTxt">Force : {compo.force}</h3>
            <h3 id="tableauComposotionTxt">Intellect : {compo.intellect}</h3>
            <h3 id="tableauComposotionTxt">Présence : {compo.presence}</h3>
        </div>
    );
};

export default PersonageTableauComposition;