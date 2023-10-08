import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  // let resultData = [];
  let [counter, setCounter] = useState(2);
  let [resultData, setResultData] = useState([]);
  const increaseCount = ()=>{
    counter = counter+1;
    setCounter(counter)
  }

  const getUsers =  async ()=>{
   
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //console.log("hiii");
    await fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then(response => response.json())
      .then(result => {
        result.push(result[0]);
        setResultData(result)
      })
      .catch(error => console.log('error', error));
      

      //console.log("bye");
  }
  
  useEffect(()=>{
    getUsers()
  },[])
  // getUsers();
  // console.log("resultData",resultData)
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <Link to="/create-user" className="btn btn-primary">
              Create User
            </Link>
            <h3>Count : {counter}</h3>
            <button onClick={()=>increaseCount()} className="btn btn-danger" >Increment</button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    resultData.map(item=>{
                      return (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.website}</td>
                        </tr>
                      )
                    })
                  }
                  
                </tbody>
                <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                  </tr>
                </tfoot>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
