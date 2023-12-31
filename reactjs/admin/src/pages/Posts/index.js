import React, { useContext, useEffect, useState } from "react";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import LayoutContext from "../../context/LayoutContext";
import FormInput from "./FormInput";
const Posts = () => {
  const [formLayout, setFormLayout] = useState([
    {
      type: "text",
      name: "title",
      label: "Enter post title",
    },
    {
      type: "textarea",
      name: "body",
      label: "Enter post body test",
    },
  ]);
  const contextData = useContext(LayoutContext);
  const [postData, setPostData] = useState([]);
  const [postFormData, setPostFormData] = useState({});
  const [postFormSuccess, setPostFormSuccess] = useState({
    type: "primary",
    show: false,
    message: "",
  });

  const getPosts = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPostData(result))
      .catch((error) => console.log("error", error));
  };
  // getPosts();
  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    console.log("id", id);
    let requestOptions = {
      method: "DELETE",
    };
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        getPosts();
        setPostFormSuccess({
          type: "danger",
          show: true,
          message: "Your post has been deleted successfully!",
        });
      })
      .catch((error) => console.log(error));
  };
  const displayPosts = () => {
    return (
      <>
        {postData.map((item) => {
          // const linkVar = `/post/${item.id}/${item.title}/${item.body}`;
          const linkVar = `/post/${item.id}`;
          return (
            <>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card mb-4">
                    <div className="card-header text-primary">
                      <Link to={linkVar}>{item.title}</Link>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{item.body}</p>
                      <button
                        className={`btn btn-${
                          contextData.theme == "dark" ? "danger" : "default"
                        }`}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  const handleChange = (e) => {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let requestOptions = {
      method: "POST",
      body: postFormData,
      userId: 1,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setPostFormSuccess({
          type: "success",
          show: true,
          message: "Your post has been added successfully!",
        });
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="col-sm-6 mt-2">
        {/* {postFormSuccess ? (
          <div class="alert alert-success" role="alert">
            Your post has been added successfully!
          </div>
        ) : (
          ""
        )} */}
        <Error
          type={postFormData.type}
          show={postFormData.show}
          message={postFormData.message}
        />
        <form onSubmit={handleSubmit} method="post">
          
         <FormInput formLayout={formLayout} postFormData={postFormData} handleChange={handleChange} /> 
          
          <div className="form-group row">
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </div>
      {displayPosts()}
    </>
  );
};

export default Posts;
