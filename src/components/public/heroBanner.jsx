import React from "react";

const heroBanner = () => {
  return (
    <React.Fragment>
      <div className="tennisHeroBg">
        <div className="container d-flex flex-column">
          <div className="row align-items-center min-vh-100">
            <div
              className="col-12"
              style={{ backgroundColor: "rgb(1, 2, 3, .5)" }}
            >
                {/* <div className="container"> */}
              <div className="row align-items-center py-12 py-lg-10">
                  <div className="col-lg-6 mt-1-6 mt-lg-0 order-2 order-lg-1 position-relative text-white">
                    <h6>Take your game to the next level...</h6>
                    <h1 className="display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">
                      Tap into your{" "}
                      <strong className="text-success font-weight-700">
                        MAX
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
                    <a href="#!" className="butn" style={{textDecoration: "none"}}>
                      Sign-Up Now
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HeroBanner End */}
    </React.Fragment>
  );
};
export default heroBanner;
