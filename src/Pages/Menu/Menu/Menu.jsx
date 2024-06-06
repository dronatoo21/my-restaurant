import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import menuBanner from "../../../assets/MenuBanner/menuBanner.png"

const Menu = () => {
    const [menu, setMenu ] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    console.log(menu);
    return (
        <div>
            <Helmet>
                <title>My Restaurant | Menu</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="">
                <div>
                    <img className="lg:h-[550px] md:h-[400px] h-[250px] w-full rounded-b-md" src={menuBanner} alt="Menu" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-16 mx-5">
                    {
                        menu?.map(item => <div key={item?.id} className="card h-[500px] bg-slate-400 shadow-xl">
                        <figure><img className="h-[250px] w-[300px]" src={item?.image} alt="Shoes" /></figure>
                       <div className="card-body">
                         <h2 className="card-title">{item?.name}</h2>
                         <p>{item?.recipeDescription}</p>
                         <div className="card-actions justify-end">
                           <button className="btn btn-neutral">Buy Now</button>
                         </div>
                       </div>
                     </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;