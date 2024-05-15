const FeaturedProducts = () => {
    return (
        <section className="my-14">
            <div className="flex items-center gap-2 justify-center mb-8">
                <hr className="border-b-1 border-gray-300 w-[200px]"/>
                <h1 className="text-xl font-bold">Featured Products</h1>
                <hr className="border-b-1 border-gray-300 w-[200px]"/>
            </div>
            <div className="flex flex-row gap-2 h-[430px]">
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/grkjwLB/steak.jpg" />
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <img className="h-[210px] w-full rounded-lg" src="https://i.ibb.co/grkjwLB/steak.jpg" />
                    </div>
                    <div>
                        <img className="h-[210px] w-full rounded-lg" src="https://i.ibb.co/grkjwLB/steak.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;