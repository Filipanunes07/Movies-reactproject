import React from "react";
import Country from "./Country";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
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
    removeCountry = (event) => {
        console.log(event)
        const countryToBeRemovedName = event;
        const newCountryList = this.state.countries.filter(
        (country) => country.name !== countryToBeRemovedName);
        this.setState({ countries: newCountryList });
      };
      SearchCountry = (event) => {
            const searchValue = event.target.value;
            axios
            .get(`https://restcountries.eu/rest/v2/name/${searchValue}`)
            .then((response) =>
            this.setState({ countries: response.data})
            );
          } 

    render() {
        return( 
        <div>
        <div className="firstDiv">All countries</div>
        <Searchbar searchInputFunction={this.SearchCountry} />;
        <div class="justify-content-sm-between">
            {this.state.countries.map((country) => (<Country {...country} removeCountry={this.removeCountry} />))}
            </div>
        </div>
        );
    }
}

export default CountryList;