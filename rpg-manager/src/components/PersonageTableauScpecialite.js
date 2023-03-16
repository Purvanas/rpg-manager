import React from 'react';

const PersonageTableauSpecialite = (props) => {
    return (
        <div id="tableauSpec">
            <div id="specValue">
                <h3 id="spec">Pouvoir</h3>
                <h3>{props.value.pouvoir}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Utiliser bibliothèques</h3>
                <h3>{props.value.bibliotheque}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Lutte</h3>
                <h3>{props.value.lutte}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Connaissance magique</h3>
                <h3>{props.value.connaissanceMagique}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Athlétisme</h3>
                <h3>{props.value.athletisme}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Perception</h3>
                <h3>{props.value.perception}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Précision</h3>
                <h3>{props.value.precision}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Medecine/ soin</h3>
                <h3>{props.value.medecine}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Furtivité</h3>
                <h3>{props.value.furtivite}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Premiers secours</h3>
                <h3>{props.value.premierSecours}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Volonté</h3>
                <h3>{props.value.volonte}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Mensonge</h3>
                <h3>{props.value.mensonge}</h3>
            </div>
            <div id="specValue">
                <h3 id="spec">Intimidation</h3>
                <h3>{props.value.itimidation}</h3>
               </div>
            <div id="specValue">
                <h3 id="spec">Survivaliste</h3>
                <h3>{props.value.survivaliste}</h3>
                </div> 
            <div id="specValue">
                <h3 id="spec">Diplomatie</h3>
                <h3>{props.value.diplomatie}</h3>
                </div>
            <div id="specValue">
                <h3 id="spec">Charme</h3>
                <h3>{props.value.charme}</h3>
                </div>
            <div id="specValue">
                <h3 id="spec">Histoire</h3>
                <h3>{props.value.histoire}</h3>
                </div> 
            <div id="specValue">
                <h3 id="spec">Réflexe</h3>
                <h3>{props.value.reflexe}</h3>
                </div> 
            <div id="specValue">
                <h3 id="spec">Perception magique</h3>
                <h3>{props.value.perceptionMagique}</h3>
                </div>   
            <div id="specValue">
                <h3 id="spec">Psychologie</h3>
                <h3>{props.value.psychologie}</h3>
            </div>
        </div>
    );
};

export default PersonageTableauSpecialite;
  