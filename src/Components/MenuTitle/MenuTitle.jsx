const MenuTitle = ({title, color}) => {
    return (
        <div style={{backgroundColor: color}} className="flex items-center gap-2 md:px-10 px-5 mb-8 text-white py-5 my-10 rounded-md">
            <h1 className="text-xl lg:text-3xl font-bold uppercase shadow-md rounded-full p-2 shadow-slate-300">{title}</h1>
        </div>
    );
};

export default MenuTitle;