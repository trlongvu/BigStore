import React, { useRef, useState } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSlideBig = useRef();
  const zoomSlideSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlideSml.current.swiper.slideTo(index);
    zoomSlideBig.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[20%]">
          <Swiper
            ref={zoomSlideSml}
            direction={'vertical'}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            className="zoomProductSliderThumb h-[500px]"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 0 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 1 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 2 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 3 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden rounded-md">
          <Swiper
            ref={zoomSlideBig}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            className="zoomProductSliderThumb h-[500px]"
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736936052/1736936051385_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736936052/1736936051385_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
