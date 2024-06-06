const MenuCard = ({item}) => {
    return (
        <div>
            <div key={item?.id} className="card shadow-md h-[500px] shadow-neutral-300">
            <figure className="overflow-hidden inline-block"><img className="h-[250px] w-[300px] hover:scale-110 duration-500 transition" src={item?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item?.name}</h2>
                <p>{item?.recipeDescription}</p>
                <div className="card-actions justify-end">
                   <button className="btn btn-neutral">Buy Now</button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default MenuCard;