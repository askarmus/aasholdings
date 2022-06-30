import Link from "next/link";

export const Header = () => (
  <header className="header navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container px-3">
      <Link href="/">
        <a className="navbar-brand pe-3">
          <img src="assets/image/logo.svg" width={200} alt="NavDeck" />
        </a>
      </Link>
      <div id="navbarNav" className="offcanvas offcanvas-end">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="web-application-development">
                    <a class="dropdown-item">Web Application Development</a>
                  </Link>
                </li>

                <li>
                  <Link href="microsoft-azure-cloud">
                    <a class="dropdown-item">Microsoft Azure Cloud</a>
                  </Link>
                </li>

                <li>
                  <Link href="startup-product-development">
                    <a class="dropdown-item">Startup Product Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="legacy-modernization">
                    <a class="dropdown-item">Legacy Modernization</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="how-we-work">
                <a className="nav-link">How we work</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="about-us">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="contact-us">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="offcanvas-footer border-top">
          <Link href="contact-us">
            <a className="btn btn-primary w-100">Get a Free Consultation</a>
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link href="contact-us">
        <a className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
          Get a Free Consultation
        </a>
      </Link>
    </div>
  </header>
);
