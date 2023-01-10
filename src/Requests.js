// we'll store in {process.env.API_KEY}

const API_KEY = "153a597108f4189d6591901fefd64aa5";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;















// https://api.themoviedb.org/3/trending/all/week?api_key=${153a597108f4189d6591901fefd64aa5}&language=en-US
// https://api.themoviedb.org/3/discover/movie?api_key=153a597108f4189d6591901fefd64aa5&with_genres=27
// https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27




// https://api.themoviedb.org/3/movie/top_rated?api_key=153a597108f4189d6591901fefd64aa5&language=en-US
// 