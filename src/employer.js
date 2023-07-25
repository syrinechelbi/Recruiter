import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Employerhome() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src='.\post111.png'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/createoffer'>post a job offer</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src='.\seaech11.png'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/candidates'>See candidates</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="....."
          src='.\followup.PNG'
        />
        <Carousel.Caption>
        <Button variant="dark" href='/ApplicationE'>See applications</Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Employerhome;