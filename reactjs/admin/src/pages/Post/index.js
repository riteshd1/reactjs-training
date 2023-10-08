import React,{useState,useEffect} from "react";
import {useParams} from"react-router-dom";
const Post = () => {
    const [postData, setPostData] = useState([]);
const {id} = useParams();
const getPosts = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setPostData(result))
      .catch((error) => console.log("error", error));
  };
  // getPosts();
  useEffect(() => {
    getPosts();
  }, []);
 return( <>
    <div className="row">
      <div className="col-lg-12">
        <div className="card mb-4">
          <div className="card-header text-primary">
              {postData?.title}
            </div>
          <div className="card-body">
            {postData?.body}
          </div>
        </div>
      </div>
    </div>
  </>);
};
export default Post;
