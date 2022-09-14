import React from "react";
import styled from "styled-components";

interface INavigationBarProps {
    display?: string;
    justifyContent?: string;
}

export const NavigationBar = styled.nav<INavigationBarProps>`
    display: ${p => p.display};
    justify-content: ${p => p.justifyContent};
`

