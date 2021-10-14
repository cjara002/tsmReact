import React from "react";

const aboutUs = () => {
  return (
    <React.Fragment>
      {/* About Us Start*/}
      <section className="bg-light md" data-scroll-index="1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mt-2-9 mt-lg-0 order-2 order-lg-1">
              <div className="pr-lg-4">
                <h2 className="mb-3">About Us</h2>
                <p className="mb-5 lead">
                  What is the point of playing matches if you do not get better?
                  Our software will make it easy to:
                </p>

                <div className="row">
                  <div className="col-sm-6 mt-2-9 mt-lg-0 order-2 order-lg-1">
                    <ul className="list-style4 mb-0">
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>Keep Tack of Games (lost/won/etc.)</span>
                        </i>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>Registering and Show Off Your Gear</span>
                        </i>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>
                            Build A Strong Local/Global Tennis Community
                          </span>
                        </i>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6">
                    <ul className="list-style4 mb-0">
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>Get Hands On Coaching</span>
                        </i>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>Easy Tourment Style Set Up</span>
                        </i>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-check-sqaure">
                          <span>Live Scoring</span>
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              {/* <img alt="practie" src={practice} /> */}
            </div>
          </div>
        </div>
      </section>
      {/* About Us End*/}
    </React.Fragment>
  );
};

export default aboutUs;
