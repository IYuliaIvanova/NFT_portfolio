import React from "react";
import { AboutUs } from "../../containers/AboutUsContainer/AboutUs";
import { Banner } from "../../containers/BannerContainer/Banner";
import { Carousel } from "../../containers/Carousel/Carousel";
import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { WorkContainer } from "../../containers/OurWorkContainer/WorkContainer";

export const MainPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Banner/>
            <Carousel/>
            <AboutUs/>
            <WorkContainer/>
        </>
    )
}