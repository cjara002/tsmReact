// import logo from "./logo.svg";
import {
    withAuthenticator,
    Button,
    Heading,
    // Image,
    View,
    Card,
  } from "@aws-amplify/ui-react";
  import "@aws-amplify/ui-react/styles.css";
  import React from "react";

  function login({ signOut }) {
    return (
      <React.Fragment>
        {/* Main Wrapper */}
        <div className="main-wrapper">
        <View className="App">
        <Card>
          {/* <Image src={logo} className="App-logo" alt="logo" /> */}
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
          {/* <LandingPage /> */}
        </div>
      </React.Fragment>
    );
  }
  
  export default withAuthenticator(login);
  