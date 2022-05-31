import {Component} from "react";
import axios from "axios";



export default class UserEmail extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            query:""
        }
        // methods
        this.changedForName = this.changedForName.bind(this);
        this.changedForEmail= this.changedForEmail.bind(this);
        this.changedForQuery = this.changedForQuery.bind(this);   
         
        this.submit = this.submit.bind(this);

    }
    changedForName(e){
        this.setState({
            name:e.target.value
        })
    }
    changedForEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    changedForQuery(e){
        this.setState({
            query:e.target.value
        })
    }
    
    submit(e){
        e.preventDefault();
        let user ={
            name:this.state.name,
            email:this.state.email,
            query:this.state.query
        }
        axios.post("https://leisureandthoughts.herokuapp.com/user/newuser",user)
        .then((res)=>{
            
            console.log(res.data);
                
            // alert(user.name + " SAVED ++");
            // console.log(this.afterLost(user));
            // res.redirect("/user/newuser/added");
            
        });
        
        
        
        this.setState({
            name:"",
            email:"",
            query:""
        });
        // window.location="/user/newuser/added";
    }
   


    render(){
        return(
            
            <div className="divToBeFlexed">
            <form onSubmit={this.submit}>
            <div>
                <input type="text" value={this.state.name} onChange={this.changedForName} name="name" />
            </div>
            <div>
                <input type="email" value={this.state.email} onChange={this.changedForEmail} name="email" />
            </div>
            <div>
                <input type="text" value={this.state.query} onChange={this.changedForQuery} name="query" />
            </div>
            <div>
                <button type="submit" value="submit">Submit</button>
                
                
            </div>
            </form>
            </div>
            
          
            
        )
    }
}

// module.exports = user;