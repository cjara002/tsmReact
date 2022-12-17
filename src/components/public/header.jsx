// import {
//   withAuthenticator,
// } from "@aws-amplify/ui-react";
import React from "react";
import tennisLogo from "../../img/tennisLogo.png";
import HambugerMenu from "./hamburgerMenu";

const header = () => {
  return (
    <React.Fragment>
      <header
        className="header full-screen bg-img cover-background"
        data-scroll-index="0"
      >
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg onepage-nav bg-AO-blue">
        <HambugerMenu />
          <div className="container d-none d-sm-block">
            {/* Logo */}
            <a className="logo " href="#!" data-scroll-nav="0">
              {/* Need Logo for Tennis Website */}
              <img
                src={tennisLogo}
                alt="TopSpin Maxed | Improve Your Game Today"
                title="Topspin Maxed"
                style={{ height: "auto", width: "10%" }}
              />
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar">
                <i className="fas fa-bars"></i>
              </span>
            </button> */}

            {/* NavBar Links */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#!" data-scroll-nav="1">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!" data-scroll-nav="2">
                    CONTACT
                  </a>
                </li>
              </ul>
              {/* Login Button */}
              <a href="/" className="butn small d-none d-lg-block ml-3" style={{textDecoration: "none"}}>
                Login
              </a>
            </div>
          </div>
          {/* sidemenu is not working */}
          {/* <a
            href="#!"
            className="sidemenu_btn d-none d-lg-inline-block"
            id="sidebar_toggle"
          >
            <span></span> <span></span> <span></span>
          </a> */}
        </nav>
      </header>
    </React.Fragment>
  );
};

//export default withAuthenticator(header);
export default header;
