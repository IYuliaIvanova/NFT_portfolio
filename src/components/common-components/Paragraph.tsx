import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ParagraphProps {
    margin?: string;
    padding?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.48px;
    
    color: ${COLOR.blackBasic};
`