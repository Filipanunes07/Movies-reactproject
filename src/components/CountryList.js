import React from "react";
import Country from "./Country";
import axios from "axios";
import "./CountryList.css"

class CountryList extends React.Component{
    state={
        countries: []
    }

    componentDidMount() {
        this.fetchCountry();

    }
    fetchCountry= () =>{
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response)=>this.setState({countries:response.data})
        );
        
    };

    render() {
        return( 
        <div>
        <div className="firstDiv">All countries</div>
        <div class="justify-content-sm-between">
            {this.state.countries.map((country)=>(<Country {...country} />))}
        </div>
        </div>
        );
    }
}

export default CountryList;