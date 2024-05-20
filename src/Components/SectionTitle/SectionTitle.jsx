const SectionTitle = ({title}) => {
    return (
        <div className="flex items-center gap-2 justify-center mb-8">
            <hr className="border-b-1 border-gray-300 w-[200px]"/>
            <h1 className="text-xl font-bold">{title}</h1>
            <hr className="border-b-1 border-gray-300 w-[200px]"/>
        </div>
    );
};

export default SectionTitle;