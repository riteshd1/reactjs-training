import React from "react";
const TextArea = ({label,disabled,postFormData,handleChange})=>{
return (
    <div className="form-group row">
            <div className="col-sm-10">
              <textarea
              disabled={disabled}
                type="text"
                className="form-control"
                id="body"
                placeholder={label}
                name="body"
                onChange={handleChange}
              >
                {postFormData?.body}
              </textarea>
            </div>
          </div>
)
}

export default TextArea;