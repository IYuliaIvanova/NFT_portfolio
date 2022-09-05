import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ButtonProps {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${p => p.width}px;
    height: ${p => p.height || "44"}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.48px;

    color: ${COLOR.white};
    background: ${ p => p.background || COLOR.blackBasic};
    border-radius: ${p => `${p.borderRadius}px` || `0px`};
`