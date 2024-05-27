import { Helmet } from "react-helmet-async";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>My Restaurant | Menu</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <h1 className="justify-center mx-auto">Menu</h1>
        </div>
    );
};

export default Menu;