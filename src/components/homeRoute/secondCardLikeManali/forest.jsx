import React from "react";
// import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './forest.css';



let Forest = ()=>{
    return(
        <div className="divToBeFlexed">
            <div className="forest-content">
            <div className="content">
            <h1 id="forest-header"> Forest like never before </h1>
            <h3 id="forest-h3">
                Get an edge over other stories with our exclusive forest like never before package .
                Experience what the city has to offer with its ethnicity rather than 3 - star hotels
            </h3>
            <Button variant="outline-success" id="forest-content-button">...</Button>
            </div>
            


            </div>
            <div className="forest-image">
                {/* <Figure>
                    <FigureImage 
                        src="images/forestMountain.jpg"
                        alt="manli mountain image"
                        id="forest-image-image"
                        fluid

                    />
                </Figure> */}
                <Image src="images/forest.jpg" alt="manli mountain image" id="forest-image-image" fluid />

            </div>

        </div>
    )
}

export default Forest;