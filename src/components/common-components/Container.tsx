import React from "react";
import styled from "styled-components";

interface IContainerProps {
    display?: string;
    padding?: string;
    alignItems?: string;
    justifyContent?: string;
    rowGap?: string;
    columnGap?: string;
    textAlign?: string;
    borderBottom?: string;
}

export const Container = styled.div<IContainerProps>`
    display: ${p => p.display};
    width: 100%;
    max-width: 1170px;

    margin: 0 auto;
    padding: ${p => p.padding || "0 16px"};

    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};
    row-gap: ${p => p.rowGap}px;
    column-gap: ${p => p.columnGap}px;

    text-align: ${p => p.textAlign};

    border-bottom: ${p => p.borderBottom};
`

