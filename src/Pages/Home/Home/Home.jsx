import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../Featured_products/FeaturedProducts";
import SpecialSection from "../Special/SpecialSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>My Restaurant | Home</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <Banner/>
            <FeaturedProducts/>
            <SpecialSection/>
        </div>
    );
};

export default Home;