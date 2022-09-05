import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IUnorderedListProps {
  display?: string;
  margin?: string;
  padding?: string;
}

export const UnorderedList = styled.ul<IUnorderedListProps>`
  display: ${p => p.display};

  list-style-type: none;
`