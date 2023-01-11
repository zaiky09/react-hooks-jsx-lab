import React from "react";
import { name, city } from "../data/data.js";

const hStyle ={
  color: 'firebrick'
};

function Home() {

  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={hStyle}>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;
