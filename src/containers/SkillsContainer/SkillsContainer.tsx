import React from "react";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { Section } from "../../components/common-components/Section";
import { Image } from "../../components/common-components/Image";
import { Span } from "../../components/common-components/Span";
import { HeadingFourthLevel } from "../../components/common-components/HeadingFourthLevel";
import { themes } from "../../constants/themes";
import { Paragraph } from "../../components/common-components/Paragraph";

export const SkillsContainer = () => {
    return (
        <Section>
            <Container display="flex" columnGap="63">
                <Divide padding="64px 90px 64px 30px">
                    <Divide margin="0 0 32px 0">
                        <Span display="inline-block" margin="0 0 13px 0" backgroundColor={themes.colors.lightGreenBlue}>01</Span>
                        <HeadingFourthLevel margin="0 0 13px 0" fontWeight="700">Motion Graphic</HeadingFourthLevel>
                        <Paragraph>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                    </Divide>
                    <Divide  margin="0 0 32px 0">
                        <Span display="inline-block" margin="0 0 13px 0" backgroundColor={themes.colors.pink}>02</Span>
                        <HeadingFourthLevel margin="0 0 13px 0" fontWeight="700">Digital Illustration</HeadingFourthLevel>
                        <Paragraph>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                    </Divide>
                    <Divide>
                        <Span display="inline-block" margin="0 0 13px 0" backgroundColor={themes.colors.pear}>03</Span>
                        <HeadingFourthLevel margin="0 0 13px 0" fontWeight="700">Photography</HeadingFourthLevel>
                        <Paragraph>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                    </Divide>
                </Divide>
                <Image src={require(`../../assets/skillsMan.png`)}/>
            </Container>
        </Section>
    )
}