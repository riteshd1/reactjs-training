import React,{useEffect, useState, useContext,createContext} from "react";
import ComponentContext from "../context";
import Component4 from "../Component4"; 
const Component3 = () => {
  
  const data = useContext(ComponentContext);
  return (
    <div className="container-fluid">
      <h1>Component3</h1>
      <h2>Country:{data.countryName}</h2>
      <Component4  />
    </div>
  );
};

export default Component3;
