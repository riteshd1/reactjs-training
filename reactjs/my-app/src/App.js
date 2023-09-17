import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Pages/Home';
import {Header,Footer} from "./components/Common";
function App() {
  return (
    <>
    <div className="container-fluid">
      <Header />
        <Home />
      <Footer />
      </div>
    </>
  );
}

export default App;
