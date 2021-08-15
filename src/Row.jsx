import {React,useEffect,useState} from 'react'
import axios  from "./axios"
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"
const baseUrl ="https://image.tmdb.org/t/p/original";
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
}
function Row({title ,fetchUrl,isLargeRow}) {
const [movies, setmovies] = useState([]);   
  const [trailerUrl, setTrailerUrl] = useState("");
useEffect(() => {

    async function fetcData(){
        const req = await axios.get(fetchUrl)

         setmovies(req.data.results);
         return req;
    }
    fetcData();
   
}, [fetchUrl])
const handleClick = (movie) => {
    if (trailerUrl === '') {
        movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title)
        .then((response) => {
            const path = response.split('?v=')[1];
            setTrailerUrl(path);
            // document.querySelector('body').style.overflow = 'hidden';
            // setDescription(movie?.overview);
            // setTitle(movie?.name || movie?.title);
            // setOriginal_title(movie?.original_name);
        }).catch((error) => {
            // handleError();
            console.log(error);
        })
    } else {
        setTrailerUrl('');
        // setDescription('');
        // setTitle('');
        // setOriginal_title('');
        // document.querySelector('body').style.overflow = 'auto';
    }
}
// console.log(movies);
// const handleClick = (movie) => {
//     if(trailerUrl){
//         setTrailerUrl("");
//     } else {
//         movieTrailer(movie?.name || "")
//         .then((url) => {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setTrailerUrl(urlParams.get('v'));
//         })
//         .catch(() => console.log('Temporary Unavailable'))
//     }
// }
const handlePagination = (e) => {

    const el = e.target.parentElement.className.split(' ');
    const scrollContainer = document.querySelector(`.${el[1]}`);

    if (e.target.className === 'pagination pagination--right') {
        scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    } else {
        scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
}
return (
        <div className="row">
          
            {/* {title} */}
         <h2>{title}</h2>
         <div className="row_posters">
        
    
                     {movies.map(movie=>(
                     <img  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     key={movie.id}
                     onClick = {()=> handleClick(movie)}
                     src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                 ))}
              
            </div>
            {/* {poster container} */}
            <span onClick={() => handleClick(null)} className="info__overlay--btnClose fa-stack fa-2x">
                                            <i className="fas fa-circle fa-stack-2x icon-black"></i>
                                            <i className="fas fa-times fa-stack-1x icon-white"></i>
                                        </span>
 { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
