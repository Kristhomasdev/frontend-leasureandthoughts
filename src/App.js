// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import CreateUser from "./components/useremail/useremail";
// import {user} from "./components/useremail/useremail";
// import Sucess from "./components/useremail/userSucess";
import SlidingImages from "./components/homeRoute/carousel/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/homeRoute/MAIN";
// import {Component} from "react";
// import axios from "axios";

const Home=()=>{
  return(
    <div>
    <h1>Kedho haal aaye ??</h1>
        <Link to="/user/newuser"> Magic </Link>
    </div>
    
    
  )
}
// const UserEmail =()=>{
//     return(
//         <div className="divToBeFlexed">
//              <form>
//              <div>
//                  <input type="text" name="name" />
//              </div>
//              <div>
//                  <input type="email" name="email" />
//              </div>
//              <div>
//                  <input type="text" name="query" />
//              </div>
//              <div>
//                  <button type="submit" value="submit">Submit</button>
//              </div>
//              </form>
//              </div>
//     )
// }
// 

// class UserEmail extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             email:"",
//             query:""
//         }
//         // methods
//         this.changedForName = this.changedForName.bind(this);
//         this.changedForEmail= this.changedForEmail.bind(this);
//         this.changedForQuery = this.changedForQuery.bind(this);    
//         this.submit = this.submit.bind(this);

//     }
//     changedForName(e){
//         this.setState({
//             name:e.target.value
//         })
//     }
//     changedForEmail(e){
//         this.setState({
//             email:e.target.value
//         })
//     }
//     changedForQuery(e){
//         this.setState({
//             query:e.target.value
//         })
//     }
//     onSubmit(e){
//         e.preventDefault();
//         let user ={
//             name:this.state.name,
//             email:this.state.email,
//             query:this.state.query
//         }
//         axios.post("https://leisureandthoughts.herokuapp.com/user/newuser",user)
//         .then(res=>{console.log(res.data)})
//         .catch(err=>{console.log(err)});
//         // window.location="/";
//         this.setState({
//             name:"",
//             email:"",
//             query:""
//         })

//     }


//     render(){
//         return(
//             <form onSubmit={this.submit}>
//             <div className="divToBeFlexed">
//             <div>
//                 <input type="text" value={this.state.name} onChange={this.changedForName} name="name" />
//             </div>
//             <div>
//                 <input type="email" value={this.state.email} onChange={this.changedForEmail} name="email" />
//             </div>
//             <div>
//                 <input type="text" value={this.state.query} onChange={this.changedForQuery} name="query" />
//             </div>
//             <div>
//                 <button type="submit" value="submit">Submit</button>
//             </div>

//             </div>
//             </form>
//         )
//     }
// }
// 



function App() {
  return (
  <BrowserRouter>
    <div className="App">
    
     
    
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/user/newuser" element={<CreateUser />} />
      {/* <Route path="/user/newuser/added" element={<Sucess />} /> */}
    </Routes>
    

      
    </div>
    </BrowserRouter>
  );
}

export default App;
