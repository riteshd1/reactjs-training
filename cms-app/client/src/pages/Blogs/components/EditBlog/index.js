import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from 'axios';

function EditBlog() {
  const [formData, setFormData] = useState();
  const handleChange = (e)=>{
    console.log(e.target.name);
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const saveBlog = ()=>{
    // let formData = {
    //   'title':"test title",
    //   'description':"test description",
    //   'image':"tets.jpg"
    // };
    axios.post("http://localhost:1234/edit-blog",formData).then(function(response){
    console.log(response.data);
    alert(response.data);
    }).catch(function(err){
      console.log("error",err);
    });
  }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBlogtitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={formData?.title} name="title" placeholder="Enter blog title" onChange={handleChange} />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" value={formData?.description} name="description" placeholder="Description" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" name="image" label="Select Image" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={saveBlog}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EditBlog;
