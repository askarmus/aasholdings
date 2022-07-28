import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `Contact Us - Ceybex` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"Begins With A Hello."}
          subTitle={"Send us your brief and learn how we work."}
          showButton={false}
        />
        <section className="container pb-5 mb-lg-4 mb-xl-5">
          <div className="row pt-4 mt-lg-3 pb-5 mb-lg-4 mb-xl-5">
            {/* Page title */}
            <div className="col-md-4">
              <h1 className="mb-md-4">Get in Touch</h1>
              <p className="fs-lg pb-2">
                Have a&nbsp;project in&nbsp;mind? To&nbsp;request a&nbsp;quote
                contact us&nbsp;directly or&nbsp;fill out the form and let
                us&nbsp;know how we&nbsp;can help.
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
                    placeholder="00-000-0000"
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
                    href="mailto:team@ceybex.com"
                    className="nav-link d-inline-block fs-lg p-0"
                  >
                    team@ceybex.com
                  </a>
                </li>
                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Phone</span>
                  <a
                    href="tel:4065550120"
                    className="nav-link d-inline-block fs-lg p-0"
                  >
                    (406) 555-0120
                  </a>
                </li>
                <li className="mb-3 mb-lg-4">
                  <span className="d-block fs-sm text-muted">Headquarters</span>
                  <div className="text-nav fs-lg fw-medium">
                    8 Somapah Road, SUTD Entrepreneurship Centre, Singapore,
                    487372, SG
                  </div>
                </li>
              </ul>
            </div>
            {/* Map */}
            <div className="col-xl-7 col-md-8 offset-xl-1">
              <div className="shadow-sm rounded-3 overflow-hidden">
                <iframe
                  className="d-block"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.727252826348!2d103.96273341465358!3d1.3399752619805987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d1c80f66eeb%3A0xace18efe5bb29b50!2sSUTD%20Entrepreneurship%20Centre!5e0!3m2!1sen!2slk!4v1658888834821!5m2!1sen!2slk"
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
