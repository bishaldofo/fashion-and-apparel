import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = ({ slider }) => {
   
   const {title, description, image} = slider || {}
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >  
         
         <SwiperSlide>
            <img className='h-[80vh] w-full object-cover' src={image} alt="" />
         </SwiperSlide>
            
      </Swiper>
   );
};

export default HomeSlider;