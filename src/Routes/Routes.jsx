import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import MainError from "../Pages/ErrorPage/MainError/MainError";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import Location from "../Pages/Location/Location";
import BurgersPage from "../Pages/FeaturedPages/BurgersPage";
import PizzasPage from "../Pages/FeaturedPages/PizzasPage";
import KoreansPage from "../Pages/FeaturedPages/KoreansPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <MainError/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/location",
          element: <Location/>
        },
        {
          path: "/burgers",
          element: <BurgersPage/>
        },
        {
          path: "/pizzas",
          element: <PizzasPage/>
        },
        {
          path: "/korean",
          element: <KoreansPage/>
        }
      ],
    },
  ]);