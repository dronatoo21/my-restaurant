import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import b1 from '../../../assets/Banner/b1.png'
import b2 from '../../../assets/Banner/b2.png'
import b3 from '../../../assets/Banner/b3.png'
import b4 from '../../../assets/Banner/b4.png'
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
                <img src={b1} />
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={b2} />
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={b3} />
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={b4} />
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