import React from "react";
import Banner from "../Banner";
import requests from '../Requests'
import Nav from "../Nav";
import Raw from '../Raw'
import './HomeScreen.css'
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* <h2>Home screen</h2> */}

            {/* NavBar */}
            <Nav />

            {/* Banner */}
            <Banner />
            
            {/* Raw */}
            <Raw
                title="Upcoming "
                fetchURL={requests.fetchUpcoming} 
                isLargeRow
            />
            
            <Raw
                title="Netflix Original"
                fetchURL={requests.fetchNetflixOriginals} 
                isLargeRow
            />

            <Raw
                title="Trending Now"
                fetchURL={requests.fetchTrending} 
            />            
            <Raw
                title="Top Rated"
                fetchURL={requests.fetchTopRated} 
            />            
            <Raw
                title="Action Movies"
                fetchURL={requests.fetchActionMovies} 
            />            
            <Raw
                title="Comedy Movies"
                fetchURL={requests.fetchComedyMovies} 
            />            
            <Raw
                title="Horror"
                fetchURL={requests.fetchHorrorMovies} 
            />            
            <Raw
                title="Romance Movies"
                fetchURL={requests.fetchRomanceMovies} 
            />            
            <Raw
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries} 
            />            
            <Raw
                title="Sci-Fi"
                fetchURL={requests.fetchSciFiMovies} 
                isLargeRow
            />


        </div>
    )
}
export default HomeScreen