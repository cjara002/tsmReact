import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tennisLogo from "./img/tennisLogo.png";
import React from "react";
import practice from "./img/practice.jpg";
import ball from "./img/tennisBall.jpg";

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
{/* About Us Start*/}
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
                    <div class="col-md-10"><img src={practice} alt="..."/></div>
                </div>
            </div>
    </section>
    {/* About Us End*/}
{/*Features Start*/}
    <section className="pt-0">
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-lg-4 mb-1-6 mb-lg-0">
          <div className="card bg-primary border-0 card-style7 h-100">
            <div className="card-body pb-2-0 pt-5">
              <i className="ti-time icon" />
              <h3 className="text-white h4 mb-5">Feature 1</h3>
              {/* <ul className="mb-0 list-unstyled">
                <li className="text-white border-bottom mb-2 pb-2 border-color-light-white">
                  <span>Monday - Friday </span>
                  <span className="float-right">9.00 - 14.00</span>
                </li>
                <li className="text-white border-bottom mb-2 pb-2 border-color-light-white">
                  <span>Saturday </span>
                  <span className="float-right">9.00 - 14.00</span>
                </li>
                <li className="text-white">
                  <span>Sunday </span>
                  <span className="float-right">9.00 - 14.00</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-1-6 mb-lg-0">
          <div className="card bg-primary border-0 card-style7 h-100">
            <div className="card-body pb-2-0 pt-5">
              <i className="ti-agenda icon" />
              <h3 className="text-white h4 mb-5">Feature 2</h3>
              {/* <ul className="mb-0 list-unstyled">
                <li className="text-white border-bottom mb-2 pb-2 border-color-light-white">
                  <span>Phone </span>
                  <span className="float-right">(0) 1213 456 789</span>
                </li>
                <li className="text-white border-bottom mb-2 pb-2 border-color-light-white">
                  <span>Email </span>
                  <span className="float-right">youremail@here.com</span>
                </li>
                <li className="text-white">
                  <span>Location </span>
                  <span className="float-right">74 Guild Street, Town.</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card bg-primary border-0 card-style7 h-100">
            <div className="card-body pb-2-0 pt-5">
              <i className="ti-email icon" />
              <h3 className="text-white h4 mb-5">Feature 3</h3>
              {/* <form
                className="quform"
                action="quform/newsletter-two.php"
                method="post"
                encType="multipart/form-data"
                onclick
              >
                <div className="quform-elements">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="email_address"
                            type="text"
                            name="email_address"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="quform-submit-inner">
                        <button
                          className="butn white btn-block md"
                          type="submit"
                        >
                          <span>Subscribe</span>
                        </button>
                      </div>
                      <div className="quform-loading-wrap text-left">
                        <span className="quform-loading" />
                      </div>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
{/*Features End*/}

{/* CTA Start */}
<section class="bg-img cover-background theme-overlay" data-overlay-dark="8" style={{backgroundImage: `url(${ball})`}}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-xl-7 text-center text-lg-left">
                        <h2 class="text-white mb-1-6 mb-lg-0">Get Started today!</h2>
                    </div>
                    <div class="col-lg-4 col-xl-5">
                        <div class="text-center text-lg-right">
                            <a href="appointment.html" class="butn white">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* CTA End */}
    </div>
</React.Fragment>
    
  );
}

export default App;
