import React,{useEffect, useState, createContext,useContext} from "react";
import Component1 from "./Component1";
import ComponentContext from "./context";

const Home = () => { 
  const [country, setCountry]=useState("");
  const [error,setError] = useState(null);
  
  const changeCountryValue = (e)=>{
setCountry(e.target.value);
  }
  const validate = ()=>{
    if(country==''){
      setError("Conutry is empty");
    }else{
      setError(null);
    }
  }
  return (
    <ComponentContext.Provider value={{countryName:country}}>
    <div className="container-fluid">
      {error?<p class="text-danger">{error}</p>:""}
      <input type="text" name="country" value={country} onChange={changeCountryValue} />
      <input type="button" value="Change" className="btn btn-primary mb-1" onClick={validate} />
      <Component1 />
      
    </div>
    </ComponentContext.Provider>
  );
};

export default Home;
