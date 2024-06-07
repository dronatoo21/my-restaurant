import { FaPlus } from "react-icons/fa";

const MenuCard = ({item}) => {
    return (
        <div>
            <div key={item?.id} className="card shadow-md bg-white rounded-md h-[400px] shadow-neutral-200">
            <figure className="overflow-hidden inline-block"><img loading="lazy" className="h-[200px] p-5 w-[250px] hover:scale-110 duration-500 transition" src={item?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-base font-bold">{item?.name}</h2>
                {
                    item?.recipeDescription?.length > 70 ? <p className="font-normal text-sm">{item?.recipeDescription?.slice(0, 70)}...</p> : <p className="font-normal text-sm">{item?.recipeDescription}</p>
                }
                <hr className="my-2"/>
                <div className="card-actions flex justify-between items-center">
                    <div>
                        <p className="text-xs">price</p>
                        <p className="text-lg font-semibold text-green-600">${item?.price}</p>
                    </div>
                   <button className="btn bg-[#ffc45f]"><FaPlus className="text-white"/></button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default MenuCard;