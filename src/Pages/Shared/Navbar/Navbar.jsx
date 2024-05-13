import { FaBurger } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const Links = <>
        <NavLink to="/"><li className="text-base font-semibold hover:text-yellow-400">Home</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
    </>
    return (
        <div className="rounded-md text-white bg-gray-500 py-2 px-5">
            <div className="navbar bg-transparent">
              <div className="flex-1">
                {/* <Link to="/"><img className="w-24" src="https://i.ibb.co/2PLfjs4/logo.png" alt="logo" /></Link> */}
                <Link to="/"><FaBurger className="text-2xl text-yellow-400"/></Link>
                <h1 className="ml-4 text-xl font-bold">My <span className="text-yellow-400">Res</span>tau<span className="text-yellow-400">rant</span></h1>
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