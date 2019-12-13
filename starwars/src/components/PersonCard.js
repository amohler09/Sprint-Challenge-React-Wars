import React from 'react';


const PersonCard = props => {
return (
    <div>
        <p>Name: {props.name}</p>
        <p>Height</p>
        <p>Weight</p>
        <p>Hair Color</p>
        <p>Skin Color</p>
        <p>Eye Color</p>
        <p>birth year</p>
    </div>
);
};

export default PersonCard;