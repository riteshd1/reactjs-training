import logo from "./logo.svg";
import "./App.css";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import CreateUser from "./pages/Users/CreateUser";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import LayoutContext from "./context/LayoutContext";
import { useState } from "react";
import UseMemoExample from "./pages/UseMemoExample";
function App() {
  const [theme, setTheme] = useState("light");
  console.log("theme in App component",theme);
  return (
    <BrowserRouter>
    <LayoutContext.Provider value={{theme:theme,setTheme:setTheme}}>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid ">
          <Routes>
            {/* <Route path="/" element={<Home />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/create-user" element={<CreateUser />} />
            <Route path="create-user"  element={<CreateUser />} />
            <Route path="posts"  element={<Posts />} />
            <Route path="use-memo-example"  element={<UseMemoExample />} />
            {/* <Route path="post/:id/:title/:body"  element={<Post />} /> */}
            <Route path="post/:id"  element={<Post />} />
            {/* <Route path="post/:id"  element={<Post />} /> */}
            <Route path="*" element={<ErrorPage />} />
            {/* </Route> */}
          </Routes>
          </div>
        </div>
        
      <Footer />
      </div>
      </div>
      </LayoutContext.Provider>
    </BrowserRouter>
  );
}

export default App;
