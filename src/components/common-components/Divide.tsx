import React from "react";
import styled from "styled-components";

interface DivideProps {
    display?: string;
    width?: string | number;
    margin?: string;
    padding?: string;
    alignItems?: string;
    justifyContent?: string;
    rowGap?: string;
    columnGap?: string;
    position?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

export const Divide = styled.div<DivideProps>`
    display: ${p => p.display};
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};
    row-gap: ${p => p.rowGap}px;
    column-gap: ${p => p.columnGap}px;

    position: ${(p) => ((p.position !== 'relative') && (p.position !== 'static') ? `${p.position};
        top: ${p.top}px;
        bottom: ${p.bottom}px;
        left: ${p.left}px;
        right: ${p.right}px;` : 'relative'
    )};
`