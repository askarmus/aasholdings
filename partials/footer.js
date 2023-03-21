import Link from "next/link";

export const Footer = () => (
  <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
    <div className="py-7 py-md-8 py-lg-10">
      <div className="container pt-lg-4">
        <div className="row gy-4">
          <div className="col-lg-4 col-xl-3 pe-xl-5 mb-5 mb-lg-0">
            <div className="pb-3"> </div>
            <p className="m-0 text-white">
              A premier Travels & Tours company committed to providing unique
              and memorable travel experiences. We also offer overseas
              recruitment services to help businesses hire skilled workers from
              around the world
            </p>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="row gy-5">
        
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
                  <li>
                    <a
                      className="link-white"
                      href="https://www.facebook.com/profile.php?id=100087788949825"
                      target="_blank"
                    >
                      FaceBook
                    </a>
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
 
          <div className="col-12 col-md-6 col-xl-6 pr-0 pl-xl-5">
            <div className="communication-location r-communication-address mt-4 mb-4">
              <span className="d-flex">
                <div className="footer-icons">
                  <img
                    src="https://www.mindinventory.com/static/media/address.d4c78826.svg"
                    alt="address"
                  />
                </div>{" "}
               Ampara
              </span>
              <p>520/C  Main Street</p>
              <p>Sainthamaruthu, Ampara, Sri Lanka</p>
              <p>Sri Lanka</p>
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
                Colombo
              </span>
              <p>189 Rajagiriya Road</p>
              <p>Rajagiriya</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
