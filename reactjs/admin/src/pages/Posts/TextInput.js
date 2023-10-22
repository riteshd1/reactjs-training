import React from "react";

const TextInput = ({postFormData,handleChange})=>{
    return (
        <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter post title"
                name="title"
                value={postFormData?.title}
                onChange={handleChange}
              />
            </div>
          </div>
    )
};
export default TextInput;