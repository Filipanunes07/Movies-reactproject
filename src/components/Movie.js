import React from "react";

function Movie(props){
    return(
        <div>
            <p>title: {props.title}</p>
            <p>year:{props.year}</p>
            <p>director:{props.director}</p>
        </div>
    )
}
export default Movie;