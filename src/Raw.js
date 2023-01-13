import React, { useEffect, useState } from 'react'
import './Raw.css'
import axios from './axios';
function Raw({ title, fetchURL, isLargeRow = false }) {

    // base url for image map
    const base_url = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>

            {/* With Dynamic data */}
            <div className="row__posters">
                {movies.map((movie) => (
                
                    <img
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    
                }`}
                alt={movie.name || movie.title}
                title={movie.name || movie.title}
                    />)
                )}
            </div>
        </div>
    )
}

export default Raw


// function src2(isLargeRow){
//     if(isLargeRow=true){
//         return movies.poster_path
//     }
//     else{
//         return movie.backdrop_path
//     }