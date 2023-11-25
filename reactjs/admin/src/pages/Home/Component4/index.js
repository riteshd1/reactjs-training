import React from "react";
import Component5 from "../Component5";
import additionContext from "../context/Addition";

const Component4 = () => {
  // const data = React.useContext(ComponentContext);
  return (
    <div className="container-fluid">
        <additionContext.Provider value={{Date:'11th',Month:'Sep',Year:'1999'}}>
      <h1>Component4</h1>
      {/* <h4>Name : {data.name}</h4> */}
      <Component5 />
      </additionContext.Provider>
    </div>
  );
};

export default Component4;
