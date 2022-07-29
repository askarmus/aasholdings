import Link from "next/link";

export const Footer = () => (
  <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
    <div className="py-7 py-md-8 py-lg-10">
      <div className="container pt-lg-4">
        <div className="row gy-4">
          <div className="col-lg-4 col-xl-3 pe-xl-5 mb-5 mb-lg-0">
            <div className="pb-3"> </div>
            <p className="m-0 text-white">
              Ceybex offers the full spectrum of custom software development
              services to fit the varied needs of our customers. Build better
              software, faster!
            </p>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="row gy-5">
              <div className="col-lg-4 col-6">
                <h5 className="text-white footer-title-01 opacity-5">
                  Services
                </h5>

                <ul className="list-unstyled footer-link-01 m-0">
                  <li>
                    <Link href="web-application-development">
                      <a class="link-white">Web Application Development</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="microsoft-azure-cloud">
                      <a class="link-white">Microsoft Azure Cloud</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="startup-product-development">
                      <a class="link-white">Startup Product Development</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="legacy-modernization">
                      <a class="link-white"> Legacy Modernization</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-6">
                <h5 className="text-white footer-title-01 opacity-5">Help</h5>
                <ul className="list-unstyled footer-link-01 m-0">
                  <li>
                    <Link href="contact-us">
                      <a className="link-white" href="#">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-6">
                <h5 className="text-white footer-title-01 opacity-5">
                  Resources
                </h5>
                <ul className="list-unstyled footer-link-01 m-0">
                  <li>
                    <Link href="how-we-work">
                      <a class="link-white">How we works</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="about-us">
                      <a class="link-white">About Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <hr class="mt-3 mb-3" />
      <div className="col-10 col-lg-8   mb-4 footer-location">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-3 pr-0 pl-xl-5">
            <a href="/">
              <img
                width={114}
                height={41}
                src="assets/image/logo-white.png"
                alt="mi logo"
                className="footer-logo"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 col-xl-6 pr-0 pl-xl-5">
            <div className="communication-location r-communication-address mt-4 mb-4">
              <span className="d-flex">
                <div className="footer-icons">
                  <img
                    src="https://www.mindinventory.com/static/media/address.d4c78826.svg"
                    alt="address"
                  />
                </div>{" "}
                Singapore
              </span>
              <p> 8 Somapah Road,</p>
              <p>SUTD Entrepreneurship Centre</p>
              <p>Singapore, 487372, SG</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 pr-0 pl-xl-0">
            <div className="communication-location r-communication-address mt-4 mb-4">
              <span className="d-flex">
                <div className="footer-icons">
                  <img
                    src="https://www.mindinventory.com/static/media/address.d4c78826.svg"
                    alt="address"
                  />
                </div>{" "}
                Sri Lanka
              </span>
              <p>141 World Trade Center,</p>
              <p>Western Province</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
