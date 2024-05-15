import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-sm"
      >
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/grkjwLB/steak.jpg" />
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/3F0XW3r/pizza.png" />
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/F6yWcft/chicken.png" />
            </div>    
        </SwiperSlide>
        <div className="autoplay-progress h-[5vh]" slot="container-end">
          <svg viewBox="0 0 0 0" ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;