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
        <Link href="/" className="navbar-brand pe-3">
            <img src="assets/image/logo.png" width={200} alt="AAS Holding" />
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
                <Link class="nav-link" href="/">
                Home
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/services">
                Services
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" href="how-we-work">
                How we Process
                </Link>
              </li>

              <li className="nav-item">
                <Link class="nav-link " href="about-us">
                About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" href="contact-us">
                Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-footer border-top">
            <Link class="nav-link menu-active btn btn-primary-red w-100" href="contact-us">
               
                Get a Free Consultation
               
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
        <Link href="contact-us" className="btn btn-primary-red  fs-sm rounded d-none d-lg-inline-flex">
            Get a Free Consultation
        </Link>
      </div>
      <div className={` ${isOpen ? "offcanvas-backdrop fade show" : ""}`}></div>
    </header>
  );
}
