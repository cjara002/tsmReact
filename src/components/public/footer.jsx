import React from "react";

const footer = () => {
    return (
        <React.Fragment>
{/* Footer START */}
<footer
          className="bg-light position-relative overflow-hidden"
          data-scroll-index="5"
        >
          <div className="footer-style pb-6 pv-sm-8 pt-16 position-relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div>
                    <h3 className="h5 mb-4">Contact Us</h3>
                    <ul className="list-style-1 m-0 list-unstyled">
                        <li className="d-flex">
                          <span>
                            <i className="ti-email text-primary">
                            </i>
                          </span>
                          <span className="pl-2">
                              email@email.com
                          </span>

                        </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="py-4 border-top border-color-light-black">
            <div className="container">
              <div className="row align-items-center"> 
              <div className="col text-center text-md-left mb-3 mb-md-0">
                <p className="mb-0"> &copy; Website Design by 
                <a href="#!">
                Carlos Jara
                </a>
                </p>
              </div>

              </div>
            </div>  

          </div>

        </footer>
        

        {/* FOOTER END */}
        </React.Fragment>
    )
}

export default footer;