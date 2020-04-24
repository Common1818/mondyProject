import React from "react";
import "./css/top-carousel.css";
import { Carousel, Button } from "react-bootstrap";

const MainCarousel = props => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block top-car-img w-100"
            src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block top-car-img w-100"
            src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block top-car-img w-100"
            src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button size="sm" bsPrefix="edit-main-carousel" variant="danger">
        EditMainCarousel
      </Button>
    </div>
  );
};

export default MainCarousel;

// <div
//   id="carouselExampleIndicators"
//   class="carousel slide"
//   data-ride="carousel"
// >
//   <ol class="carousel-indicators">
//     <li
//       data-target="#carouselExampleIndicators"
//       data-slide-to="0"
//       class="active"
//     ></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img
//         className="d-block w-100 main-carousel-image"
//         src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider1.jpg"
//       ></img>
//       <div className="over-carousel">
//         <div className="carousel-text text-white">
//           <strong>Lorem ipsum, dolor s Rem, ut?</strong>
//           <br />
//           Lorem ipsum dolor sit amet.
//         </div>
//         <a className="carousel-links" href="/" type="button">
//           Link
//         </a>
//       </div>
//     </div>
//     <div class="carousel-item ">
//       <img
//         className="d-block w-100 main-carousel-image"
//         src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider2.jpg"
//       ></img>
//       <div className="over-carousel">
//         <div className="carousel-text text-white">
//           <strong>Lorem ipsum, dolor sit amet , ut?</strong>
//           <br />
//           Lorem ipsum dolor sit amet.
//         </div>
//         <a className="carousel-links" href="/" type="button">
//           Link
//         </a>
//       </div>
//     </div>
//     <div class="carousel-item ">
//       <img
//         className="d-block w-100 main-carousel-image"
//         src="//www.ibm-institute.com/wp-content/uploads/2019/09/Slider2.jpg"
//       ></img>
//       <div className="over-carousel">
//         <div className="carousel-text text-white">
//           <strong>Lorem ipsum, dolor sit ame ut?</strong>
//           <br />
//           Lorem ipsum dolor sit amet.
//         </div>
//         <a className="carousel-links" href="/" type="button">
//           Link
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
