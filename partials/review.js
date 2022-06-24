import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
export const Review = () => (
    <section className="position-relative bg-dark py-5 mb-5">

        <div className="container position-relative zindex-5 my-xl-3 py-1 py-md-4 py-lg-5">
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
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide >

                  
      <figure className="position-relative ps-4">
        <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
        <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
          <p className="text-white">Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.</p>
        </blockquote>
        <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
          <img src="https://silicon.createx.studio/assets/img/avatar/04.jpg" width={48} className="rounded-circle" alt="Jane Cooper" />
          <div className="ps-3">
            <h6 className="fw-semibold lh-base mb-0 text-white">Jane Cooper</h6>
            <span className="fs-sm text-muted">CEO of Ipsum Company</span>
          </div>
        </figcaption>
      </figure>

                </SwiperSlide>

                <SwiperSlide >

                
      <figure className="position-relative ps-4">
        <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
        <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
          <p className="text-white">Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.</p>
        </blockquote>
        <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
          <img src="https://silicon.createx.studio/assets/img/avatar/04.jpg" width={48} className="rounded-circle" alt="Jane Cooper" />
          <div className="ps-3">
            <h6 className="fw-semibold lh-base mb-0 text-white">Jane Cooper</h6>
            <span className="fs-sm text-muted">CEO of Ipsum Company</span>
          </div>
        </figcaption>
      </figure>

                </SwiperSlide>


            </Swiper>
        </div>
    </section>
)
