import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function ApphomeC() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src='.\C2.png'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/createProfile'>Create your profile</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src='.\C1.png'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/SearchJob'>See job offers</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="....."
          src='.\C3.png'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/ApplicationC'>See your applications</Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ApphomeC;