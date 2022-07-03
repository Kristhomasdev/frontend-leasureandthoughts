
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";



let READBLOG =()=>{
    const {id} = useParams();
    const [blog,setBlog] = useState({
        phrase:"",
        title:"",
        body:"",
        src:""

    })

    const {phrase,title,body,src} = blog;
    const loadBlog =async ()=>{
        let result = await axios.get(`https://leisureandthoughts-blogbackend.herokuapp.com/blog/${id}`);
        const data = result.data;
        setBlog({
            phrase:data.phrase,
            title:data.title,
            body:data.body,
            src:data.src

        })

    }
    useEffect(()=>{
        loadBlog();
    },[]);

    return(
        <>
        
        <h1>{phrase}</h1>
        <h2>{title}</h2>
        <h3>{body}</h3>
        <h4>{src}</h4>


        </>

    )
}
export default READBLOG;
