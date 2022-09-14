import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IHeadingThirdLevelProps {
    display?: string;
    width?: string | number;
    maxWidth?: string;
    margin?: string;
    padding?: string;
}

export const HeadingThirdLevel = styled.h2<IHeadingThirdLevelProps>`
    display: ${p => p.display};
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    max-width: ${p => p.maxWidth}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 36px;
    letter-spacing: 0.48px;
    
    color: ${COLOR.blackBasic};
`