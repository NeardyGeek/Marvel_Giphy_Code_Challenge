import React, { useState } from "react";
import { FaSearch, FaChartLine } from 'react-icons/fa';

const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    

   
    const handleQueryChanges = ( event ) =>{
        setQuery (event.target.value); 

    }

    

    const startQuery = (event) =>{
        event.preventDefault(); 
        props.search(query);
        
    }

    const resetQuery = () =>{
        setQuery();
    }

    return (
        
        <form className = "searchbar">
            <input value = {query} onChange = {handleQueryChanges} type = "text" placeholder = "Find your desired or trending Gifs..." />
            <button type="submit" onClick = { startQuery }><FaSearch /></button>
            <button type="submit" onClick = { resetQuery }><FaChartLine /></button>
        </form>
        

    );

    
}

export default SearchBar;