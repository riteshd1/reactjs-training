import React from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

const FormInput = ({formLayout,postFormData,handleChange})=>{
    return(
        <>
         {
            formLayout.map(item=>{
              switch(item.type){
                case 'text':
                  return(<TextInput postFormData={postFormData} handleChange={handleChange} />
                  )
                break;
                case 'textarea':
                  return(<TextArea disabled={true} label={item.label} postFormData={postFormData} handleChange={handleChange} />
                  )
                break;
              }
              
            })
          }

        </>
    )
}
export default FormInput;