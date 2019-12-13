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
    })
    .catch(error => {
        console.log('data not returned', error);
    });
}, [])

return (
    <div>
        <PersonCard />
    </div>
)

}