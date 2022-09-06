import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ParagraphProps {
    margin?: string;
    padding?: string;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 400;
    font-size: ${p => p.fontSize || "17"}px;
    line-height: ${p => p.lineHeight || "26"}px;
    letter-spacing: 0.48px;
    
    color: ${p => p.color || COLOR.blackBasic};
`