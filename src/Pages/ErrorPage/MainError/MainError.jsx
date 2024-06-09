import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import ErrorAnimation from "../../../../public/404.json" 

const MainError = () => {
    return (
        <div className="min-h-screen">
            <div className="text-center py-28">
                <Link to="/"><button className="btn bg-gray-800 text-white rounded-xl my-10">Go To Home</button></Link>
                <Lottie className="w-8/12 lg:w-1/3 mx-auto" animationData={ErrorAnimation}/>
            </div>
        </div>
    );
};

export default MainError;