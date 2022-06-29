import axios from "axios";
import {useEffect,useState} from "react";
import "./blog.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let Blogpage = ()=>{
    const [blogs,setBlogs] = useState([]);
    let loadBlogs = async ()=>{
        let result = await axios.get("https://leisureandthoughts-blog.herokuapp.com/blog");
        setBlogs(result.data);
        // console.log(result.data);
        console.log(blogs);
    }

    useEffect(()=>{
        loadBlogs();

    },[]);







    return(
        <div className="blog-div">
            
            {
                blogs.map(blog =>(
                    
                        
                        <Card style={{ width: '18rem' }} className="blog-card">
                    <Card.Img variant="top" src={blog.src} className="blog-image"/>
  <Card.Body>
    <Card.Title>{blog.phrase}</Card.Title>
    
    <Button variant="dark" className="blog-button"> Read </Button>
  </Card.Body>
</Card>
                    )

                
            )}


        </div>
    )
}
export default Blogpage;