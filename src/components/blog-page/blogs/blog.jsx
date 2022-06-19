import axios from "axios";
import {useEffect,useState} from "react";

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
        <div>
            <h1>This is Blog age .... </h1>
            {
                blogs.map(blog =>(
                    
                        <div>
                        <h1>{blog.title}</h1>
                        <h2>{blog.body}</h2>
                        </div>
                    )

                
            )}


        </div>
    )
}
export default Blogpage;