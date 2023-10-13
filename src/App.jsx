import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function App() {
  /* 
display: flex;
    position: absolute;
    bottom: 12px;
    padding: 18px;
    left: 564px;
    gap: 27px;
*/

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        {" "}
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        />
        <button onClick={() => next()} />
        <button onClick={() => goToSlide(0)}> Go to any slide </button>
      </div>
    );
  };

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel
        responsive={responsive}
        swipeable
        infinite
        // autoPlay
        // autoPlaySpeed={6000}
        transitionDuration={600}
        removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {product}
      </Carousel>
    </div>
  );
}
