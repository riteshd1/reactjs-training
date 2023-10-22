import React,{useEffect, useState} from "react";
import Component2 from "../Component2";
const Component1 = ({country}) => {
  const [age, setAge] = useState();

  return (
    <div className="container-fluid">
      <h1>Component1</h1>
      <Component2 age={age} country={country} />
    </div>
  );
};

export default Component1;
