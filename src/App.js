import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tennisLogo from "./img/tennisLogo.png";
import React from "react";

function App() {
  return (
    <React.Fragment> 
    {/* Main Wrapper */}
    <div className="main-wrapper">
      {/* Header */}
      <header
        className="header full-screen bg-img cover-background"
        data-scroll-index="0"
      >
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg onepage-nav">
          <div className="container">
            {/* Logo */}
            <a className="logo" href="#!" data-scroll-nav="0">
              {/* Need Logo for Tennis Website */}
              <img
                src={tennisLogo}
                alt="TopSpin Maxed | Improve Your Game Today"
                title="Topspin Maxed"
                style={{ height: "auto", width: "10%" }}
              />
            </a>

            <button
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
            </button>

            {/* NavBar Links */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#!" data-scroll-nav="0">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!" data-scroll-nav="1">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!" data-scroll-nav="2">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!" data-scroll-nav="3">
                    Contact
                  </a>
                </li>
              </ul>
              {/* Login Button */}
              <a href="#!" className="butn small d-none d-lg-block ml-3">
                Login
              </a>
            </div>
          </div>
          {/* sidemenu is not working */}
          <a
            href="#!"
            className="sidemenu_btn d-none d-lg-inline-block"
            id="sidebar_toggle"
          >
            <span></span> <span></span> <span></span>
          </a>
        </nav>

        <div className="tennisHeroBg">
          <div className="container d-flex flex-column">
            <div className="row align-items-center min-vh-100">
              <div
                className="col-12"
                style={{ backgroundColor: "rgb(1, 2, 3, .5)" }}
              >
                <div className="row align-items-center py-12 py-lg-10">
                  <div className="col-lg-6 mt-1-6 mt-lg-0 order-2 order-lg-1 position-relative text-white">
                    <h6>Take your game to the next level...</h6>
                    <h1 className="display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">
                      Tap into your{" "}
                      <strong className="text-success font-weight-700">
                        MAXED
                      </strong>{" "}
                      skill
                    </h1>
                    <p className="mb-1-6 mb-lg-2-2 w-95 w-md-75 display-29 display-md-28">
                      Sign up and get access to:
                    </p>
                    <ul className="list-style5 mb-1-6 mb-lg-5 pl-0">
                      <li>Stats</li>
                      <li>Quality Network of Players</li>
                      <li>Coaching</li>
                    </ul>
                    <a href="#!" className="butn">
                      Sign-Up Now
                    </a>
                  </div>
                  {/* <div className="col-lg-6 order-1 order-lg-2 text-center">
                                  <img src="img/banner/corona-banner.svg" alt="..."/>
                              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
{/* About Us */}
    <section class="bg-light text-center">
            <div class="container">
                <div class="mb-5 text-center">
                    <h2 class="mb-3">About Us</h2>
                    <p class="mx-auto mb-0 w-95 w-md-80 w-lg-60 w-xl-50">
                      What is the point of playing matches if you do not get better?
                      It is important to keep track of game wons/lost, your gear, find quality players to hit with, and get the help you need to improve your game. Join a community that will back you up along your tennis career. 
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10"><img src="img/content/world-map.svg" alt="..."/></div>
                </div>
            </div>
    </section>

    </div>
</React.Fragment>
    
  );
}

export default App;
