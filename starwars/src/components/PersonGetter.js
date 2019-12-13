import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';



export default function PersonGetter() {
    const [person, setPerson] = useState([])


useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
        console.log(response.data.results);
        setPerson(response.data.results);
    })
    .catch(error => {
        console.log('data not returned', error);
    });
}, [])

return (
    <div className='person'>
        {person.map(person => {
            return (
                <PersonCard
                key={person.url}
                name={person.name}
                height={person.height}
                weight={person.mass}
                born={person.birth_year}
                gender={person.gender}
                />
            );
        })}
    </div>
);
}