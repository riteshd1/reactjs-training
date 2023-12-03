import {Table,Button,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Blogs() {
  const [blogsData, setBlogsData] = useState([]);
  const listBlogs = async ()=>{
    await axios.get("http://localhost:1234/list-blogs").then((response)=>{
      setBlogsData(response.data);
      console.log(response.data);
    }).catch((err)=>{
      console.log("error",err);
    });
  }
  useEffect(()=>{
    if(blogsData.length<=0){
      listBlogs();
    }
  },[]);
  return (
    <Container>
    <h1>Blogs</h1>
    <Link to="/edit-blog"><Button variant="info" size="lg">Create</Button></Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          blogsData.map(item=>(
            <tr>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>Edit</td>
        </tr>
        
          ))
        }
        
      </tbody>
    </Table>
    </Container>
  );
}

export default Blogs;