import React,{useEffect, useState} from "react";
let renderCount=0;
const Home = () => {
    renderCount = renderCount+1;
    console.log("renderCount",renderCount);
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();

    const getNum1=(e)=>{
        setNum1(e.target.value);
    }
    const getNum2=(e)=>{
        setNum2(e.target.value);
    }

    const addition = ()=>{
        setResult(parseInt(num1)+ parseInt(num2));
    }
    useEffect(()=>{
        console.log("useEffect")
    },[num1]);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
      
        <div>
          Number 1 : <input type="number" name="number1" value={num1} onChange={getNum1} />
        </div>
        <div>
          Number 2 : <input type="number" name="number2" value={num2} onChange={getNum2} />
        </div>
        <div>Result:{result}</div>
        <div>
            <button onClick={addition}>Add</button>
        </div>
    
    </div>
  );
};

export default Home;
