import React from "react";
import "./frontpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import  Carousel  from "react-bootstrap/Carousel";
import slide1 from ".././images/one.jpg"
import slide2 from "../images/two.jpg"
import slide3 from "../images/three.jpg"



function Home(){
    return(
        <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide1}
      alt="First slide"
    ></img>
    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide2}
      alt="Second slide"
      ></img>

    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide3}
      alt="Third slide"
      ></img>
    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<br/>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


        </>
    )
}

export default Home;