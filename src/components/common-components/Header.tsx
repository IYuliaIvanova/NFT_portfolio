import React from "react";
import styled from "styled-components";

interface HeaderProps {
    padding?: string;
}

export const Header = styled.header<HeaderProps>`
    padding: ${p => p.padding};
`