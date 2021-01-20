import React from "react";
import {useHistory} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default function StartPage() {
    let history = useHistory();
  
    const redirect = () => {
      history.push('/MoviePage')
    }
  
    return (
          <div >
               <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={redirect}>Start</button>
          </div>
         
      )
}

