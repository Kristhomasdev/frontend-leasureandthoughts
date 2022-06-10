// import react from "react";
import Header from "./header/header";
import SlidingImages from "./carousel/carousel";
import Manali from "./manali/manali";
import Forest from "./secondCardLikeManali/forest";


let HomePage = ()=>{
    return(
    <div>
        <Header/>
        <SlidingImages/>
        <Manali/>
        <Forest />
    </div>
    )
};

export default HomePage;


