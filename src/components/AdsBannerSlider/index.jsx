import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className=" pt-10 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030797/1737030796086_banner1.webp'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030816/1737030811455_banner5.webp'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030829/1737030827759_banner2.webp'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030844/1737030841161_banner4.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030862/1737030857998_banner6.webp'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030875/1737030873864_banner3.webp'
            }
            link={'/'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
