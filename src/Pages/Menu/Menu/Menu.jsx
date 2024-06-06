import { Helmet } from "react-helmet-async";
import menuBanner from "../../../assets/MenuBanner/menuBanner.png"
import MenuTitle from "../../../Components/MenuTitle/MenuTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../MenuCard/MenuCard";

const Menu = () => {
    const [menu] = useMenu()
    const burgers = menu?.filter(item => item?.categoryName === 'burger')
    const pizzas = menu?.filter(item => item?.categoryName === 'pizza')
    const koreanFoods = menu?.filter(item => item?.categoryName === 'korean-food')
    const desserts = menu?.filter(item => item?.categoryName === 'dessert')
    const soups = menu?.filter(item => item?.categoryName === 'soup')
    const beverages = menu?.filter(item => item?.categoryName === 'beverages')
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
                <div className="mx-5">
                    <MenuTitle title={'burgers'} color={'#4b2f2c'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            burgers?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'pizzas'} color={'#fbaf28'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            pizzas?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'korean foods'} color={'#ee5323'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            koreanFoods?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'soups'} color={'#49873e'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            soups?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'desserts'} color={'#e63a62'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
                        {
                            desserts?.map(item => <MenuCard key={item?.id} item={item}/>)
                        }
                    </div>
                    <MenuTitle title={'drinks'} color={'#a81d3c'}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 mb-14">
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