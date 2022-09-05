import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLOR } from "../../constants/color";

interface NavLinkProps {
    display?: string;
    width?: string | number;
    height?: string;
    margin?: string;
    padding?: string;
}

export const NavLinkCustom = styled(NavLink)<NavLinkProps>`
    display: ${p => p.display};
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    height: ${p => p.height}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.48px;
    text-decoration: none;

    color: ${COLOR.blackBrown};
`