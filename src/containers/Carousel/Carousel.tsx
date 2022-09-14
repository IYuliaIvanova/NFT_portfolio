import React, { useEffect, useState } from "react";
import { Section } from "../../components/common-components/Section";
import { Divide } from "../../components/common-components/Divide";
import { carouselImagesData } from "../../constants/carouselConstants";
import { Image } from "../../components/common-components/Image";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stateSlides, setStateSlides] = useState(carouselImagesData);

    // useEffect(() => {
    //     // cloneSlides.push(stateSlides[currentIndex])
    //     const interval = setInterval(() => {
    //         const newCurrentIndex = currentIndex > stateSlides.length - 1 ? 0 : currentIndex + 1
    //         setCurrentIndex(newCurrentIndex)
    //         // setStateSlides([...stateSlides.slice(1, stateSlides.length), stateSlides[newCurrentIndex]])
    //     }, 1000)
    //     console.log(stateSlides)
    //     return () => clearInterval(interval)
    //   }, [currentIndex])

    return (
        <Section className="carousel">
            <Divide className="carousel-container" display="flex" flexWrap="nowrap" overflow="hidden">
                {stateSlides.map(({ id, img }, index) => {
                    return (
                        <Divide key={index} className="carousel-item" width={100} height="152" 
                        transform={`translate(-${currentIndex * 100}%)`}
                        transition=".5s all ease-in-out"
                        >
                            <Image  width="152" src={require(`../../assets/slider/${img}.jpg`)}/>
                        </Divide>
                    )
                })}
            </Divide>
        </Section>
    )
}