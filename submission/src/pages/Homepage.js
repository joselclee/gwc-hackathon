import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="Home">
        <Header />
        <div className="featured">
            Featured Events
        </div>
        <div className="carousel-container">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1600x900/?csun"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>CSUN</h3>
                    <p>California State University, Northridge</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1600x900/?csun"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>CSUN</h3>
                    <p>California State University, Northridge</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1600x900/?csun"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>CSUN</h3>
                    <p>California State University, Northridge</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Homepage