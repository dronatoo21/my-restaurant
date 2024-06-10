import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import pizza from "../../../assets/featured/pizza.png"
import burger from "../../../assets/featured/burger.png"
import korean from "../../../assets/featured/korean.png"
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    return (
        <section className="my-14 lg:mx-5 md:mx-10 mx-3.5">
            <SectionTitle title={"Featured Products"}/>
            <div className="flex lg:flex-row flex-col gap-2 lg:gap-7 md:gap-2 lg:h-[430px]">
                <div className="flex flex-col justify-between flex-1">
                    <Link to='/menu/burgers'>
                        <div>
                            <img className="lg:hidden rounded-lg h-[100px] md:h-[150px] lg:h-[430px] w-full" src={burger} />
                            <img className="hidden lg:block rounded-lg h-[100px] md:h-[150px] lg:h-[430px] w-full" src={burger} />
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 justify-between flex-1">
                    <Link to='#'>
                        <div>
                            <img className="h-[100px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={pizza} alt="Dessert"/>
                        </div>
                    </Link>
                    <Link to='#'>
                        <div>
                            <img className="h-[100px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={korean} alt="Drink"/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;