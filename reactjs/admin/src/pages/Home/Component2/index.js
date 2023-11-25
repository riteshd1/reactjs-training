import React,{useEffect, useState} from "react";
import Component3 from "../Component3";
import ComponentContext from "../context";
const Component2 = () => {
  
const data = React.useContext(ComponentContext);
  return (
    <div className="container-fluid">
      <h1>Component2</h1>
      <h4>Country : {data.countryName}</h4>
      <h4>Name : {data.name}</h4>
      <Component3  />
    </div>
  );
};

export default Component2;
