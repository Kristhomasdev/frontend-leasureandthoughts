import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import CreateUser from "./components/useremail/useremail";
// import {user} from "./components/useremail/useremail";
// import Sucess from "./components/useremail/userSucess";
import SlidingImages from "./components/homeRoute/carousel/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/homeRoute/MAIN";
import Blogpage from './components/blog-page/blogs/blog';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
    
     
    
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      
      <Route path="/blogs" element = {<Blogpage />} />
      
    </Routes>
    

      
    </div>
    </BrowserRouter>
  );
}

export default App;
