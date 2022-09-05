import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/themes";

interface IListItemProps {
  margin?: string;
  padding?: string;
  bgColor?: string;
  hoverNavBar?: boolean;
}

export const ListItem = styled.li<IListItemProps>`
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  
  background-color: ${p => p.bgColor};

  ${p => p.hoverNavBar && css`
    border-bottom: 3px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.2);
      border-color: ${themes.colors.lightGreenBlue};
    }
  `}
`