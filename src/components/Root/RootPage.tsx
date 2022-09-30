import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import './RootPage.css';

SwiperCore.use([Navigation, Pagination]);

export const RootPage:React.FC = (props) => {
    
    return (
        <div className="root-page">
            <Swiper
                scrollbar={{ draggable: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
            >
                <SwiperSlide>
                    <img src='./main01_bg.jpg' alt='main01' className="main-bg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./main02_bg.jpg' alt='main02' className="main-bg"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}