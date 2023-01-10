import React from "react";
import Banner from "./Banner";
import './HomeScreen.css'
import Nav from "./Nav";
function HomeScreen(){
    return(
        <div className="homeScreen">
            {/* <h2>Home screen</h2> */}

            {/* NavBar */}
            <Nav />
             
            {/* Banner */}
            <Banner/>
            {/* Raw */}

        </div>
    )
}
export default HomeScreen