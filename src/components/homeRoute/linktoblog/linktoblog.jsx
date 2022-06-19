import {Link} from "react-router-dom";
import "./linktoblog.css";
import Button from 'react-bootstrap/Button';


let BlogLink = ()=>{
return(

<div className="divFlexed">
<div className="div-linktoblog">
    <h1 id="div-linktoblog-heading">Read our blogs</h1>
    <h3 id="div-linktoblog-heading-h3">Connect wit us better by reading our blogs </h3>
   <Button variant="outline-secondary"><Link to="/blogs" id="blog-link">Blogs .</Link></Button>
</div>
</div>
)
}

export default BlogLink;