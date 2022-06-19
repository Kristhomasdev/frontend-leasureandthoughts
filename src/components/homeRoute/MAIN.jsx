// import react from "react";
import Header from "./header/header";
import SlidingImages from "./carousel/carousel";
import Manali from "./manali/manali";
import Forest from "./secondCardLikeManali/forest";
import Form from "./userDetails/user";
import BlogLink from "./linktoblog/linktoblog";


let HomePage = ()=>{
    return(
    <div>
        <Header/>
        <SlidingImages/>
        <Manali/>
        <Forest />
        <Form />
        <BlogLink />
    </div>
    )
};

export default HomePage;


