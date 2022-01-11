import React from "react";

const aboutUs = () => {
  return (
    <React.Fragment>
      {/* About Us Start*/}
      <section className="bg-AO-blue md" data-scroll-index="1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-2-9 mt-lg-0 order-2 order-lg-1">
              <div className="pr-lg-4 textAO">
                <h2 className="mb-3">About Us</h2>
                <p className="mb-5 lead">
                  What is the point of playing matches if you do not get better?
                  Our software will make it easy to:
                </p>

                <div className="row">
                  <div className="col-sm-6 mt-2-9 mt-lg-0 order-2 order-lg-1">
                    <ul className="list-style4 mb-0">
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO">
                        </i>
                          <span >Keep Tack of Games (lost/won/etc.)</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO">
                        </i>
                          <span>Registering and Show Off Your Gear</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO">
                        </i>
                          <span>
                            Build A Strong Local/Global Tennis Community
                          </span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6">
                    <ul className="list-style4 mb-0">
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO">
                        </i>
                          <span>Get Hands On Coaching</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO">
                        </i>
                          <span>Easy Tourment Style Set Up</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-plus icon-AO" >
                        </i>
                          <span>Live Scoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                  <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us End*/}
    </React.Fragment>
  );
};

export default aboutUs;
