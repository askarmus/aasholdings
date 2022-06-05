import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
export const Review = () => (
    <section className="position-relative bg-dark py-5 mb-5">

        <div className="container position-relative zindex-5 text-center my-xl-3 py-1 py-md-4 py-lg-5">
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

                    <div className='text-center'>
                        <p className='display-7'>I would also like to <span className="cstm-testimonial-txt ">compliment you for developing such an excellent app. </span> It was great pleasure working with a lovely bunch of professionals in your team.</p>

                        <figcaption className="d-flex align-items-center  justify-content-center ps-4 pt-4">
                            <img
                                src="https://silicon.createx.studio/assets/img/avatar/16.jpg"
                                width={48}
                                className="rounded-circle"
                                alt="Robert Fox"
                            />
                            <div className="ps-3">
                                <h6 className="fs-sm fw-semibold mb-0 text-muted text-left">Philip Aqulina</h6>
                                <span className="fs-xs text-muted">Founder of aquip.io</span>
                            </div>
                        </figcaption>
                    </div>

                </SwiperSlide>

                <SwiperSlide >

                    <div className='text-center'>
                    <p className='display-7'>We are using <span class="cstm-testimonial-txt"> Ceybex services for a number of years </span> and are happy with their professional approach.</p>
                        <figcaption className="d-flex align-items-center justify-content-center ps-4 pt-4">
                            <img
                                src="https://silicon.createx.studio/assets/img/avatar/16.jpg"
                                width={48}
                                className="rounded-circle"
                                alt="Robert Fox"
                            />
                            <div className="ps-3">
                                <h6 className="fs-sm fw-semibold mb-0 text-muted text-left">Toney Fernando</h6>
                                <span className="fs-xs text-muted">Founder of itsthe1</span>
                            </div>
                        </figcaption>
                    </div>

                </SwiperSlide>


            </Swiper>
        </div>
    </section>
)
