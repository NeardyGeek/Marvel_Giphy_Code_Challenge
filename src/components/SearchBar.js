import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    

   
    const handleQueryChanges = ( event ) =>{
        setQuery (event.target.value); 

    }

    

    const startQuery = (event) =>{
        event.preventDefault(); 
        props.search(query);
        
    }

    return (
        
        <form className = "searchbar">
            <input value = {query} onChange = {handleQueryChanges} type = "text" placeholder = "Find your favorite Gifs..." />
            <button type="submit" onClick = { startQuery }><FaSearch /></button>
        </form>
        

    );

    
}

export default SearchBar;