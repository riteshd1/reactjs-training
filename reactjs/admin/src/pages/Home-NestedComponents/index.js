import React,{useEffect, useState} from "react";
import Component1 from "./Component1";
import Component3 from "./Component3";
const Home = () => { 
  const [country, SetCountry]=useState("India");
  return (
    <div className="container-fluid">
      <Component1 country={country} />
      
      
    </div>
  );
};

export default Home;
