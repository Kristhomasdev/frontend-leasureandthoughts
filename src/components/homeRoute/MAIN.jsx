import react from "react";
import Header from "./header/header";
import SlidingImages from "./carousel/carousel";
import Manali from "./manali/manali";


let HomePage = ()=>{
    return(
    <div>
        <Header/>
        <SlidingImages/>
        <Manali/>
    </div>
    )
};

export default HomePage;


