import React from "react";
import Header from "./header";
import HeroBanner from "./heroBanner";
import AboutUs from "./aboutUs"
import CTA from "./callToAction";
import Footer from "./footer";

const landingPage = () => {
    return(
<React.Fragment>
<Header />
<HeroBanner />
<AboutUs />
<CTA />
<Footer />
</React.Fragment>
    )
}

export default landingPage;