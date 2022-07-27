import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
export const HomeSlider = () => (
  <>
    <section
      className="jarallax   py-xxl-5 banner-section"
      data-jarallax=""
      data-speed="0.4"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent" />
      <div className="jarallax-img" />
      <div className="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
        {/* Slider */}
        <div className="container text-center py-xl-5">
          <div className="row justify-content-center pt-lg-5">
            <div className="col-xl-8 col-lg-9 col-md-10 col-11">
              <div className="swiper pt-5 pb-4 py-md-5">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <h2 className="display-2   mb-lg-4 c-white">
                      Custom Software Development Company
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        World Class Mobile and Web App Development for startups
                        and innovative companies and Enterprises
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <h2 className="display-2 from-start mb-lg-4 c-white">
                      Web Application <br /> Development
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        Develops web apps which will solve your business
                        problems, improve efficiency and save time and money.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h2 className="display-2 from-start mb-lg-4 c-white">
                      {" "}
                      Cloud Software <br /> Development{" "}
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        Leverage the cloud to get highly scalable apps without
                        deploying additional hardware.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h2 className="display-2 from-start mb-lg-4 c-white">
                      {" "}
                      Upgrade Applications{" "}
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        Modernize, renew and enhance the value of your current
                        applications.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h2 className="display-2 from-start mb-lg-4 c-white">
                      {" "}
                      Startup Services{" "}
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        Turn your craziest idea into a successful profit making
                        product
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
