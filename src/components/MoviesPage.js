import React from "react";
import Movie from "./Movie"

class MoviesPage extends React.Component{
    render(){
        return( 
        <div>
        Movies
        <Movie title="moby dick" year={1990} director="Quentine" />
        </div>   
        );
    }
}

export default MoviesPage;