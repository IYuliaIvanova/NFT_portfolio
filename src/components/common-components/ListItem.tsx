import React from "react";
import styled from "styled-components";

interface IListItemProps {
  margin?: string;
  padding?: string;
  bgColor?: string;
}

export const ListItem = styled.li<IListItemProps>`
  margin: ${p => p.margin};
  padding: ${p => p.padding || "0"}px;
  
  background-color: ${p => p.bgColor};
`