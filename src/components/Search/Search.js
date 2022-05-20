import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SEARCH_API = 'https://imdb-api.com/API/Search/k_2dvn5pot'; /* Lo mejor seria tener la dirección de la api y mi api_key en un .env pero al ser una demo lo hice así */

const Search = () => {
    const [content, setContent] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchSearch = async () => {
    try {
        const { data } = await axios.get(
        `${SEARCH_API}/${searchText}`
        );
        console.log(data);
        setContent(data.results);
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
        fetchSearch();
    }, [])  
    return (
    <div>

        <input type="text" label="Search" onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={fetchSearch} >Search</button>

        {content &&
            content.map((c) => (
            <div key={c.id}>
                <li>{c.title}</li>
                <img src={c.image}/>
            </div>
            ))}

    </div>
    )
}

export default Search