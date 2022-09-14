import React from "react";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { HeadingSecondLevel } from "../../components/common-components/HeadingSecondLevel";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Section } from "../../components/common-components/Section";

export const AboutUs = () => {
    return (
        <Section id="aboutUs" padding="128px 0 96px 0">
            <Container>
                <Divide textAlign="center">
                    <HeadingSecondLevel margin="0 0 25px 0">Hey there, we are</HeadingSecondLevel>
                    <Paragraph display="inline-block" maxWidth="610">Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</Paragraph>
                </Divide>
            </Container>
        </Section>
    )
}