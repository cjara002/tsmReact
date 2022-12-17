// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LandingPage from "./components/public/landingPage";
import Login from "./components/screens/login.jsx";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  // Button,
  // Heading,
  // Image,
  // View,
  // Card,
} from "@aws-amplify/ui-react";
//import { Route, Switch, useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

// const App = () => {
//   const location = useLocation();
//   return (
//     <React.Fragment>
//       <Router location={location} key={location.pathname}>
//      <div className="main-wrapper">
//       <Switch>
//         <Route exact path="/">
//           <LandingPage />
//         </Route>
//         <Route exact path="/services">
//           <Login />
//         </Route>
//       </Switch>
//       </div>
//       </Router>
//     </React.Fragment>
//   );
// }

// // export default withAuthenticator(App);
// export default withRouter(App);

const App = () => {
  //const location = useLocation();
  return (
    <React.Fragment>
        {/* <Suspense fallback={<PageLoader />}> */}
        {/* <Router location={location} key={location.pathname}> */}
          <div className="main-wrapper">
            <Switch>
                  <Route exact path="/">
                  <LandingPage />
                  </Route>
                  <Route exact path="/login">
                  <Login />
                  </Route>
                  
            </Switch>
          </div>
        {/* </Router> */}
      </React.Fragment>
    );
}

export default withAuthenticator(App);

