import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  let [counter, setCounter] = useState(2);
  const increaseCount = ()=>{
    counter = counter+1;
    setCounter(counter)
  }
 
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
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Courses</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Courses</th>
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
