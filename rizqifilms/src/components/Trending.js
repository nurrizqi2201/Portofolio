import { Card, Col, Container, Row, Image } from "react-bootstrap"
import ashiapMan from "../assets/images/trending/ashiap-man.jpg"
import bucin from "../assets/images/trending/bucin.jpg"
import dearNathan from "../assets/images/trending/dear-nathan.jpg"
import kuKirakaurumah from "../assets/images/trending/ku-kira-kau-rumah.jpg"
import layanganPutus from "../assets/images/trending/layangan-putus.jpg"
import mariposaFilm from "../assets/images/trending/mariposa-film.jpg"

const Trending =  () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white">TRENDING MOVIES</h1>
            <br />
            <Row>
            <Col md={4} className="movieWrapper" id="trending">
                <Card className="movieImage">
                <Image src={ashiapMan} alt="Ashiap Man" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">ASHIAP MAN</Card.Title>
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
                <Image src={bucin} alt="Bucin" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">BUCIN</Card.Title>
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
                <Image src={dearNathan} alt="Dear Nathan" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">DEAR NATHAN</Card.Title>
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
                <Image src={kuKirakaurumah } alt="Ku Kira Kau Rumah" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">KU KIRA KAU RUMAH</Card.Title>
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
                <Image src={layanganPutus} alt="Layangan Putus" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">LAYANGAN PUTUS</Card.Title>
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
                <Image src={mariposaFilm} alt="Mariposa Film" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MARIPOSA FILM</Card.Title>
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

export default Trending