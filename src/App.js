import React, { useState, useEffect } from 'react';
import './App.css';
//import './Appv2.css'; //this is Giphy home page like css, you can uncomment it to check the effect
import SearchBar from "./components/SearchBar";
import GifGallery from './components/GifGallery';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaCoffee } from 'react-icons/fa';




const key = "6F0AQVV4DddTCWfscHLi29OMxrLohN0i";
const limit = 16;




function App() {

  
  const [gifs, setGifs] = useState([]);
  const [load, setLoad] = useState(false);
  const [offset, setOffSet] = useState(0);
  const [query, setQuery] = useState();

  
  const fetchGifs = () => {

    const url = `https://api.giphy.com/v1/gifs/${typeof query === 'undefined' ? "trending?":`search?q=${query}&`}api_key=${key}&offset=${offset}&limit=${limit}`;
    fetch(url).then(data => data.json()
    ).then(res => {
      
      console.log(res.data);
      console.log(url);
      setGifs([...gifs, ...res.data]);
      setLoad(true);
     
      setOffSet(offset+25)
     
      
      
    })

  }



  useEffect(() => {

    fetchGifs();

  
  }, []);




  const search = query => {

    setGifs([]);
    setQuery(query.replace(/\s/g, '+'));
    console.log('g', gifs);
    
    const url = `https://api.giphy.com/v1/gifs/${typeof query === 'undefined' ? "trending?":`search?q=${query.replace(/\s/g, '+')}&`}api_key=${key}&limit=${limit}`;
    fetch(url).then(data => data.json()
    ).then(res => {
      
      
      console.log(res.data);
      console.log(url);
      setGifs(res.data);
      setLoad(true);
     
      
    })

  }

  

  return (
    <div className="App">

      
      <SearchBar search={search} />
      
      
      <div className = "container">

      <InfiniteScroll
        dataLength={gifs}
        next={() => fetchGifs() }
        hasMore={true}
        loader={
         
          <div style = {{color: 'white'}}><FaCoffee /></div>
        }>
        
      
        
        {load ? <GifGallery gifs = {gifs} /> : ""}
        
      </InfiniteScroll>
      </div>





    </div>
  );
}

export default App;
