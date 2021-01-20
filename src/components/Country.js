import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Country.css"

function Country (props) {
    return(
            <div class="card text-center">
            <img className="image" src={props.flag} alt="card-img"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">
                        Capital:  {props.capital}
                        <br></br>
                        Region:  {props.region}
                        <br></br>
                        Population:  {props.population}
                    </p>
                </div>
            </div>      
    );
}

export default Country;