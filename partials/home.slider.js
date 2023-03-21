import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
export const HomeSlider = () => (
  <section className="pt-lg-4 mt-lg-3">
    <div className="position-relative overflow-hidden">
      {/* Image */}
      <div className="container-fluid position-relative position-lg-absolute top-0 start-0 h-100">
        <div className="row h-100 me-n4 me-n2">
          <div className="col-lg-7 position-relative">
            <div className="d-none d-sm-block d-lg-none" />
            <div className="d-sm-none" style={{ height: "300px" }} />
            <div
              className="jarallax position-absolute top-0 start-0 w-100 h-100 rounded-3 rounded-start-0 overflow-hidden"
              data-jarallax
              data-speed="0.3"
            >
              <div
                id="jarallax-container-0"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  zIndex: -100,
                  clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
                }}
              >
                <div
                  className="jarallax-img"
                  style={{
                    backgroundImage: 'url("assets/image/hero-img.jpg")',
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    maxWidth: "none",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "1117.08px",

                    overflow: "hidden",
                    pointerEvents: "none",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                    marginTop: "-86.6766px",
                    transform: "translate3d(0px, 121.477px, 0px)",
                  }}
                  data-jarallax-original-styles="background-image: url(assets/img/landing/financial/hero-img.jpg);"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative zindex-5 pt-lg-5 px-0 px-lg-3">
        <div className="row pt-lg-5 mx-n4 mx-lg-n3">
          <div className="col-xl-6 col-lg-7 offset-lg-5 offset-xl-6 pb-5">
            {/* Card */}
            <div className="card bg-dark-red border-light overflow-hidden py-4 px-2 p-sm-4">
              <span
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(255,255,255,.05)" }}
              />
              <div className="card-body position-relative zindex-5">
                <h1 className="display-5 text-light pb-3 mb-3">
                
               Overseas Manpower, <br></br> Recruitment.
                </h1>
                <p className="fs-lg text-light opacity-70 mb-5">
                To find the foreign and offshore opportunities to the Sri Lakan workers and get obtained the same to them in standard manners so they can get benefitted from.
                </p>
                <div className="d-flex flex-column flex-sm-row">
                  <Link href="contact-us">
                    <a className="btn btn-primary shadow-primary btn-lg mb-3 mb-sm-0 me-sm-4">
                      Get a Free Consultation
                    </a>
                  </Link>

                  <Link href="about-us">
                    <a href="#" className="btn btn-outline-light btn-lg">
                      Who we are
                      <i className="bx bx-right-arrow-alt fs-4 lh-1 ms-2 me-n1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 offset-lg-8 offset-xxl-9 pt-lg-5 mt-xxl-5">
            {/* Contacts (List) */}
            <ul className="list-unstyled mb-0 px-4 px-lg-0">
              <li className="d-flex align-items-center pb-1 mb-2">
                <i className="bx bx-envelope fs-xl text-primary me-2" />
                <a
                  href="mailto:team@aasholding.lk"
                  className="nav-link fw-normal p-0"
                >
                  team@aasholding.lk
                </a>
              </li>
              <li className="d-flex align-items-center pb-1 mb-2">
                <i className="bx bx-phone-call fs-xl text-primary me-2" />
                <a href="tel:+94777776646" className="nav-link fw-normal p-0">
                +94777776646,
                </a>

                <a href="tel:+94778082285" className="nav-link fw-normal p-0">
                +94778082285,
                </a>
                <a href="tel:+94672052285" className="nav-link fw-normal p-0">
                +94672052285
                </a>


              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
