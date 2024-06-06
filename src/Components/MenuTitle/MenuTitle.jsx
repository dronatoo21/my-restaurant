const MenuTitle = ({title}) => {
    return (
        <div className="flex items-center gap-2 px-10 mb-8 bg-black text-white bg-opacity-80 py-4 my-10 rounded-md">
            <h1 className="text-sm md:text-xl lg:text-3xl font-bold uppercase">{title}</h1>
        </div>
    );
};

export default MenuTitle;