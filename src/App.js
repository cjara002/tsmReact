import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LandingPage from "./components/public/landingPage";

function App() {
  return (
    <React.Fragment>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <LandingPage />
      </div>
    </React.Fragment>
  );
}

export default App;
