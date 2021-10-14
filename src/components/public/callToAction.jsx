import React from "react";
import ball from "../../img/tennisBall.jpg";


const callToAction = () => {
    return(
        <React.Fragment>
  {/* CTA Start */}
  <section
          className="bg-img cover-background theme-overlay"
          id="CTABanner"
          data-overlay-dark="8"
          style={{ backgroundImage: `url(${ball})` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-xl-7 text-center text-lg-left">
                <h2 className="text-white mb-1-6 mb-lg-0">
                  Get Started today!
                </h2>
              </div>
              <div className="col-lg-4 col-xl-5">
                <div className="text-center text-lg-right">
                  <a href="appointment.html" className="butn white">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA End */}
        </React.Fragment>
    )
}

export default callToAction;