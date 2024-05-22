import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import drink from "../../../assets/banner logos/drink-banner.png"
import dessert from "../../../assets/banner logos/dessert-banner.png"

const FeaturedProducts = () => {
    return (
        <section className="my-14 lg:mx-5 md:mx-10 mx-3.5">
            <SectionTitle title={"Featured Products"}/>
            <div className="flex lg:flex-row flex-col gap-2 lg:gap-7 md:gap-2 lg:h-[430px]">
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <img className="lg:hidden rounded-lg h-[100px] md:h-[150px] lg:h-[430px] w-full" src="https://kfcbd.com/storage/sliders/VM81uJ1eknFIbYdWrebEJ4ALb.jpg" />
                        <img className="hidden lg:block rounded-lg h-[100px] md:h-[150px] lg:h-[430px] w-full" src="https://i.ibb.co/Cb5BdY9/Thank-you-for-your-understanng.png" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between flex-1">
                    <div>
                        <img className="h-[100px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={dessert} alt="Dessert"/>
                    </div>
                    <div>
                        <img className="h-[100px] md:h-[150px] lg:h-[200px] w-full rounded-lg" src={drink} alt="Drink"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;