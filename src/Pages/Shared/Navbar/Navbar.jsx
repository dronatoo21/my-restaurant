import { useState } from "react";
import { FaBurger } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [navBar, SetNavBar] = useState(false)
    const Links = <>
        <NavLink to="/"><li className="text-base font-semibold hover:text-yellow-400">Home</li></NavLink>
        <NavLink to='/menu'><li className="text-base font-semibold hover:text-yellow-400">Menu</li></NavLink>
        <NavLink to='/dashboard'><li className="text-base font-semibold hover:text-yellow-400">Dashboard</li></NavLink>
        <NavLink to='/cart'><li className="text-base font-semibold hover:text-yellow-400">Cart</li></NavLink>
        <NavLink to='/about'><li className="text-base font-semibold hover:text-yellow-400">About</li></NavLink>
        <NavLink to='/login'><li className="md:btn md:btn-sm md:bg-transparent md:hover:bg-transparent border-3 md:text-white border-white bg text-base font-semibold hover:text-yellow-400">Login</li></NavLink>
    </>
    const ChangeBackground = () => {
      if(window.scrollY >= 80){
        SetNavBar(true)
      }else{
        SetNavBar(false)
      }
    }
    window.addEventListener('scroll', ChangeBackground)
    return (
          <div className={navBar? 'bg-red-950 bg-opacity-95 md:rounded-b-md text-white fixed z-10 container mx-auto md:py-2 px-5' : 'md:rounded-md text-white bg-black bg-opacity-30 fixed z-10 container mx-auto md:py-2 px-5'}>
            <div className="navbar">
              <div className="flex-1">
                {/* <Link to="/"><img className="w-24" src="https://i.ibb.co/2PLfjs4/logo.png" alt="logo" /></Link> */}
                <Link to="/"><FaBurger className="text-2xl text-yellow-400"/></Link>
                <h1 className="ml-2 md:ml-4 text-lg md:text-xl font-bold">My <span className="text-yellow-400">Res</span>tau<span className="text-yellow-400">rant</span></h1>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex gap-5 items-center">
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