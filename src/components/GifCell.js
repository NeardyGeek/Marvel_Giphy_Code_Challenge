import React from "react";


const GifCell = (img) => {
    
    return (
        <div className = "gifcell">
            <img src = {img.gif.images.original.url} alt = {img.gif.title}/>
        </div>
    )
};

export default GifCell;