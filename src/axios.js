import axios from "axios";

const instance = axios.create({baseURL:"https://api.themoviedb.org/3",});

export default instance;

//  https://api.themoviedb.org/3/trending/all/week?api_key=153a597108f4189d6591901fefd64aa5&language=en-US