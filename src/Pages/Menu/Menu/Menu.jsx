import { Helmet } from "react-helmet-async";
import menuBanner from "../../../assets/MenuBanner/menuBanner.png"
import MenuTitle from "../../../Components/MenuTitle/MenuTitle";

const Menu = () => {
    return (
        <div className="min-h-[80vh]">
            <Helmet>
                <title>My Restaurant | Menu</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="">
                <div>
                    <img className="lg:h-[550px] md:h-[400px] h-[250px] w-full rounded-b-md" src={menuBanner} alt="Menu" />
                </div>
                <div>
                    <MenuTitle title={'Pizzas'}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;