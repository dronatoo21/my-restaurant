import specialItem from "../../../assets/specialItem/burgeroni.jpg"
import "./special.css" 
const SpecialSection = () => {
    return (
        <div className="special-section text-white bg-fixed bg-center bg-cover my-10 rounded-md">
            <div className="md:flex py-10 px-12 lg:py-20 lg:px-36 justify-center bg-opacity-60 bg-black">
                <div>                
                    <img className="rounded-lg shadow-white mx-auto shadow-sm" src={specialItem} alt="burger" />
                </div>
                <div className="mt-5 md:mt-0 md:ml-10 flex justify-center flex-col gap-2 md:gap-5">                
                    <h3 className="text-lg lg:text-xl font-bold">Burgeroni Burger</h3>
                    <p className="text-sm lg:text-base">Get ready to savor the unparalleled flavors of the Burgeroni, our signature gourmet burger that brings together the best of classic and innovative ingredients. Each bite is a journey of taste, crafted for those who appreciate the art of a perfect burger.</p>
                    <button className="btn btn-outline hover:bg-white hover:text-black text-white md:w-[200px]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialSection;