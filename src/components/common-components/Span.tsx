import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ISpanProps {
    display?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
    backgroundColor?: string;
}

export const Span = styled.span<ISpanProps>`
    display: ${p => p.display};

    margin: ${p => p.margin};
    padding: ${p => p.padding || "6px 20px"};

    font-style: normal;
    font-weight: 400;
    font-size: ${p => p.fontSize || "16"}px;
    line-height: ${p => p.lineHeight || "18"}px;
    letter-spacing: 0.48px;
    
    color: ${p => p.color || COLOR.white};
    background-color: ${p => p.backgroundColor};
    border-radius: 30px;
`