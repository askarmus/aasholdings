export const Header = () => (
    <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
      <div className="container px-3">
        <a href="index.html" className="navbar-brand pe-3">
          <img
            src="assets/image/logo.png"
            width={200}
            alt="Silicon"
          />
          
        </a>
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
              <li className="nav-item">
                <a href="components/typography.html" className="nav-link">
                Services
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                How we work
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                Technologies
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-footer border-top">
            
            <a
              href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"
              className="btn btn-primary w-100"
              target="_blank"
              rel="noopener"
            >
              <i className="bx bx-cart fs-4 lh-1 me-1" />
              &nbsp;Buy now
            </a>
          </div>
        </div>
        <div
          className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
          data-bs-toggle="mode"
        >
          <input type="checkbox" className="form-check-input" id="theme-mode" />
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
        <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
            <i className="bx bx-cart fs-5 lh-1 me-1"></i>
            &nbsp;Free Consultation
          </a>
      </div>
    </header>
  )
  
 