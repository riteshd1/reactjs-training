import React from "react";

const Error = ({ show, message, type }) => {
  return (
    <>
      {show ? (
        <div class={`alert alert-${type}`} role="alert">
          {message}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Error;
