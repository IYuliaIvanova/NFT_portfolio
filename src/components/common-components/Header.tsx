import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/themes";

interface IHeaderProps {
    padding?: string;
    scrollHeader?: boolean;
}

export const Header = styled.header<IHeaderProps>`
    width: 100%;
    padding: ${p => p.padding};

    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;

    transition: 0.3s easy-in;

    ${p => p.scrollHeader && css`
        background: ${themes.colors.whiteSmoky};
    `}
`