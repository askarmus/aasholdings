import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
export const HomeSlider = () => (
  <>
    <section
      className="jarallax dark-mode bg-dark py-xxl-5"
      data-jarallax=""
      data-speed="0.4"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent" />
      <div
        className="jarallax-img"
        style={{
          backgroundImage:
            "url(https://offsetcode.com/themes/boomerang/1.3/assets/images/module-4.jpg)"
        }}
      />
      <div className="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">

        {/* Slider */}
        <div className="container text-center py-xl-5">
          <div className="row justify-content-center pt-lg-5">
            <div className="col-xl-8 col-lg-9 col-md-10 col-11">
              <div
                className="swiper pt-5 pb-4 py-md-5"
              >
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
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
                  <div className="scale-up">
                    <p className='hero mb-2'>iPhone and Android</p>
                    </div>

                    <h2 className="display-2 from-start mb-lg-4">
                    Mobile App <br/>
                    Development
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5 delay-1">
                      Build Apps which are user friendly, scalable and available on both IOS and Android

                      </p>
                    </div>
             
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="scale-up">
                    <p className='hero mb-2'>.NET Core + Angular + React + Vue</p>
                    </div>

                    <h2 className="display-2 from-start mb-lg-4">
                      Web Application <br/> Development
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                      Develops web apps which will solve your business problems, improve efficiency and save time and money.
                      </p>
                    </div>
              
                  </SwiperSlide>
 
                  <SwiperSlide>
                  <div className="scale-up">
                    <p className='hero mb-2'> Amazon AWS + Microsoft Azure + Google Cloud </p>
                    </div>
                 
							
                    <h2 className="display-2 from-start mb-lg-4">
                    Cloud Software  <br/> Development


                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                      Leverage the cloud to get highly scalable apps without deploying additional hardware.
                      </p>
                    </div>
              
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="scale-up">
                    <p className='hero mb-2'> ASP + jQuery + VB + PHP + API </p>
                    </div>

                    <h2 className="display-2 from-start mb-lg-4">
                    Upgrade Applications

                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                      Modernize, renew and enhance the value of your current applications.
                      </p>
                    </div>
              
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="scale-up">
                    <p className='hero mb-2'> App + Web + Portal </p>
                    </div>

                    <h2 className="display-2 from-start mb-lg-4">
                    Startup Services


                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                      Turn your craziest idea into a successful profit making product

                      </p>
                    </div>
              
                  </SwiperSlide>
          

                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
        <div className="d-flex mb-4 mb-sm-0">
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-twitter rounded-circle me-2"
          >
            <i className="bx bxl-twitter" />
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-youtube rounded-circle me-2"
          >
            <i className="bx bxl-youtube" />
          </a>
        </div>
        <a href="#" className="nav-link px-0">
          Our case studies
          <i className="bx bx-right-arrow-circle fs-4 ms-2" />
        </a>
      </div>
    </section>
  </>

)


