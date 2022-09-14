import React from "react";
import { Section } from "../../components/common-components/Section";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { HeadingFirstLevel } from "../../components/common-components/HeadingFirsLevel";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Image } from "../../components/common-components/Image"
import { themes } from "../../constants/themes";

export const Banner = () => {
    return (
        <Section padding="63px 0 221px 0">
            <Container
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Divide width={100} maxWidth="600">
                    <Paragraph fontSize="13" lineHeight="14" color={themes.colors.lightGreenBlue}>EXTRAORDINARY NFTs</Paragraph>
                    <HeadingFirstLevel margin="0 0 8px 0">Change your Digital Experience</HeadingFirstLevel>
                    <Paragraph>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                </Divide>
                <Divide width={100} maxWidth="600">
                    <Image src={require("../../assets/banner.png")} width="600"/>
                </Divide>
            </Container>
        </Section>
    )
}