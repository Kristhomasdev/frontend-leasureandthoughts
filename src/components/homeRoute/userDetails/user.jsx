import {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "./user.css";

let Form =()=>{
    const [header,setHeader] = useState({
        name:"We would love to hear from you ",
        email:"leave us our email and query "
    })
    const [user,setUser]=useState({
        name:"",
        email:"",
        query:""
    })

    const handleEvent = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user,
            [name]:value})
        setHeader({
            ...header,
            [name]:value
        })

    }
    const onsubmit =(e)=>{
        e.preventDefault();
        axios.post("https://leisureandthoughts.herokuapp.com/user/newuser",user).then(res=>console.log(res.data));
        setUser({
            name:"",
            email:'',
            query:""
        })
        setHeader({
            name:"Thank you " + user.name,
            email:""
        })

    }
    return(
        <div className="formFlexed">
                <h1>{header.name}</h1>
                <h4>{header.email}</h4>
            <input type="text" name="name" value={user.name} onChange={handleEvent} ></input>
            <input type="email" name="email" value={user.email} onChange={handleEvent} ></input>
            <input type="text" name="query" value={user.query} onChange={handleEvent} ></input>
            <Button variant="success" type="submit" onClick={onsubmit}>Success</Button>
            
        </div>

    )
}

export default Form;