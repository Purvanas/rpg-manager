import React from 'react';

const PersonageTableauSort = (props) => {

    const objetJSON = props.value;

    const elements = Object.keys(objetJSON).map((key) => (
        <div id="sort" key={key}>
            <h3 id="sortTxt" className='borderRight marginLeft'>{objetJSON[key].libelle}</h3>
            <h3 id="sortTxt" className='borderRight centerText'>{objetJSON[key].niveau}</h3>
            <h3 id="sortTxt" className='borderRight marginLeft'>{objetJSON[key].description}</h3>
            <h3 id="sortTxt" className='borderRight  centerText'>{objetJSON[key].degats}</h3>
            <h3 id="sortTxt" className='borderRight marginLeft'>{objetJSON[key].cout}</h3>
            <h3 id="sortTxt" className='marginLeft'>{objetJSON[key].effet}</h3>
        </div>
    ));

    return (
        <div id="tableauSort"  style={{ backgroundColor: props.theme }}>
            <div id="tableauSortTitle">
                <div id="sortPlaceHolder" key="placeHolder">
                    <h3 id="sortTxtPlaceHolder">Sort</h3>
                    <h3 id="sortTxtPlaceHolder">Niveau</h3>
                    <h3 id="sortTxtPlaceHolder">Description</h3>
                    <h3 id="sortTxtPlaceHolder">Dégats</h3>
                    <h3 id="sortTxtPlaceHolder">Coût</h3>
                    <h3 id="sortTxtPlaceHolder">Effet</h3>
                </div>
            </div>
            <div id="tableauSortData">
                {elements}
            </div>
        </div>
    );
};

export default PersonageTableauSort;