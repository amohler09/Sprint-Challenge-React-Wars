import React from 'react';


const PersonCard = props => {
 return (
    <div>
        <h1>{props.name}</h1>
        <h2>Description</h2>
        <p>Height: {props.height}cm Weight: {props.weight}kg</p>
        <p>{props.skin} skin, {props.hair} hair and {props.eyes} eyes</p>
        <p>Born {props.born} as a {props.gender}</p>
        <p>Starred in {props.films.length} films</p>
        <p>Owns {props.vehicles.length} vehicles and {props.starships.length} starships</p>
    </div>
);
};

export default PersonCard;