import React from "react";
// import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './manali.css';



let Manali = ()=>{
    return(
        <div className="divToBeFlexed" id="divToBeFlexed">
            <div className="manali-content">
            <div className="content">
            <h1 id="manali-header"> Manali like never before </h1>
            <h3 id="manali-h3">
                Get an edge over other stories with our exclusive Manali like never before package .
                Experience what the city has to offer with its ethnicity rather than 3 - star hotels
            </h3>
            <Button variant="outline-light" id="manali-content-button">Dark</Button>
            </div>
            


            </div>
            <div className="manali-image">
                {/* <Figure>
                    <FigureImage 
                        src="images/manaliMountain.jpg"
                        alt="manli mountain image"
                        id="manali-image-image"
                        fluid

                    />
                </Figure> */}
                <Image src="images/manaliMountain.jpg" alt="manli mountain image" id="manali-image-image" fluid />

            </div>

        </div>
    )
}

export default Manali;