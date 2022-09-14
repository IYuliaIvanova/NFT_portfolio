import React from "react";
import styled, {css} from "styled-components";
import { COLOR } from "../../constants/color";

interface ILinkProps {
    display?: string;
    width?: string | number;
    height?: string;
    margin?: string;
    padding?: string;
    social?: boolean;
}

export const Link = styled.a<ILinkProps>`
    display: ${p => p.display || "block"};
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    height: ${p => p.height}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.48px;

    color: ${COLOR.blackBrown};

    ${p => p.social && css`
        transition: all 0.3s linear;

        &:hover {
            transform: scale(1.5);
        }
  `}
`