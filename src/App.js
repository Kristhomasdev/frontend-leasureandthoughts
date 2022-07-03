import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import {user} from "./components/useremail/useremail";
// import Sucess from "./components/useremail/userSucess";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/homeRoute/MAIN";
// import Blogpage from './components/blog-page/blogs/blog';
import BLOG from "./components/blog-page/BLOGMAIN";
import VBLOG from "./components/view-blogs/V-BLOG";




function App() {
  return (
  <BrowserRouter>
    <div className="App">
    
     
    
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      
      <Route path="/blogs" element = {<BLOG />} />
      <Route path="/blogs/:id" element={<VBLOG />} />
      
    </Routes>
    

      
    </div>
    </BrowserRouter>
  );
}

export default App;
