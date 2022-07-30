import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
export const TechStack = () => (
  <>
    <section className="container pb-3 pb-lg-5 mb-3 mt-5">
      <div className="title-style-one mb-3 mb-4 text-center">
        <h2 className="title">
          The tech stack designed for building <span>competitive</span> products
        </h2>{" "}
      </div>

      <p className="mb-4 text-center">
        Just like you, we choose scalable and flexible technologies. The
        engineering mindset our talents have already solved the challenges of
        many clients. Unsure how to lead development forward? Your future team
        will guide you to the most optimal software solutions and strategies.
        <br></br>
      </p>

      <div className="mt-5 mb-5 text-center">
        <strong>Work with future-proof technologies</strong>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          500: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 8,
          },
          // when window width is >= 768px
          650: {
            width: 650,
            slidesPerView: 4,
            spaceBetween: 8,
          },
          900: {
            width: 900,
            slidesPerView: 5,
            spaceBetween: 8,
          },
          1100: {
            width: 1100,
            slidesPerView: 6,
            spaceBetween: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide py-3 swiper-slide-next" role="group">
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://panalinks.com/wp-content/uploads/2020/08/azure.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide py-3 swiper-slide-next" role="group">
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://panalinks.com/wp-content/uploads/2020/08/vue.js.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://panalinks.com/wp-content/uploads/2020/08/react.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://thoughtram.io/images/next/angular.svg"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ height: 60 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://panalinks.com/wp-content/uploads/2020/08/node-js.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://panalinks.com/wp-content/uploads/2020/08/mongodb.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div
            className="swiper-slide py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 6"
            style={{ width: 212, marginRight: 8 }}
          >
            <a href="#" className="card card-body  px-2 mx-2">
              <img
                src="https://cdn-images-1.medium.com/max/1200/1*nE4OFcqk2kx2-Lzhey8QKA.png"
                className="d-block mx-auto my-2"
                style={{ height: 60 }}
                alt="Brand"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </>
);
