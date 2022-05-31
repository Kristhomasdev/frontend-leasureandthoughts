import react from "react";
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./carousel.css";


let SlidingImages = () =>{
    return(
      <div>
      <Carousel fade indicators={false} controls={false} interval="5000"> 
      <Carousel.Item>
        <Image
          src="images/forest.jpg"
          fluid
          id="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="images/mountain.jpg" fluid id="carousel-image"/>
    
        
      </Carousel.Item>
      <Carousel.Item>
        <Image src="images/sea.jpg" fluid id="carousel-image"/>
      </Carousel.Item>
    </Carousel>
    <div id="carousel-heading">
    <h1><span id="uppercase">E</span>xplore the <span id="uppercase">U</span>nexplored</h1>
    <Button variant="outline-dark" id="carousel-button">Explore</Button>
    </div>
      </div>
    

    )
};


export default SlidingImages;