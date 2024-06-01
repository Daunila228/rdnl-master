
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercrafter.com/desktop2/872526-bridge-river-panorama-Philadelphia-PA-Pennsylvania.jpg"
          alt="First slide"
          height='600px'
        />
        <Carousel.Caption>
          <h1>Brooklin</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.leroymerlin.ru/lmru/image/upload/v1594834734/lmcode/6ESDWdauME2095dLc-heFA/90067468.jpg"
          alt="Second slide"
          height='600px'
        />
        <Carousel.Caption>
          <h1>Hawaii</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.goodfreephotos.com/albums/other-landscapes/beautiful-landscape-panoramic-of-the-mountaintops.jpg"
          alt="Third slide"
          height='600px'
        />
        <Carousel.Caption>
          <h1 style={{color: 'white'}}>Switzerland</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;