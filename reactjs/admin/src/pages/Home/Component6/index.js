import React,{useContext} from "react";
import additionContext from "../context/Addition";

const Component6 = () => {
    const adata = useContext(additionContext);
    console.log("additionContext",adata)
    return(
        <div className="container-fluid">
      <h1>Component6</h1>
      <h4>Mobile : {adata.mobile}</h4>
      <h4>DOB : {`${adata.Date}-${adata.Month}-${adata.Year}` }</h4>
      {/* <Component5 /> */}
    </div>
    )
}

export default Component6;