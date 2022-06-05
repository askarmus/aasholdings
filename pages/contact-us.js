import Layout from '../partials/layout'
import { PageInnerHeader } from '../partials/page.inner.header'
import { TechStack } from '../partials/techstack'

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `Contact Us - Ceyebx` }}>
      <main className="page-wrapper">
        <PageInnerHeader title={'Begins With A Hello.'} subTitle={"Send us your brief and learn how we work."} showButton={false} />
        <section className="container pb-5 mb-lg-4 mb-xl-5">
          {/* Breadcrumb */}
          <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="bx bx-home-alt fs-lg me-1" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts v.1
              </li>
            </ol>
          </nav>
          <div className="row pt-4 mt-lg-3 pb-5 mb-lg-4 mb-xl-5">
            {/* Page title */}
            <div className="col-md-4">
              <h1 className="mb-md-4">Get in Touch</h1>
              <p className="fs-lg pb-2">
                Have a&nbsp;project in&nbsp;mind? To&nbsp;request a&nbsp;quote contact
                us&nbsp;directly or&nbsp;fill out the form and let us&nbsp;know how
                we&nbsp;can help.
              </p>
            </div>
            {/* Contact form */}
            <form
              className="col-xl-7 col-md-8 offset-xl-1 needs-validation"
              noValidate=""
            >
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter your name!</div>
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
                <div className="col-sm-6 mb-4">
                  <label htmlFor="subject" className="form-label fs-base">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="form-select form-select-lg"
                    required=""
                  >
                    <option value="" selected="" disabled="">
                      Choose subject
                    </option>
                    <option value="Website issues">Website issues</option>
                    <option value="Support query">Support query</option>
                    <option value="Feature request">Feature request</option>
                  </select>
                  <div className="invalid-feedback">Please choose the subject!</div>
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
                  <div className="invalid-feedback">Please write your message!</div>
                </div>
              </div>
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-check-input"
                  required=""
                />
                <label htmlFor="terms" className="form-check-label fs-base">
                  I agree to the <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg shadow-primary">
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
                    href="mailto:silicon@example.com"
                    className="nav-link d-inline-block fs-lg p-0"
                  >
                    silicon@example.com
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
                    6391 Elgin St. Celina, Delaware 10299
                  </div>
                  <a href="#" className="fs-sm">
                    Get directions
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <a
                  href="#"
                  className="btn btn-icon btn-outline-secondary btn-facebook mb-3 me-3"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-outline-secondary btn-twitter mb-3 me-3"
                >
                  <i className="bx bxl-twitter" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-outline-secondary btn-linkedin mb-3 me-3"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-outline-secondary btn-instagram mb-3 me-3"
                >
                  <i className="bx bxl-instagram" />
                </a>
              </div>
            </div>
            {/* Map */}
            <div className="col-xl-7 col-md-8 offset-xl-1">
              <div className="shadow-sm rounded-3 overflow-hidden">
                <iframe
                  className="d-block"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48698.87774279696!2d-83.10562475806614!3d40.28286124908331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838e5684a67f065%3A0xe0b86471f0b66d37!2sDelaware%2C%20OH%2043015%2C%20USA!5e0!3m2!1sen!2sua!4v1636376974328!5m2!1sen!2sua"
                  height={460}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <TechStack />
      </main>
    </Layout>
  )
}
