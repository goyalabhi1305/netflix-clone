import React, { useEffect, useState } from 'react';
import axios from "./axios";
import requests from "./requests";
import './Banner.css';

function Banner() {
    const [movie, Setmovie] = useState([]);
    useEffect(() => {
            async function fetchData() {
                const request = await axios.get(requests.fetchTrending);
                
                Setmovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]);
                return request;
        }
        fetchData();
},[])
    console.log(movie);
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition:"center center"
}}
        >
            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_button">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">My Lists</button>
                </div>
                <p className="banner_desc">{movie?.overview}</p>
            {/* descr */}
            </div>
            <div className="fade_btm"></div>
        </header>
    )
}

export default Banner
