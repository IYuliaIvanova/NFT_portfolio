import React from "react";
import styled, {css} from "styled-components";
import { COLOR } from "../../constants/color";

interface IButtonProps {
    display?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    hoverAbout?: boolean;
    activeAbout?: boolean;
}

export const Button = styled.button<IButtonProps>`
    display: ${p => p.display};
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

    color: ${p => p.color || COLOR.white};
    background: ${ p => p.background || COLOR.blackBasic};
    border: ${p => p.border};
    border-radius: ${p => `${p.borderRadius}px` || `0px`};

    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        ${p => p.hoverAbout && css`
            color: ${COLOR.white};
            background: ${COLOR.blackBasic};
        `}
    }

    ${p => p.activeAbout && css`
        color: ${COLOR.white};
        background: ${COLOR.blackBasic};
    `}
`