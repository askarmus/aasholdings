import Link from "next/link";
import React, { Children, useState, useEffect } from "react";
import { menuService } from "../service/menu.service";
import VisibilitySensor from "react-visibility-sensor";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);

  function onMenuClick(isOpen) {
    setOpen(isOpen);
    menuService.setOpen(isOpen);
  }

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container px-3">
        <Link href="/">
          <a className="navbar-brand pe-3">
            <img src="assets/image/logo.png" width={170} alt="Ceybex" />
          </a>
        </Link>
        <div
          id="navbarNav"
          className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              onClick={() => onMenuClick(false)}
              type="button"
              className="btn-close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link href="/">
                  <a class="nav-link menu-active">Home</a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  onClick={() => setServiceOpen(!isServiceOpen)}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className={`dropdown-menu ${isServiceOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
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
              <a className="btn-primary-red w-100">Get a Free Consultation</a>
            </Link>
          </div>
        </div>

        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible === false) {
              onMenuClick(false);
              menuService.setOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => onMenuClick(true)}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </VisibilitySensor>
        <Link href="contact-us">
          <a className="btn btn-primary-red btn-sm fs-sm rounded d-none d-lg-inline-flex">
            Get a Free Consultation
          </a>
        </Link>
      </div>
      <div className={` ${isOpen ? "offcanvas-backdrop fade show" : ""}`}></div>
    </header>
  );
}
