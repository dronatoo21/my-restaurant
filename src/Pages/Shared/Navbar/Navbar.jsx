import { FaBurger } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const Links = <>
        <NavLink to="/"><li className="text-base font-semibold hover:text-yellow-400">Home</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">Menu</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">Dashboard</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">Cart</li></NavLink>
        <NavLink><li className="text-base font-semibold hover:text-yellow-400">Login</li></NavLink>
    </>
    return (
        <div className="md:rounded-md text-white bg-black md:fixed bg-opacity-30 z-10 container mx-auto md:py-2 px-5">
            <div className="navbar bg-transparent">
              <div className="flex-1">
                {/* <Link to="/"><img className="w-24" src="https://i.ibb.co/2PLfjs4/logo.png" alt="logo" /></Link> */}
                <Link to="/"><FaBurger className="text-2xl text-yellow-400"/></Link>
                <h1 className="ml-2 md:ml-4 text-lg md:text-xl font-bold">My <span className="text-yellow-400">Res</span>tau<span className="text-yellow-400">rant</span></h1>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex gap-5">
                  {Links}
                </ul>
              </div>
              <details className="dropdown dropdown-end md:hidden">
                <summary className="btn bg-transparent border-none text-white text-xl"><IoMenu className="text-2xl"/></summary>
                <ul className="p-2 shadow menu dropdown-content z-30 bg-base-100 text-black rounded-lg font-medium flex flex-col gap-2">
                  {Links}
                </ul>
              </details>
            </div>
        </div>
    );
};

export default Navbar;