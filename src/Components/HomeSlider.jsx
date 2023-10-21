import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
   return (
      <div className='py-10'>
         <h2 className='text-2xl md:text-5xl text-center font-semibold'>Our Clients Says!</h2>
         <div className='max-w-5xl m-auto py-10'>
            <Swiper
               spaceBetween={50}
               slidesPerView={1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
            >
               <SwiperSlide>
                  <div className='px-20 m-auto text-center'>
                     <img className='m-auto mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiQVI64BOhcmcvgwR3TrgsgxkEyWmQCdz9g&usqp=CAU" alt="" />
                     <p className='font-bold'>Sarah Anderson</p>
                     <p>I recently bought this product, and it's been a game-changer for my daily routine. It's incredibly useful and well-priced. Highly recommended!</p>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='px-20 m-auto text-center'>
                     <img className='m-auto mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0n4Db1GuTNcjjlIQZ0Im-HFSVjky8UgGaQ&usqp=CAU" alt="" />
                     <p className='font-bold'>Mark Thompson</p>
                     <p>I've shopped online for years, and this product is one of the best I've found. It's durable, stylish, and worth every penny.</p>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='px-20 m-auto text-center'>
                     <img className='m-auto mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89gVzygy-gkxRLBbUXiKn1WuV9wjWRZWRGw&usqp=CAU" alt="" />
                     <p className='font-bold'>Sophia Davis</p>
                     <p>I can't believe how fast the shipping was. I ordered this product, and it arrived in just two days. The quality is fantastic as well. A must-buy!</p>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default HomeSlider;