import React ,{useState,useEffect}from 'react'
import axios from "./axios"
import requests from './request'
import "./banner.css"

function Banner() {

    const [movie, setmovie] = useState([])

    useEffect(() => {
        async function fetchData(){
          const req = await axios.get(requests.fetchNetflixOriginals);
        var arr=req.data.results;
      setmovie(  arr[Math.floor(Math.random() * arr.length)]
      );
        return req;
        }
        fetchData();
    }, []);
    console.log(movie);
    function truncateString(str, num) {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    
    return (
        
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:` url(
                "https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"

        }}
        > 
      <div className="banner_content">
             {/* Title */}
   <h1 className="banner_title">         
    {movie?.title || movie?.name|| movie?.original_name}
         </h1>
       
            {/*  div with 2 buttons */}
            <div className="banner_buttons">
                <button className="banner_button "><i class="fa fa-play" aria-hidden="true"></i>play</button>
                <button className="banner_button">My List</button>
            
            
            
            {/* description */}

            <h1 className="banner_discription">
             {truncateString(movie?.overview,150)}
            </h1>
            </div>
            </div>
<div className="banner_fade">

</div>
                </header>
    )
}

export default Banner
