    "use client";
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/effect-coverflow";
    import "swiper/css/pagination";
    import { EffectCoverflow } from "swiper/modules";
    import { mobileScreenshots } from "../_constants";
    import Image from "next/image";

    const MobileScreenshotSlider = () => {
    return (
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} 
        spaceBetween={30}  
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2, 
              spaceBetween:20

            },
          
            768: {
              slidesPerView: 3, 
            },
          }}
        modules={[EffectCoverflow]}
        className="mySwiper"
        >
        {mobileScreenshots.map((screenshot, index) => (
            <SwiperSlide key={index}>
            <Image
                src={screenshot.Imgsrc}
                alt={screenshot.alt}
                className="mobile-screenshot"
            />
            </SwiperSlide>
        ))}
        </Swiper>
    );
    };

    export default MobileScreenshotSlider;
