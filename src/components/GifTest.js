import React from "react";
//import GifCell from "./GifCell";
//import { useRef, useEffect, useState } from "react";



const GifTest = ({ url, key }) => {
    return (
        <div className="gifcell" key={key}>
            <img src={url}  />
        </div>
    )
};


export default GifTest;