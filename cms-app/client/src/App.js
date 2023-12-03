import MenuBar from "./components/MenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import EditBlog from "./pages/Blogs/components/EditBlog";
function App() {
  return (
    <BrowserRouter>
    <MenuBar />
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/edit-blog" element={<EditBlog />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
