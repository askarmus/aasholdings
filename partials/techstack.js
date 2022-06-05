import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
export const TechStack = () => (
  <>
    <section className="container pb-3 pb-lg-5 mb-3 mt-5">
    <h1 className="text-center pb-md-2"> 
    The tech stack designed for building competitive products

    </h1>
    <p>
    Just like you, we choose scalable and flexible technologies. The engineering mindset our talents have already solved the challenges of many clients. Unsure how to lead development forward? Your future team will guide you to the most optimal software solutions and strategies.


    </p>
    <h4 className="text-center pb-md-2">Work with future-proof technologies
</h4>
       
 
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          500: {
            width: 640,
            slidesPerView: 3,
            spaceBetween : 8
          },
          // when window width is >= 768px
          650: {
            width: 650,
            slidesPerView: 4,
            spaceBetween : 8
          },
          900: {
            width: 900,
            slidesPerView: 5,
            spaceBetween : 8
          },
          1100: {
            width: 1100,
            slidesPerView: 6,
            spaceBetween : 3
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="https://silicon.createx.studio/assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width={154}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide> 
      </Swiper>
    </section>
  </>
)

 