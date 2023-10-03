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

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <Routes>
            {/* <Route path="/" element={<Home />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/create-user" element={<CreateUser />} />
            <Route path="create-user"  element={<CreateUser />} />
            <Route path="*" element={<ErrorPage />} />
            {/* </Route> */}
          </Routes>
        </div>
        
      <Footer />
      </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
