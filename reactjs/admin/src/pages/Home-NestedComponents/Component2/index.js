import React,{useEffect, useState} from "react";
import Component3 from "../Component3";
const Component2 = ({country}) => {
  

  return (
    <div className="container-fluid">
      <h1>Component2</h1>
      <Component3 country={country} />
    </div>
  );
};

export default Component2;
