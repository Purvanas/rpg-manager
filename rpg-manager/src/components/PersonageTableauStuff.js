import React from 'react';

const PersonageTableauStuff = (props) => {
    const objetJSON = props.value;

    const elements = Object.keys(objetJSON).map((key) => (
        <div id="stuff" key={key}>
            <h3 id="stuffTxt" className='borderRight'>{objetJSON[key].libelle}</h3>
            <h3 id="stuffTxt" className='borderRight marginLeft'>{objetJSON[key].description}</h3>
            <h3 id="stuffTxt" className='borderRight marginLeft'>{objetJSON[key].surplus}</h3>
            <h3 id="stuffTxt" className='marginLeft'>{objetJSON[key].effets}</h3>
        </div>
    ));

    return (
        <div id="tableauStuff" style={{ backgroundColor: props.theme }}>
            <div id="tableauStuffTitle">
                <div id="stuffPlaceHolder" key="placeHolder">
                    <h3 id="stuffTxtPlaceHolder">Équipement</h3>
                    <h3 id="stuffTxtPlaceHolder">Description</h3>
                    <h3 id="stuffTxtPlaceHolder">Surplus</h3>
                    <h3 id="stuffTxtPlaceHolder">Effets</h3>
                </div>
            </div>
            <div id="tableauStuffData">
                {elements}
            </div>
        </div>
    );
};

export default PersonageTableauStuff;