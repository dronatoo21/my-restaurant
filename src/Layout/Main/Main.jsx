import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const isLogin = location?.pathname?.includes('login')
    return (
        <div>
            {isLogin || <Navbar/>}
                <div className="min-h-[65vh]">
                    <Outlet/>
                </div>            
            {isLogin || <Footer/>}
        </div>
    );
}; 

export default Main;