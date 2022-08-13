import { Card, Col, Container, Row, Image } from "react-bootstrap"
import BlackAdam from "../assets/images/superhero/Black-Adam.jpg"
import BlackWidow from "../assets/images/superhero/Black-Widow.jpg"
import GundalaFilm from "../assets/images/superhero/gundala-film.jpg"
import Morbius from "../assets/images/superhero/Morbius.jpg"
import MortalKombat from "../assets/images/superhero/Mortal-Kombat.jpg"
import Venom2 from "../assets/images/superhero/Venom-2.jpg"

const Superhero =  () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <br />
            <Row>
            <Col md={4} className="movieWrapper" id="superhero" >
                <Card className="movieImage">
                <Image src={BlackAdam} alt="Black Adam" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">BLACK ADAM</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={BlackWidow} alt="Black Widow" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">BACK WIDOW</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={GundalaFilm} alt="Gundala Film" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">GUNDALA</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={Morbius } alt="Morbius" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MORBIUS</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={MortalKombat} alt="Mortal Kombat" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MORTAL KOMBAT</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={Venom2} alt="Venom 2" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">VENOM 2</Card.Title>
                     <Card.Text className="text-left" >
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            </Row>
        </Container>     
    </div>
    )
}

export default Superhero