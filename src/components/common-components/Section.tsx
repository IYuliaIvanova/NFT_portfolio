import React from "react";
import styled from "styled-components";

interface ISectionProps {
    padding?: string;
}

export const Section = styled.section<ISectionProps>`
    padding: ${p => p.padding};
`