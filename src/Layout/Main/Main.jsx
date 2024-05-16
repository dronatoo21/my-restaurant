import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
                <div className="min-h-[65vh]">
                    <Outlet/>
                </div>            
            <Footer/>
        </div>
    );
};

export default Main;