import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Recipes</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://sandbox-api.brewerydb.com/v2/search?q=">
        Powered by Recipe Puppy
      </a>
    </div>
  );
}

export default Jumbotron;
