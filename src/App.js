import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LandingPage from "./components/public/landingPage";
import Notes from "./components/screens/Notes.jsx";
import "@aws-amplify/ui-react/styles.css";
import { Route, Switch } from "react-router-dom";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";

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
                  <Route exact path="/notes">
                  <Notes />
                  </Route>
            </Switch>
          </div>
      </React.Fragment>
    );
}

export default withAuthenticator(App);

