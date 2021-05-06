const API_KEY = "0dbbb03e97478ed5f3bbda38811aa0c6";

const requests =  {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchMovies: `/movie/{movie_id}?api_key=${API_KEY}&language=en-US`,
}

export default requests;