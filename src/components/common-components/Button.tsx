import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ButtonProps {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    background?: string;
    borderRadius?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${p => p.width || "144"}px;
    height: ${p => p.height || "44"}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: ${p => p.fontWeight || "700"};
    font-size: ${p => p.fontSize || "14"}px;
    line-height: ${p => p.lineHeight || "16"}px;
    text-align: center;
    letter-spacing: 0.48px;

    color: ${COLOR.white};
    background: ${ p => p.background || COLOR.blackBasic};
    border-radius: ${p => `${p.borderRadius}px` || `0px`};

    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`