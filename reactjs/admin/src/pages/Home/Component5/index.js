import React,{useContext} from "react";
import Component6 from "../Component6";
import additionContext from "../context/Addition";

const Component5 = () => {
    const adata = useContext(additionContext);
  return (
    <div className="container-fluid">
      <additionContext.Provider
        value={{ mobile: "32846349234",...adata }}
      >
      <h1>Component5</h1>
      {/* <h4>Name : {data.name}</h4> */}
      <Component6 />
      </additionContext.Provider>
    </div>
  );
};

export default Component5;
