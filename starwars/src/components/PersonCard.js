import React from 'react';
import styled from 'styled-components';

const NameContainer = styled.div`
    max-width: 28%;
    margin: 3% auto;

`;

const NameCard = styled.div`
    background-color: rgba(250, 145, 17, 0.605);
    margin: auto;
    border: 3px dashed saddlebrown;
    padding: 5%;
    box-shadow: -15px 15px 10px tan;
`;

const Name = styled.h1`
font-family: 'Warnes', cursive;
margin-bottom: 2%;

`;

const Description = styled.p`
font-family: 'Comfortaa', cursive;

`;


const PersonCard = props => {
    
 return (
    <NameContainer>
        <NameCard>
            <Name>{props.name}</Name>
            <Description>Height: {props.height}cm Weight: {props.weight}kg</Description>
            <Description>Has {props.skin} skin, {props.hair} hair and {props.eyes} eyes</Description>
            <Description>Born {props.born} as a {props.gender}</Description>
            <Description>Starred in {props.films.length} films</Description>
            <Description>Owns {props.vehicles.length} vehicles and {props.starships.length} starships</Description>
        </NameCard>
    </NameContainer>
);
};

export default PersonCard;

/*<h1>{props.name}</h1>
        <h2>Description</h2>
        <p>Height: {props.height}cm Weight: {props.weight}kg</p>
        <p>{props.skin} skin, {props.hair} hair and {props.eyes} eyes</p>
        <p>Born {props.born} as a {props.gender}</p>
        <p>Starred in {props.films.length} films</p>
        <p>Owns {props.vehicles.length} vehicles and {props.starships.length} starships</p>*/