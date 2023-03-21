import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `Contact Us - AAS Holding` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"Get in Touch With us."}
        
          showButton={false}
        />
        <section className="container pb-5 mb-lg-4 mb-xl-5">
          <div className="row pt-4 mt-lg-3 pb-5 mb-lg-4 mb-xl-5">
            {/* Page title */}
            <div className="col-md-4">
              <div className="title-style-one mb-3 mb-4">
                <h2 className="title">
                  Get in <span>Touch</span>{" "}
                </h2>{" "}
              </div>
              <p className="fs-lg pb-2">
              If your company need Sri Lankan worker then look no further, send in a request and we would get back to you within 24 Hours.

              </p>
            </div>
            {/* Contact form */}
            <form
              className="col-xl-7 col-md-8 offset-xl-1 needs-validation"
              noValidate=""
            >
              <div className="row">
                <div className="col-sm-12 mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your name!
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <label htmlFor="email" className="form-label fs-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address!
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <label htmlFor="phone" className="form-label fs-base">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control form-control-lg"
                    data-format="custom"
                    data-delimiter="-"
                    data-blocks="2 3 4"
                    data-numeral={9}
                  />
                </div>

                <div className="col-12 mb-4">
                  <label htmlFor="message" className="form-label fs-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control form-control-lg"
                    rows={4}
                    required=""
                    defaultValue={""}
                  />
                  <div className="invalid-feedback">
                    Please write your message!
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg ">
                Submit form
              </button>
            </form>
          </div>
          <hr className="d-md-none mt-n2 mb-2" />
          <div className="row py-3">
            {/* Contact info */}
            <div className="col-md-4 pt-1 mb-4 mb-md-0">
              <h3 className="pb-2 pb-md-3 pb-lg-4">Contact Info</h3>
              <ul className="list-unstyled pb-1 pb-lg-4">
                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Email</span>
                  <a
                    href="mailto:team@aasholding.lk"
                    className="nav-link d-inline-block fs-lg p-0"
                  >
                    team@aasholding.lk <br></br>
                    aasholdingprivatelimited@gmail.com
                  </a>
                </li>
                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Phone</span>
                  <a
                    href="tel:+94779059394"
                    className="nav-link d-inline-block fs-lg p-0"
                  >
                   +94777776646<br></br>
+94778082285<br></br>
+94672052285 <br></br>
                  </a>
                </li>
                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Ampara</span>
                  <div className="text-nav fs-lg fw-medium">
                    <p>
                      520/C <br></br> Main Street{" "}
                      <br></br> Sainthamaruthu, Ampara, Sri Lanka
                    </p>
                  </div>
                </li>

                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Colombo</span>
                  <div className="text-nav fs-lg fw-medium">
                    <p>
                      189 <br></br> Rajagiriya Road{" "}
                      <br></br> Rajagiriya, Sri Lanka
                    </p>
                  </div>
                </li>

              </ul>
            </div>
            {/* Map */}
            <div className="col-xl-7 col-md-8 offset-xl-1">
              <div className="shadow-sm rounded-3 overflow-hidden">
                <iframe
                  className="d-block"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4671081907754!2d81.8243440152325!3d7.41344161423308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae53f03af617293%3A0x13b4b12b528794b3!2s520%20Main%20St%2C%20Kalmunai%2032300!5e0!3m2!1sen!2slk!4v1679291102851!5m2!1sen!2slk"
                  height={460}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
