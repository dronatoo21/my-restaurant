import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const FeaturedProducts = () => {
    return (
        <section className="my-14">
            <SectionTitle title={"Featured Products"}/>
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