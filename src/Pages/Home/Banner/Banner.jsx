import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <img src="https://i.ibb.co/XbQr2Rn/ramen.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/3F0XW3r/pizza.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/F6yWcft/chicken.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;