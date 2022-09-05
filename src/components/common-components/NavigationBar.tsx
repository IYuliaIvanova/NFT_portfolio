import React from "react";
import styled from "styled-components";

interface NavigationBarProps {
    display?: string;
    justifyContent?: string;
}

export const NavigationBar = styled.nav<NavigationBarProps>`
    display: ${p => p.display};
    justify-content: ${p => p.justifyContent};
`

