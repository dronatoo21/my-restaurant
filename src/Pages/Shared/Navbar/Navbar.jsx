import { FaBurger } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const Links = <>
        <NavLink to="/"><li className="text-base font-semibold">Home</li></NavLink>
        <NavLink><li className="text-base font-semibold">About</li></NavLink>
    </>
    return (
        <div className="rounded-md  bg-gray-500">
            <div className="navbar bg-transparent">
              <div className="flex-1">
                {/* <Link to="/"><img className="w-24" src="https://i.ibb.co/2PLfjs4/logo.png" alt="logo" /></Link> */}
                <Link to="/"><FaBurger className="text-2xl text-white"/></Link>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-5">
                  {Links}
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Navbar;