import React from "react";
import GifCell from "./GifCell";
//import { useRef, useEffect, useState } from "react";




const GifGallery = ( props ) => {
 
    const gifCells = props.gifs.map((img, index) =>{
        
        return <GifCell  key = {index} gif = {img} />
    });

    return (
        
        <div className = "gifgallery">{gifCells} </div>

    );

    
};


export default GifGallery;























