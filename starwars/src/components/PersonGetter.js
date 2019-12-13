import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function PersonGetter() {
    const [person, setPerson] = useState()


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
    <div></div>
)

}