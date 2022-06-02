export const Footer = () => (
    <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="https://ceybex.com/img/logos/logo-footer-small.png" width={140} alt="Silicon" />
               
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">
            Ceybex offers the full spectrum of custom software development services to fit the varied needs of our customers. Build better software, faster!


            </p>
            <form className="needs-validation" noValidate="">
    <label htmlFor="subscr-email" className="form-label">
      Subscribe to our newsletter
    </label>
    <div className="input-group">
      <input
        type="email"
        id="subscr-email"
        className="form-control rounded-start ps-5"
        placeholder="Your email"
        required=""
      />
      <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5" />
      <div className="invalid-tooltip position-absolute top-100 start-0">
        Please provide a valid email address.
      </div>
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </div>
  </form>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div
                  id="useful-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Mobile App Development

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                      Web Application Development

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                    Cloud Software Development

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                     ECommerce Services

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                      Upgrade Applications

                      </a>
                    </li>
                  </ul>
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                      Startup Services
                      </a>
                    </li>
            
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                  Website Design

                  </a>
                </h6>
                <div
                  id="social-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                      How We Work

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                      Technologies

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                       About Us

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Contact Us

                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Free Consultation
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">Contact Us</h6>
                <a href="mailto:email@example.com" className="fw-medium">
                  email@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">
            © All rights reserved. Made by{" "}
          </span>
          <a
            className="nav-link d-inline-block p-0"
            href="https://ceybex.com/"
            target="_blank"
            rel="noopener"
          >
            Ceybex
          </a>
        </p>
      </div>
    </footer>
  )
  