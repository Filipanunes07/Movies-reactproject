import React from "react";
import "./StartPage.css";
import {useHistory} from 'react-router-dom';

export default function StartPage() {
    let history = useHistory();
  
    const redirect = () => {
      history.push('/MoviePage')
    }
  
    return (
          <div >
               <button class="button" onClick={redirect}>Start</button>
          </div>
         
      )
}

