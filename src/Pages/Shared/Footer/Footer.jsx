import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="hero" style={{backgroundImage: 'url(https://i.ibb.co/tZp9D3v/chef-service.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <footer className="footer p-10 text-white">
              <aside>
                <img className="w-32" src="https://i.ibb.co/2PLfjs4/logo.png" alt="logo" />
                <p className="pl-6"><span className="text-lg">My Restaurant</span><br/>Copyright © 2024 - All right reserved</p>
              </aside> 
              <nav>
                <h6 className="footer-title">OUTLET OPENING HOURS</h6> 
                <h1>Saturday - Friday 10.00 am - 10.00 pm</h1>
              </nav>
              <nav>
                <h6 className="footer-title">Contact</h6> 
                <h1>example@gmail.com</h1>
                <h1>880088##</h1>
                <h1>United States</h1>
              </nav>
              <nav>
                <h6 className="footer-title">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://twitter.com/?lang=en"><FaTwitter className="text-2xl"/></Link>
                    <Link to="https://www.youtube.com/"><FaYoutube className="text-2xl"/></Link>
                    <Link to="https://www.facebook.com/"><FaFacebookF className="text-2xl"/></Link>
                </div>
              </nav>
            </footer>
            
          </div>
    );
};

export default Footer;