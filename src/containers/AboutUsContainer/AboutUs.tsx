import React, { useState } from "react";
import { Button } from "../../components/common-components/Button";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { HeadingSecondLevel } from "../../components/common-components/HeadingSecondLevel";
import { HeadingThirdLevel } from "../../components/common-components/HeadingThirdLevel";
import { Image } from "../../components/common-components/Image";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Section } from "../../components/common-components/Section";
import { sliderAboutUsData } from "../../constants/aboutUsConstants";
import { themes } from "../../constants/themes";

export const AboutUs = () => {
    const [indexActive, setIndexActive] = useState(0);

    return (
        <Section id="aboutUs" padding="128px 0 96px 0">
            <Container padding="0 48px">
                <Divide margin="0 0 72px 0" textAlign="center">
                    <HeadingSecondLevel margin="0 0 25px 0">Hey there, we are</HeadingSecondLevel>
                    <Paragraph display="inline-block" maxWidth="610">Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                </Divide>
                <Divide display="flex" columnGap="8" margin="0 0 64px 0">
                    <Button 
                        width="179" 
                        height="50" 
                        fontWeight="400" 
                        fontSize="22" 
                        lineHeight="22" 
                        color={themes.colors.blackBasic}
                        background={themes.colors.white}
                        border={`1px solid ${themes.colors.blackBasic}`}
                        borderRadius="30"
                        hoverAbout
                        activeAbout={indexActive === 0 ? true : false}
                        onClick={() => setIndexActive(0)}
                    >
                        Jack
                    </Button>
                    <Button 
                        width="179" 
                        height="50" 
                        fontWeight="400" 
                        fontSize="22" 
                        lineHeight="22" 
                        color={themes.colors.blackBasic}
                        background={themes.colors.white}
                        border={`1px solid ${themes.colors.blackBasic}`}
                        borderRadius="30"
                        hoverAbout
                        activeAbout={indexActive === 1 ? true : false}
                        onClick={() => setIndexActive(1)}
                    >
                        Suni
                    </Button>
                    <Button 
                        width="179" 
                        height="50" 
                        fontWeight="400" 
                        fontSize="22" 
                        lineHeight="22" 
                        color={themes.colors.blackBasic}
                        background={themes.colors.white}
                        border={`1px solid ${themes.colors.blackBasic}`}
                        borderRadius="30"
                        hoverAbout
                        activeAbout={indexActive === 2 ? true : false}
                        onClick={() => setIndexActive(2)}
                    >
                        Colin
                    </Button>
                </Divide>
                <Divide display="flex" alignItems="center" overflow="hidden">
                    {sliderAboutUsData.map(({ id, img, jobTitle, title, text}) => {
                        return (
                            <Divide 
                                key={id} 
                                minWidth={100} 
                                display="flex" 
                                alignItems="center" 
                                transition="0.2s all leaner" 
                                transform={`translate(-${indexActive * 100}%)`}
                            >
                                <Image width="552" height="395" src={require(`../../assets/${img}.png`)}/>
                                <Divide>
                                    <Paragraph 
                                        margin="0 0 19px 0" 
                                        fontSize="16" 
                                        lineHeight="18" 
                                        color={themes.colors.pink}
                                    >
                                        {jobTitle}
                                    </Paragraph>
                                    <HeadingThirdLevel display="inline-block" maxWidth="341" margin="0 0 16px 0">{title}</HeadingThirdLevel>
                                    <Paragraph display="inline-block" maxWidth="477" fontSize="20">{text}</Paragraph>
                                </Divide>
                            </Divide> 
                        )
                    })}
                </Divide>
            </Container>
        </Section>
    )
}