import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import drink from "../../../../public/banner logos/drink-banner.png"
import dessert from "../../../../public/banner logos/dessert-banner.png"

const FeaturedProducts = () => {
    return (
        <section className="my-14 lg:mx-5 mx-10">
            <SectionTitle title={"Featured Products"}/>
            <div className="flex lg:flex-row flex-col gap-2 lg:gap-7 md:gap-2 lg:h-[430px]">
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <img className="lg:hidden rounded-lg h-[120px] md:h-[150px] lg:h-[430px] w-full" src="https://i.ibb.co/Cb5BdY9/Thank-you-for-your-understanng.png" />
                        <img className="hidden lg:block rounded-lg h-[120px] md:h-[150px] lg:h-[430px] w-full" src="https://i.ibb.co/Cb5BdY9/Thank-you-for-your-understanng.png" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between flex-1">
                    <div>
                        <img className="h-[120px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={dessert} alt="Dessert"/>
                    </div>
                    <div>
                        <img className="h-[120px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={drink} alt="Drink"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;