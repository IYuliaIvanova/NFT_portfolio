import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface HeadingFirstLevelProps {
    margin?: string;
    padding?: string;
}

export const HeadingFirstLevel = styled.h1<HeadingFirstLevelProps>`
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 0.48px;
    
    color: ${COLOR.blackBasic};
`