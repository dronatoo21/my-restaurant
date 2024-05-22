import specialItem from "../../../assets/specialItem/burgeroni.jpg"
import "./special.css" 
const SpecialSection = () => {
    return (
        <div className="special-section text-white bg-fixed bg-center bg-cover my-10 rounded-md">
            <div className="md:flex py-20 px-36 justify-center bg-opacity-60 bg-black">
                <div>                
                    <img className="rounded-lg" src={specialItem} alt="burger" />
                </div>
                <div className="md:ml-10">                
                    <h3>Burger</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quis. Voluptas temporibus quaerat consequatur. Architecto earum officia, at    quibusdam ad debitis error, animi quia, molestias recusandae vitae pariatur rem quod?</p>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialSection;