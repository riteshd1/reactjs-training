import React,{useRef} from "react";

const TextInput = ({postFormData,handleChange})=>{
  const myRef = useRef();
  const handleFocus=()=>{
    console.log("myRef",myRef);
    myRef.current.focus();
    myRef.current.style.borderColor = "#f00";
  }
    return (
        <div className="form-group row">
            <div className="col-sm-10">
              <input
                ref={myRef}
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter post title"
                name="title"
                value={postFormData?.title}
                onChange={handleChange}
              />
              <button className="btn btn-primary" onClick={handleFocus}>Click to Focus</button>
            </div>
          </div>
    )
};
export default TextInput;