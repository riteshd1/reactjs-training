import React,{useState} from "react";
let renderCount =0;
const CreateUser = () => {
  renderCount=renderCount+1;
  console.log("renderCount:",renderCount);
    // let name = "TheTools";
    // const setName=(newVal)=>{
    //     name=newVal;
    //     console.log("name",name);
    // }
    // {
    //     name:'test',
    //     email:'test@gmail.com',
    //     gender:'male',
    //     dob:'2033-09-03'

    // }
    const [formData, setFormData] = useState({});
     const [name,setName]=useState('');
     const [dob,setDOB]=useState('');

     const handleChange = (event)=>{
        // console.log(event.target.name);
        // console.log(event.target.value);
        // formData[event.target.name] = event.target.value;
      // console.log("formData",formData);
      if(event.target.name=='courses'){
        // console.log("event.target.value",event.target.value);
        let courses = Array.isArray(formData?.courses)?formData?.courses:[];
        courses.push(event.target.value);
         setFormData({...formData,[event.target.name]:courses})
      }else{
        setFormData({...formData,[event.target.name]:event.target.value})
      }
      // formData[event.target.name]=event.target.value;
      console.log("formData inside",formData)
     }
    console.log("formData outside",formData)

    const submitForm = (e)=>{
      e.preventDefault();
      console.log("formData",formData);
      let requestOptions = {
        method: "POST",
        body:formData
      };
       let apiURL = `http://localhost:1234/createUser?name=${formData.name}&dob=${formData.dob}&phone=${formData.mobile}&email=${formData.email}&gender=${formData.gender}`;
      //let apiURL = `http://localhost:1234/createUser`;
      fetch(apiURL, requestOptions)
        .then((res) => res.json())
        .then((result) => {
          alert("result"+result);
          console.log("result", result);
        })
        .catch((error) => console.log("error", error));
    }
  return (
    <div className="container-fluid">

      <h1 className="h3 mb-2 text-gray-800">Create User</h1>
      <form method="post" onSubmit={submitForm}>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
                value={formData?.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Date of Birth
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="dob"
              placeholder="Date of Birth"
              name="dob"
              value={formData?.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="gender-male"
                value="Male"
                onChange={handleChange}
              />
              <label className="form-check-label" for="exampleRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="gender-female"
                value="Female"
                onChange={handleChange}
              />
              <label className="form-check-label" for="exampleRadios1">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Mobile
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="mobile"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="HTML"
                name="courses"
              onChange={handleChange}
              />
              <label className="form-check-label" for="inlineCheckbox1">
              HTML
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="CSS"
                name="courses"
                onChange={handleChange}
              />
              <label className="form-check-label" for="inlineCheckbox2">
                CSS
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Javascript"
                name="courses"
                onChange={handleChange}
              />
              <label className="form-check-label" for="inlineCheckbox3">
              Javascript
              </label>
            </div>
          </div>
        </div> */}
        <div className="text-center">
            
            <input type="submit" value="Create" className="btn btn-primary m-2" />
            <input type="button" value="Cancel" className="btn btn-secondary" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
