import React, { useRef } from "react";
import { AboutUs } from "../../containers/AboutUsContainer/AboutUs";
import { Banner } from "../../containers/BannerContainer/Banner";
import { Carousel } from "../../containers/Carousel/Carousel";
import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { WorkContainer } from "../../containers/OurWorkContainer/WorkContainer";
import { SkillsContainer } from "../../containers/SkillsContainer/SkillsContainer";

export const MainPage = () => {
    const aboutUs = useRef(null);
    const nfts = useRef(null);

    const scrollToSectionHandler = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <HeaderContainer/>
            <Banner/>
            <Carousel/>
            <AboutUs/>
            <WorkContainer/>
            <SkillsContainer/>
        </>
    )
}