import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isLoginOrRegister = location?.pathname?.includes('login') || location?.pathname?.includes('register');
    
    return (
        <div>
            {!isLoginOrRegister && <Navbar />}
            <div className="min-h-[65vh]">
                <Outlet />
            </div>
            {!isLoginOrRegister && <Footer />}
        </div>
    );
}; 

export default Main;