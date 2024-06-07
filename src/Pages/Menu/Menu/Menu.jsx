import { Helmet } from "react-helmet-async";
import menuBanner from "../../../assets/MenuBanner/menuBanner.png"
import MenuTitle from "../../../Components/MenuTitle/MenuTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../MenuCard/MenuCard";
import { Link } from "react-scroll";
import { FaBowlRice, FaBurger, FaPizzaSlice } from "react-icons/fa6";
import { TbSoup } from "react-icons/tb";
import { GiCakeSlice } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";

const Menu = () => {
    const [menu] = useMenu()
    const burgers = menu?.filter(item => item?.categoryName === 'burger')
    const pizzas = menu?.filter(item => item?.categoryName === 'pizza')
    const koreanFoods = menu?.filter(item => item?.categoryName === 'korean-food')
    const desserts = menu?.filter(item => item?.categoryName === 'dessert')
    const soups = menu?.filter(item => item?.categoryName === 'soup')
    const beverages = menu?.filter(item => item?.categoryName === 'beverages')
    const itemsClass = "rounded-md text-sm md:text-base p-2 uppercase btn bg-transparent font-semibold flex md:flex-row flex-col"

    const links = <>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="burgers"><FaBurger className="text-[#4b2f2c]"/>Burgers</Link></li>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="pizzas"><FaPizzaSlice className="text-[#fbaf28]"/>pizzas</Link></li>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="korean"><FaBowlRice className="text-[#ee5323]"/>Korean</Link></li>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="soups"><TbSoup className="text-[#49873e]"/>soups</Link></li>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="desserts"><GiCakeSlice className="text-[#e63a62]"/>desserts</Link></li>
        <li><Link spy={true} smooth={true} offset={-300} duration={500} className={itemsClass} to="drinks"><RiDrinks2Fill className="text-[#a81d3c]"/>drinks</Link></li>
    </>
    
    return (
        <div className="min-h-[80vh]">
            <Helmet>
                <title>My Restaurant | Menu</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <div>
                <div>
                    <img className="lg:h-[550px] md:h-[400px] h-[250px] w-full rounded-b-md" src={menuBanner} alt="Menu" />
                </div>
                <div className="rounded-md mb-5 py-5 px-2 text-center bg-white shadow-md shadow-neutral-200 z-20 ">
                    <ul className="md:flex grid grid-cols-3 gap-1 md:gap-5 justify-center">
                        {links}
                    </ul>
                </div>
                <div className="mx-5 lg:mx-0 ">
                    <MenuTitle title={'burgers'} color={'#4b2f2c'}/>
                    <div id="burgers" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            burgers?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'pizzas'} color={'#fbaf28'}/>
                    <div id="pizzas" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            pizzas?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'korean foods'} color={'#ee5323'}/>
                    <div id="korean" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            koreanFoods?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'soups'} color={'#49873e'}/>
                    <div id="soups" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            soups?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'desserts'} color={'#e63a62'}/>
                    <div id="desserts" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            desserts?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'drinks'} color={'#a81d3c'}/>
                    <div id="drinks" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            beverages?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;