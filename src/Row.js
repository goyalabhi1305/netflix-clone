import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';

const bsimgurl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerurl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.table(movies);

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        console.log(trailerurl)
        if (trailerurl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "")
                .then((url) => {

                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))

                })
                .catch((error) => console.log(error));
        }
        
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_poster">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={ `img_poster ${isLargeRow && "large_img"}`}
                        src={`${bsimgurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerurl && <YouTube videoId={`hvs7Y-Ct9sE4`} opts={opts}  /> 
            }
        </div>
    )
}

export default Row
