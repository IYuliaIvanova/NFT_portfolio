import React from "react";
import { Section } from "../../components/common-components/Section";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { HeadingFourthLevel } from "../../components/common-components/HeadingFourthLevel";
import { Image } from "../../components/common-components/Image";
import { HeadingThirdLevel } from "../../components/common-components/HeadingThirdLevel";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Button } from "../../components/common-components/Button";

export const WorkContainer = () => {
    return (
        <Section padding="0 0 84px 0">
            <Container display="flex" columnGap="63">
                <Image src={require(`../../assets/work.png`)}/>
                <Divide>
                    <HeadingFourthLevel margin="0 0 2px 0" textTransform="uppercase">our work</HeadingFourthLevel>
                    <HeadingThirdLevel margin="0 0 38px 0">“Um… what’s going on here?”</HeadingThirdLevel>
                    <Paragraph margin="0 0 32px 0" fontSize="18">Nulla facilisi. Praesent molestie diam eu enim aliquet pellentesque. Vestibulum consectetur vestibulum tristique. Sed purus neque, maximus fermentum bibendum et, porta in sapien.</Paragraph>
                    <Button display="block" width="166" margin="0 0 0 auto">About Codx</Button>
                </Divide>
            </Container>
        </Section>
    )
}