import React from "react";

const footer = () => {
    return (
        <React.Fragment>
{/* Footer START */}
<footer
          className="bg-AO-blue position-relative overflow-hidden"
          data-scroll-index="5"
        >
          <div className="footer-style pb-6 pv-sm-8 pt-16 position-relative textAO">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div>
                    < br />
                    <h3 className="h5 mb-4">Contact Us</h3>
                    <ul className="list-style-1 m-0 list-unstyled">
                        <li className="d-flex">
                          <span>
                            <i className="fas fa-envelope-open">
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
            </div>
          </div>

          <div className="py-4 border-top border-color-light-black textAO ">
            <div className="container">
              <div className="row align-items-center"> 
              <div className="col text-center text-md-left mb-3 mb-md-0">
                <p className="mb-0">  Website Design by &copy;
                <a className="textAO" href="https://www.carlosjaraportfolio.com/" target="blank" style={{textDecoration: "none"}}>
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