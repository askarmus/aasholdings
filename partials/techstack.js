import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
export const TechStack = () => (
  <section className="bg-dark-light pb-3 pb-lg-5 mb-3 mt-5">
    <div className="container py-2 py-md-4 py-lg-5 technologies">
      <div className="row">
        <div className="col-lg-5 pe-lg-5 pb-5 pb-lg-0">
          <div className="title-style-one mb-3 text-center text-md-start">
            <div className="upper-title">Technology</div>{" "}
            <h2 className="title">
              Our core <span>technology </span> stack.
            </h2>{" "}
          </div>
          <p className="fs-lg text-muted mb-md-0">
            Innovative and reliable networks solutions developed with
            cutting-edge and diverse technologies.
          </p>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://panalinks.com/wp-content/uploads/2020/08/azure.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://thoughtram.io/images/next/angular.svg" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://panalinks.com/wp-content/uploads/2020/08/node-js.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://panalinks.com/wp-content/uploads/2020/08/mongodb.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://panalinks.com/wp-content/uploads/2020/08/react.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-flutter-256.png" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="tech-card">
                <img src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
